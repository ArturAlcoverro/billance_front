import { Color, colors } from '@/app/colors';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';


export default function Button({children, className, color = "slate", refProp = null, ...props}: ButtonProps) {  
  return (
    <button
      ref={refProp}
      className={`${colors[color]} rounded-lg text-base px-4 py-2 flex items-center justify-center gap-2 ${styles.main} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  color?: Color
  refProp?: any;
}

