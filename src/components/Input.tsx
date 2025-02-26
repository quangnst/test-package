"use client";

import React, { useState } from "react";
import { callApi } from "../actions/apiAction";

export const Input = ({
  placeholder = "Enter something...",
  apiEndpoint,
}: {
  placeholder?: string;
  apiEndpoint: string;
}) => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  console.log("aaa", process.env.NEXT_PUBLIC_ADMIN_EMAIL);
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Calling API with input:", value);
    e.preventDefault();
    const result = await callApi(value, apiEndpoint);
    setResponse(result);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleSubmit}
      placeholder={placeholder}
      style={{ padding: "8px", marginRight: "8px" }}
    />
  );
};
