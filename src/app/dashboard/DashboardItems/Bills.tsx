export const Bills: React.FC<BillsProps> = ({ amount }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-8 overflow-hidden inline-block">
        <div className="h-4 w-4 bg-red-500 rotate-45 transform origin-top-right translate-x-[5px]"></div>
      </div>
      <p className="text-6xl font-bold mb-4">{amount}€</p>
    </div>
  );
};

interface BillsProps {
  amount: number;
}
