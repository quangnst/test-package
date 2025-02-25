var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { updateTextInput } from "./actions/textInput";
const TextInput = ({ placeholder, apiUrl, onBlur, }) => {
    function handleBlur(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("update data", value);
            const payload = {
                name: "Apple MacBook Pro 16",
                data: {
                    year: 2019,
                    price: 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                },
            };
            yield updateTextInput(apiUrl, payload);
        });
    }
    const [value, setValue] = useState("");
    return (_jsx("input", { type: "text", value: value, placeholder: placeholder, onChange: (e) => setValue(e.target.value), onBlur: () => {
            console.log(value);
            handleBlur === null || handleBlur === void 0 ? void 0 : handleBlur(value);
        }, style: {
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
        } }));
};
export default TextInput;
//# sourceMappingURL=TextInput.js.map