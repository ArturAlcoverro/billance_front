import Header6 from "../Headers/Header6";

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={`${className} bg-white border border-slate-300 rounded-2xl text-sm text-slate-600 p-4 flex flex-col`}
    >
      {title && <Header6 className="flex-grow-0">{title}</Header6>}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
