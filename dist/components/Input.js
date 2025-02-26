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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { callApi } from "../actions/apiAction";
export const Input = ({ placeholder = "Enter something...", apiEndpoint, }) => {
    const [value, setValue] = useState("");
    const [response, setResponse] = useState(null);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Calling API with input:", value);
        e.preventDefault();
        const result = yield callApi(value, apiEndpoint);
        setResponse(result);
    });
    return (_jsx("input", { type: "text", value: value, onChange: (e) => setValue(e.target.value), onBlur: handleSubmit, placeholder: placeholder, style: { padding: "8px", marginRight: "8px" } }));
};
