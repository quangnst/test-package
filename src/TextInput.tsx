import React, { useState } from "react";
import { updateTextInput } from "./actions/textInput";
interface TextInputProps {
  placeholder?: string;
  apiUrl: string;
  onBlur?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  apiUrl,
  onBlur,
}) => {
  async function handleBlur(value: string) {
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
    await updateTextInput("https://api.restful-api.dev/objects", payload);
  }
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        console.log(value);
        handleBlur?.(value);
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
