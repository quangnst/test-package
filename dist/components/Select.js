"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Select = ({ options, defaultValue, onChange, }) => {
    return ((0, jsx_runtime_1.jsx)("select", { defaultValue: defaultValue, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value), style: { padding: "8px" }, children: options.map((option) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, option.value))) }));
};
exports.default = Select;
