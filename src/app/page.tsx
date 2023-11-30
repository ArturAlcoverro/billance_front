import { DashboardCard } from "@/components/DashboardCard/DashboardCard";
import Header1 from "../components/Headers/Header1";
import Ballance from "./dashboard/DashboardItems/Ballance";
import { Bills } from "./dashboard/DashboardItems/Bills";
import Categories from "./dashboard/DashboardItems/Categories";
import { Income } from "./dashboard/DashboardItems/Income";

export default function Home() {
  return (
    <div className="flex flex-col h-full ">
      <Header1 className="text-4xl font-extrabold flex-grow-0">
        Dashboard
      </Header1>
      <div className="flex-grow grid grid-cols-12 grid-rows-[250px_1fr] gap-4">
        <DashboardCard title="Total Income" className="col-span-4">
          <Income amount={1200}/>
        </DashboardCard>
        <DashboardCard title="Total Bills" className="col-span-4">
          <Bills amount={3000}/>
        </DashboardCard>
        <DashboardCard title="Balance" className="col-span-4">
          <Ballance income={1200} bills={3000}/>
        </DashboardCard>
        <DashboardCard title="Categories" className="col-span-12">
          <Categories/>
        </DashboardCard>
      </div>
    </div>
  );
}
