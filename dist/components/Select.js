import { jsx as _jsx } from "react/jsx-runtime";
export const Select = ({ options, defaultValue, onChange, }) => {
    return (_jsx("select", { defaultValue: defaultValue, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value), style: { padding: "8px" }, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) }));
};
