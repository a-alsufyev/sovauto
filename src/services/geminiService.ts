import { GoogleGenAI } from "@google/genai";
import { VEHICLES } from "../data/vehicles";
import { FACTORIES } from "../data/factories";
import { Vehicle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const MUSEUM_GUIDE_PROMPT = (lang: string) => `
You are the Lead Curator of the Soviet AI Museum, an virtual archive of the Soviet Union's automotive history.
Your tone is informative, sophisticated, historically aware, and atmospheric.
You are an expert on Soviet engineering, car factories like VAZ, GAZ, and the social context of these vehicles.

Strict Rules:
1. ONLY answer based on the provided JSON data for vehicles and factories.
2. If the user asks for a car not in the database, politely explain that it's not in our collection yet.
3. Provide historical context: specify how the car was used (e.g., taxi, official use, export).
4. Avoid modern political commentary or hallucinations.
5. Be concise but evocative.
6. Respond in ${lang === 'ru' ? 'RUSSIAN' : 'ENGLISH'}.
`;

export async function askMuseumGuide(question: string, contextId?: string, language: 'en' | 'ru' = 'en') {
  let contextText = "Collection Context:\n";
  
  if (contextId) {
    const vehicle = VEHICLES.find(v => v.id === contextId);
    if (vehicle) {
      contextText += `Current Vehicle Item: ${JSON.stringify(vehicle)}\n`;
    }
  } else {
    // General context: small summary of collection
    contextText += `We have a collection of ${VEHICLES.length} vehicles from factories like ${FACTORIES.map(f => f.name).join(", ")}.\n`;
    contextText += `Featured models include the Lada Niva, Volga GAZ-21, and the microcar ZAZ-965.\n`;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: MUSEUM_GUIDE_PROMPT(language) + "\n" + contextText,
        temperature: 0.7,
      }
    });

    return response.text || (language === 'ru' ? "Извините, я не нашел ответа в наших архивах." : "I'm sorry, I couldn't find an answer in our archives.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'ru' ? "Гид временно недоступен. Пожалуйста, попробуйте позже." : "The guide is currently unavailable. Please try again later.";
  }
}

export async function compareVehiclesAI(id1: string, id2: string, language: 'en' | 'ru' = 'en') {
  const v1 = VEHICLES.find(v => v.id === id1);
  const v2 = VEHICLES.find(v => v.id === id2);

  if (!v1 || !v2) return language === 'ru' ? "Не удалось найти автомобили для сравнения." : "Could not find vehicles to compare.";

  const prompt = `Compare these two Soviet vehicles side-by-side:
  
  Vehicle 1: ${JSON.stringify(v1)}
  Vehicle 2: ${JSON.stringify(v2)}
  
  Provide:
  1. Technical contrast (power, engine, class).
  2. Historical role comparison (e.g., who drove it, what was the status).
  3. Strengths and weaknesses in their respective Soviet contexts.
  4. Conclusion: Which one defined its era more?`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: MUSEUM_GUIDE_PROMPT(language),
        temperature: 0.8,
      }
    });

    return response.text || (language === 'ru' ? "Сравнение недоступно." : "Comparison unavailable.");
  } catch (error) {
    console.error("Gemini Comparison Error:", error);
    return language === 'ru' ? "Не удалось выполнить сравнение ИИ в данный момент." : "Unable to perform AI comparison at this time.";
  }
}
