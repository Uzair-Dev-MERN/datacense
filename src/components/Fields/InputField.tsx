import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";

interface InputFieldProps {
  type?: "text" | "password"; // Allow text or password
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string; // Error message
  touched?: boolean; // Whether the field has been touched
}

export const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  name,
  onBlur,
  error,
  touched,
}) => {
  const isError = touched && error;

  return (
    <div>
      {type === "password" ? (
        <Input.Password
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          status={isError ? "error" : ""}
          size="large"
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          status={isError ? "error" : ""}
          size="large"
        />
      )}
      {isError && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};
