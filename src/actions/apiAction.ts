"use server";

export async function callApi(input: string, apiEndpoint: string) {
  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    return data.message || "Success";
  } catch (error) {
    console.error("API call failed:", error);
    return "Error calling API";
  }
}
