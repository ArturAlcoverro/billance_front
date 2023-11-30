import Link from "next/link";
import { ButtonProps } from "../Button/Button";
import styles from '../Button/Button.module.scss';

export default function AButton({children, className, color = "blue", href, variant="primary", ...props}: AButtonProps){
  
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "text-slate-600 bg-white hover:bg-slate-100 border border-slate-300",
  };
    
  return (
    <Link
      href={href}
      className={`${variantStyles[variant]} w-fit cursor-pointer rounded-lg text-base px-4 py-2 mr-2 mb-2 flex items-center justify-center gap-2 ${styles.main} ${className}`}
    >
      {children}
    </Link>
  );
}

interface AButtonProps extends ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  
}