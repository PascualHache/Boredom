import React from "react";
import { Input } from "./InputBox.style";

export default function InputBox({
  placeholder = "",
  value = "",
  onChange,
  icon = {},
}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      icon={icon}
    />
  );
}
