export default function Header6({ children, className = "", ...props }: Header6Props) {
  return (
    <h6 className={`text-lg font-bold ${className}`} {...props}>{children}</h6>
  )
}

interface Header6Props {
  children: React.ReactNode,
  className?: string,
}