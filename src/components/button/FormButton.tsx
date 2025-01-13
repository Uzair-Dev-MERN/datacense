import React from "react";

interface CustomButtonProps {
  type?: "submit" | "button" | "reset"; // Default type is submit
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "submit", // default type is submit
  onClick,
  loading = false,
  disabled = false,
  children,
  className = "",
}) => {
  // Button styles based on the type prop
  let buttonStyle = "";
  if (loading) {
    buttonStyle = "bg-blue-600 text-white cursor-wait";
  } else if (disabled) {
    buttonStyle = "bg-gray-400 text-white cursor-not-allowed";
  } else {
    buttonStyle = "bg-gray-800 text-white hover:bg-gray-900";
  }

  return (
    <button
      type={type} // Use the type prop (submit, button, reset)
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full py-2 px-4 rounded-md transition-all ${buttonStyle} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
