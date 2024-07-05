import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  type = "primary",
  onClick,
}) => {
  return (
    <button className={styles.button}>
      {icon && <div className={styles.btnIcon}>{icon}</div>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
