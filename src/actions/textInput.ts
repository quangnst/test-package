"use server";

export async function updateTextInput(apiUrl: string, value: string) {
      const res = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ value }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("API request failed");

    return await res.json();
}