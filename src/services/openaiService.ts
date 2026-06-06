type Language = 'en' | 'ru' | 'de' | 'es';

export async function askMuseumGuide(question: string, contextId?: string, language: Language = 'en'): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, contextId, language }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      if (errData.reply) return errData.reply;
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.reply;
  } catch (err) {
    console.error("Client askMuseumGuide error:", err);
    if (language === 'ru') {
      return "Извините, не удалось связаться с сервером музея. Попробуйте обновить страницу.";
    } else if (language === 'de') {
      return "Entschuldigung, die Verbindung zum Museumsserver ist fehlgeschlagen. Bitte laden Sie die Seite neu.";
    } else if (language === 'es') {
      return "Lo siento, falló la comunicación con el servidor del museo. Por favor, reinicie la página.";
    }
    return "Sorry, failed to communicate with the museum server. Please refresh the page.";
  }
}

export async function compareVehiclesAI(id1: string, id2: string, language: Language = 'en'): Promise<string> {
  try {
    const response = await fetch("/api/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id1, id2, language }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      if (errData.reply) return errData.reply;
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.reply;
  } catch (err) {
    console.error("Client compareVehiclesAI error:", err);
    if (language === 'ru') {
      return "Гид не может выполнить сравнение на сервере. Пожалуйста, попробуйте позже.";
    } else if (language === 'de') {
      return "Der Museumsführer kann den Vergleich auf dem Server nicht ausführen. Bitte versuchen Sie es später noch einmal.";
    } else if (language === 'es') {
      return "El guía no puede realizar la comparación en el servidor. Por favor, inténtelo de nuevo más tarde.";
    }
    return "The guide cannot perform the comparison on the server. Please try again later.";
  }
}
