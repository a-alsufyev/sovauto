import express from "express";
import path from "path";
import "dotenv/config";
import OpenAI from "openai";
import { createServer as createViteServer } from "vite";
import { VEHICLES } from "./src/data/vehicles";
import { FACTORIES } from "./src/data/factories";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

app.get("/debug", (req, res) => {
  res.json({ ok: true });
});

let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not defined. Please add it to your secrets on AI Studio.");
    }
    openaiClient = new OpenAI({
      apiKey: apiKey,
    });
  }
  return openaiClient;
}

const getResponseLanguage = (lang: string) => {
  switch (lang) {
    case 'ru': return 'RUSSIAN';
    case 'de': return 'GERMAN';
    case 'es': return 'SPANISH';
    default: return 'ENGLISH';
  }
};

const MUSEUM_GUIDE_PROMPT = (lang: string) => `
You are the Lead Curator of the Soviet AI Museum, a virtual archive of the Soviet Union's automotive history.
Your tone is informative, sophisticated, historically aware, and atmospheric.
You are an expert on Soviet engineering, car factories like VAZ, GAZ, and the social context of these vehicles.

Strict Rules:
1. ONLY answer based on the provided JSON data for vehicles and factories.
2. If the user asks for a car not in the database, politely explain that it's not in our collection yet.
3. Provide historical context: specify how the car was used (e.g., taxi, official use, export).
4. Avoid modern political commentary or hallucinations.
5. Be concise but evocative.
6. Respond in ${getResponseLanguage(lang)}.
`;

const getNoAnswerReply = (lang: string) => {
  switch (lang) {
    case 'ru': return "Извините, я не нашел ответа.";
    case 'de': return "Entschuldigung, ich konnte keine Antwort finden.";
    case 'es': return "Lo siento, no pude encontrar una respuesta.";
    default: return "I'm sorry, I couldn't find an answer.";
  }
};

const getMissingKeyReply = (lang: string) => {
  switch (lang) {
    case 'ru': return "Пожалуйста, укажите ваш ключ API OpenAI в настройках (Secrets) или файле .env.";
    case 'de': return "Bitte geben Sie Ihren OpenAI-API-Schlüssel in den Einstellungen (Secrets) oder der .env-Datei an.";
    case 'es': return "Por favor, especifique su clave API de OpenAI en la configuración (Secrets) o en el archivo .env.";
    default: return "Please specify your OpenAI API Key in the settings (Secrets) or the .env file.";
  }
};

const getGeneralChatErrorReply = (lang: string) => {
  switch (lang) {
    case 'ru': return "Гид временно недоступен. Пожалуйста, попробуйте позже.";
    case 'de': return "Der Museumsführer ist vorübergehend nicht verfügbar. Bitte versuchen Sie es später noch einmal.";
    case 'es': return "El guía del museo no está disponible temporalmente. Por favor, inténtelo de nuevo más tarde.";
    default: return "The guide is currently unavailable. Please try again later.";
  }
};

const getGeneralCompareErrorReply = (lang: string) => {
  switch (lang) {
    case 'ru': return "Не удалось выполнить сравнение ИИ в данный момент.";
    case 'de': return "Der KI-Vergleich kann derzeit nicht durchgeführt werden.";
    case 'es': return "No se pudo realizar la comparación de IA en este momento.";
    default: return "Unable to perform AI comparison at this time.";
  }
};

const getVehiclesNotFoundReply = (lang: string) => {
  switch (lang) {
    case 'ru': return "Не удалось найти автомобили для сравнения.";
    case 'de': return "Fahrzeuge für den Vergleich konnten nicht gefunden werden.";
    case 'es': return "No se pudieron encontrar los vehículos para comparar.";
    default: return "Could not find vehicles to compare.";
  }
};

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  const { question, contextId, language = "en" } = req.body;

  let contextText = "Collection Context:\n";
  if (contextId) {
    const vehicle = VEHICLES.find(v => v.id === contextId);
    if (vehicle) {
      contextText += `Current Vehicle Item: ${JSON.stringify(vehicle)}\n`;
    }
  } else {
    contextText += `We have a collection of ${VEHICLES.length} vehicles from factories like ${FACTORIES.map(f => f.name).join(", ")}.\n`;
    contextText += `Featured models include the Lada Niva, Volga GAZ-21, and the microcar ZAZ-965.\n`;
  }

  try {
    const client = getOpenAIClient();
    const systemPrompt = MUSEUM_GUIDE_PROMPT(language) + "\n" + contextText;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question }
      ],
      temperature: 0.7,
    });

    res.json({ reply: response.choices[0]?.message?.content || getNoAnswerReply(language) });
  } catch (error: any) {
    console.error("Server API Chat Error:", error);
    const hasKey = !!process.env.OPENAI_API_KEY;
    if (!hasKey) {
      res.status(500).json({ 
        error: "Missing API Key", 
        reply: getMissingKeyReply(language)
      });
    } else {
      res.status(500).json({ 
        error: error.message, 
        reply: getGeneralChatErrorReply(language)
      });
    }
  }
});

app.post("/api/compare", async (req, res) => {
  const { id1, id2, language = "en" } = req.body;

  const v1 = VEHICLES.find(v => v.id === id1);
  const v2 = VEHICLES.find(v => v.id === id2);

  if (!v1 || !v2) {
    return res.status(404).json({ reply: getVehiclesNotFoundReply(language) });
  }

  const prompt = `Compare these two Soviet vehicles side-by-side:
  
  Vehicle 1: ${JSON.stringify(v1)}
  Vehicle 2: ${JSON.stringify(v2)}
  
  Provide:
  1. Technical contrast (power, engine, class).
  2. Historical role comparison (e.g., who drove it, what was the status).
  3. Strengths and weaknesses in their respective Soviet contexts.
  4. Conclusion: Which one defined its era more?`;

  try {
    const client = getOpenAIClient();
    const systemPrompt = MUSEUM_GUIDE_PROMPT(language);

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.8,
    });

    res.json({ reply: response.choices[0]?.message?.content || (language === 'ru' ? "Сравнение недоступно." : "Comparison unavailable.") });
  } catch (error: any) {
    console.error("Server API Compare Error:", error);
    const hasKey = !!process.env.OPENAI_API_KEY;
    if (!hasKey) {
      res.status(500).json({ 
        error: "Missing API Key", 
        reply: getMissingKeyReply(language)
      });
    } else {
      res.status(500).json({ 
        error: error.message, 
        reply: getGeneralCompareErrorReply(language)
      });
    }
  }
});

async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT} with environment: ${process.env.NODE_ENV || "development"}`);
  });
}

main();
