"use client";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export const Categories: React.FC<CategoriesProps> = () => {
  const chartData = [
    { name: "Food", total: 120, color: "#4FA8FB" },
    { name: "Transport", total: 200, color: "#FD4B4B" },
    { name: "Clothes", total: 500, color: "#FBBF24" },
    { name: "Entertainment", total: 400, color: "#10b981" },
    { name: "Other", total: 350, color: "#6366f1" },
  ];

  const colors = ["#4FA8FB", "#FD4B4B", "#FBBF24", "#10B981", "#6366f1"];

  const options: ApexOptions = {
    chart: {
      height: "100%",
      type: "bar",
    },
    xaxis: {
      categories: chartData.map((item) => item.name),
    },
    colors: colors,
  };

  const series = [
    {
      name: "Total",
      data: chartData.map((item) => item.total),
    },
  ];

  return <Chart options={options} series={series} type="bar" height={"100%"} colors={colors}/>;
};

interface CategoriesProps {}

export default Categories;
