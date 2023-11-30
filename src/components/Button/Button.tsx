import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export default function Button({
  children,
  className,
  color = "slate",
  refProp = null,
  variant = "secondary",
  ...props
}: ButtonProps) {

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "text-slate-600 bg-white hover:bg-slate-100 border border-slate-300",
  };

  return (
    <button
      ref={refProp}
      className={`${variantStyles[variant]} rounded-lg text-base px-4 py-2 flex items-center justify-center gap-2 ${styles.main} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  refProp?: any;
}
