'use client'

export default function DropdownContainer({
  children,
  open = false,
  position = "bottom",
  align = "center",
  className,
  ...props
}: DropdownContainerProps) {
  return (
    <>
      {open && (
        <div
          className={`border border-slate-300 absolute z-20 bg-white p-2 rounded-lg ${positions[position]} ${alignments[position][align]} ${className}`}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
}

interface DropdownContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode,
  open?: boolean,
  className?: string,
  position?: "top" | "bottom" | "left" | "right",
  align?: "start" | "center" | "end",
}

const positions = {
  top: '-translate-y-full -top-1',
  bottom: 'translate-y-full -bottom-1',
  left: '-translate-x-full -left-1',
  right: 'translate-x-full -right-1',
}

const alignments = {
  top: {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0',
  },
  bottom: {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0',
  },
  left: {
    start: 'top-0',
    center: 'top-1/2 transform -translate-y-1/2',
    end: 'bottom-0',
  },
  right: {
    start: 'top-0',
    center: 'top-1/2 transform -translate-y-1/2',
    end: 'bottom-0',
  },
}