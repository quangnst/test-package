"use strict";
"use server"; // Đánh dấu đây là server action
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
function fetchData(input, apiEndpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        // Gọi API từ server, giúp bảo mật thông tin như API key
        const response = yield fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Thêm các header bảo mật nếu cần, ví dụ: Authorization
            },
            body: JSON.stringify({ data: input }),
        });
        if (!response.ok) {
            throw new Error("API call failed");
        }
        const result = yield response.json();
        return result.message || "Thành công";
    });
}
