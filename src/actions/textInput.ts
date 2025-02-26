"use server";

export async function updateTextInput(apiUrl: string, payload: any) {
  console.log("payload", payload, apiUrl);
  const res = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("API request failed");

  return await res.json();
}
