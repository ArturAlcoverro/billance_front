export default function Header5({ children, className = "", ...props }: Header5Props) {
  return (
    <h5 className={`text-xl font-bold${className}`} {...props}>{children}</h5>
  )
}

interface Header5Props {
  children: React.ReactNode,
  className?: string,
}