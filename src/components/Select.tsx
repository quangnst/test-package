import React from "react";

interface Option {
  value: string;
  label: string;
}

export const Select = ({
  options,
  defaultValue,
  onChange,
}: {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onChange?.(e.target.value)}
      style={{ padding: "8px" }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
