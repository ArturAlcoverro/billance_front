export default function Header4({ children, className = "", ...props }: Header4Props) {
  return (
    <h4 className={`text-2xl font-bold  ${className}`} {...props}>{children}</h4>
  )
}

interface Header4Props {
  children: React.ReactNode,
  className?: string,
}