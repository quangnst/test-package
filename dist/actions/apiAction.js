"use server";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function callApi(input, apiEndpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        // Logic gọi API thực tế sẽ được thực hiện ở đây
        // Ví dụ dùng fetch để gọi API
        console.log("use server Calling API with input:", input);
        try {
            const res = yield fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Thêm các header bảo mật nếu cần, như API key
                },
                body: JSON.stringify({ input }),
            });
            const data = yield res.json();
            return data.message || "Success";
        }
        catch (error) {
            console.error("API call failed:", error);
            return "Error calling API";
        }
    });
}
