"use server";

export async function callApi(input: string, apiEndpoint: string) {
  // Logic gọi API thực tế sẽ được thực hiện ở đây
  // Ví dụ dùng fetch để gọi API
  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Thêm các header bảo mật nếu cần, như API key
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
