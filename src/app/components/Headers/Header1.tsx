export default function Header1({ children, className = "", ...props }: Header1Props) {
  return (
    <h1 className={`text-5xl font-extrabold mb-9 ${className}`} {...props}>{children}</h1>
  )
}

interface Header1Props {
  children: React.ReactNode,
  className?: string,
}