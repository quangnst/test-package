"use strict";
"use client";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const apiAction_1 = require("../actions/apiAction");
const Input = ({ placeholder = "Enter something...", apiEndpoint, }) => {
    const [value, setValue] = (0, react_1.useState)("");
    const [response, setResponse] = (0, react_1.useState)(null);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const result = yield (0, apiAction_1.callApi)(value, apiEndpoint);
        setResponse(result);
    });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: value, onChange: (e) => setValue(e.target.value), placeholder: placeholder, style: { padding: "8px", marginRight: "8px" } }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Submit" }), response && (0, jsx_runtime_1.jsxs)("p", { children: ["Response: ", response] })] }));
};
exports.default = Input;
