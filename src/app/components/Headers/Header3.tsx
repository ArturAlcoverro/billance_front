export default function Header3({ children, className = "", ...props }: Header3Props) {
  return (
    <h3 className={`text-3xl font-bold ${className}`} {...props}>{children}</h3>
  )
}

interface Header3Props {
  children: React.ReactNode,
  className?: string,
}