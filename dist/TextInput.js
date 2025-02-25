import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
const TextInput = ({ placeholder, onBlur }) => {
    const [value, setValue] = useState("");
    return (_jsx("input", { type: "text", value: value, placeholder: placeholder, onChange: (e) => setValue(e.target.value), onBlur: () => {
            console.log(value);
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
        }, style: {
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
        } }));
};
export default TextInput;
//# sourceMappingURL=TextInput.js.map