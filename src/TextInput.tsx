import React, { useState } from "react";

interface TextInputProps {
  placeholder?: string;
  onBlur?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, onBlur }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        console.log(value);
        onBlur?.(value);
      }}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
      }}
    />
  );
};

export default TextInput;
