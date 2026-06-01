export async function askMuseumGuide(question: string, contextId?: string, language: 'en' | 'ru' = 'en'): Promise<string> {
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
    return language === 'ru'
      ? "Извините, не удалось связаться с сервером музея. Попробуйте обновить страницу."
      : "Sorry, failed to communicate with the museum server. Please refresh the page.";
  }
}

export async function compareVehiclesAI(id1: string, id2: string, language: 'en' | 'ru' = 'en'): Promise<string> {
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
    return language === 'ru'
      ? "Гид не может выполнить сравнение на сервере. Пожалуйста, попробуйте позже."
      : "The guide cannot perform the comparison on the server. Please try again later.";
  }
}
