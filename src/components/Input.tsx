"use client";

import React, { useState } from "react";
import { callApi } from "../actions/apiAction";

const Input = ({
  placeholder = "Enter something...",
  apiEndpoint,
}: {
  placeholder?: string;
  apiEndpoint: string;
}) => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await callApi(value, apiEndpoint);
    setResponse(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button type="submit">Submit</button>
      {response && <p>Response: {response}</p>}
    </form>
  );
};

export default Input;
