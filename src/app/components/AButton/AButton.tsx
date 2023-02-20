import Link from "next/link";
import { ButtonProps } from "../Button/Button";
import styles from '../Button/Button.module.scss';

export default function AButton({children, className, color = "blue", href, ...props}: AButtonProps){
  const colors = {
    red:    `text-red-600      bg-red-200      hover:bg-red-300      focus:bg-red-300`,
    blue:   `text-blue-600     bg-blue-200     hover:bg-blue-300     focus:bg-blue-300`,
    green:  `text-green-600    bg-green-200    hover:bg-green-300    focus:bg-green-300`,
    purple: `text-purple-600   bg-purple-200   hover:bg-purple-300   focus:bg-purple-300`,
    orange: `text-orange-600   bg-orange-200   hover:bg-orange-300   focus:bg-orange-300`,
    yellow: `text-yellow-600   bg-yellow-200   hover:bg-yellow-300   focus:bg-yellow-300`,
    slate:   `text-slate-600     bg-slate-200     hover:bg-slate-300     focus:bg-slate-200`,
  }
    
  return (
    <Link
      href={href}
      className={`${colors[color]} w-fit cursor-pointer rounded-lg text-base px-4 py-2 mr-2 mb-2 flex items-center justify-center gap-2 ${styles.main} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

interface AButtonProps extends ButtonProps {
  href: string;
}