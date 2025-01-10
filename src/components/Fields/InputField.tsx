import { Input } from "antd";
import React from "react";

interface InputFieldProps {
  placeholder?: string; // Placeholder is optional
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Enter ID",
}) => {
  return (
    <div>
      <Input placeholder={placeholder} />
    </div>
  );
};
