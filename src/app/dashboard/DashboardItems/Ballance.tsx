"use client";

import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const Ballance: React.FC<BallanceProps> = ({ income, bills }) => {
  const options: ApexOptions = {
    labels: ["Income", "Bills"],
    legend: {
      position: "bottom",
    },
    colors: ["#4fa8fb", "#fd4b4b"],
    chart: {
      type: "donut",
      height: "60%",
      width: "auto",
    },
  };

  const series = [income, bills];

  return (
    <div className="">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

interface BallanceProps {
  income: number;
  bills: number;
}

export default Ballance;
