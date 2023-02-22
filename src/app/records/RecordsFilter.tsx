'use client'

import { useState } from "react";
import MonthPicker from "../components/MonthPicker/MonthPicker";
import Select from "../components/Select/Select";
import YearPicker from "../components/YearPicker/YearPicker";

const PER_MONTH_FILTER = "1";
const PER_YEAR_FILTER = "2";
const ALL_TIME_FILTER = "3";

export default function RecordsFilter() {
  const [selectedFilter, setSelectedFilter] = useState(PER_MONTH_FILTER);

  return (
    <div className="flex gap-2">
    <Select
      className="mb-2"
      placeholder="Select a city..."
      options={selectOptions}
      defaultKey={PER_MONTH_FILTER}
      position="bottom"
      align="center"
      handleChange={(e) => setSelectedFilter(e.key)}
    />

    {
      selectedFilter === PER_MONTH_FILTER
      ? <MonthPicker maxYear={2023} minYear={2000} className="mb-2 w-full max-w-[14rem]"/>
      : selectedFilter === PER_YEAR_FILTER 
      ? <YearPicker maxYear={2023} minYear={2000} className="mb-2 w-full max-w-[14rem]"/>
      : null
    }
    </div>
  )
}

const selectOptions = [
  {
    key: PER_MONTH_FILTER,    
    value: "Per month",
  },
  {
    key: PER_YEAR_FILTER,
    value: "Per year",
  },
  {
    key: ALL_TIME_FILTER,
    value: "All time",
  },
];