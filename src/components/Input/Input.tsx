import { Color, colors } from "@/app/colors";
import styles from './Input.module.scss';

export default function Input({
  children,
  color = "slate",
  type = "text",
  placeholder,
  className,
  label,
  ...props
}: InputProps) {
  return (
    <>
      {/* <label className="text-sm text-slate-600 font-semibold pl-[1px]">{label}</label> */}
      <div
        className={`${colors[color]} rounded-lg text-base px-4 py-2 flex items-center justify-center ${styles.main} ${className}}`}
        {...props}
      >
        <input type={type} placeholder={placeholder} className="bg-transparent focus:outline-none"/>
        {children}
      </div>
    </>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: Color;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  className?: string;
  label?: string;
}
