export default function Header2({ children, className = "", ...props }: Header2Props) {
  return (
    <h2 className={`text-4xl font-bold ${className}`} {...props}>{children}</h2>
  )
}

interface Header2Props {
  children: React.ReactNode,
  className?: string,
}