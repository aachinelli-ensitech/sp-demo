import React from "react";

export interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const getStyles = (...args: any) => ["button", ...args].filter(Boolean).join(" ")

const Button: React.FC<ButtonProps> = ({ label, type = "primary", onClick }) => {
  return <button className={getStyles(type)} onClick={onClick}>{label}</button>;
};

export default Button;