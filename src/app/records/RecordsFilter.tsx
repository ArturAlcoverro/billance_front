"use client";

import { useState } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import MonthPicker from "../../components/MonthPicker/MonthPicker";
import Select from "../../components/Select/Select";
import YearPicker from "../../components/YearPicker/YearPicker";

const LAST_7_DAYS = "1";
const LAST_30_DAYS = "2";
const PER_MONTH_FILTER = "3";
const PER_YEAR_FILTER = "4";
const ALL_TIME_FILTER = "5";
const CUSTOM_FILTER = "6";

export default function RecordsFilter() {
  const [selectedFilter, setSelectedFilter] = useState(PER_MONTH_FILTER);

  return (
    <div className="flex gap-2">
      <Select
        className="mb-2 min-w-[10rem]"
        placeholder="Select a city..."
        options={selectOptions}
        defaultKey={PER_MONTH_FILTER}
        position="bottom"
        align="center"
        handleChange={(e) => setSelectedFilter(e.key)}
      />

      {selectedFilter === PER_MONTH_FILTER ? (
        <MonthPicker
          maxYear={2023}
          minYear={2000}
          className="mb-2 w-full max-w-[14rem]"
        />
      ) : selectedFilter === PER_YEAR_FILTER ? (
        <YearPicker
          maxYear={2023}
          minYear={2000}
          className="mb-2 w-full max-w-[14rem]"
        />
      ) : null}

      <DatePicker
        className="mb-2 w-full max-w-[14rem]"
      />
    </div>
  );
}

const selectOptions = [
  {
    key: LAST_7_DAYS,
    value: "Last 7 days",
  },
  {
    key: LAST_30_DAYS,
    value: "Last 30 days",
  },
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
  {
    key: CUSTOM_FILTER,
    value: "Custom range",
  },
];
