"use client";

import { Color } from "@/app/colors";
import useOutsideClick from "@rooks/use-outside-click";
import { MutableRefObject, useRef, useState } from "react";
import Button from "../Button/Button";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import Picker from "../Picker/Picker";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import useMonthPicker from "./useMonthPicker";

export default function MonthPicker({
  maxYear = new Date().getFullYear() + 100,
  minYear = 1900,
  defaultYear = new Date().getFullYear(),
  defaultMonth = (new Date().getMonth() + 1) as MonthNumber,
  className = "",
  handleChange = (year: number) => {},
}: YearPickerProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const {
    year,
    yearPage,
    month,
    setMonth,
    setNextMonth,
    setPrevMonth,
    viewNextYearPage,
    viewPrevYearPage,
  } = useMonthPicker(defaultYear, defaultMonth, maxYear, minYear);

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  function buttonClickHandler() {
    setShow(!show);
  }

  function monthClickHandler(monthNumber: MonthNumber) {
    return ()=>{
      setMonth(monthNumber, yearPage);
      setShow(false);
    }
  }

  return (
    <div className={className}>
      <div ref={ref} className={`relative`}>
        <Picker
          color="slate"
          prevHandle={setPrevMonth}
          nextHandle={setNextMonth}
        >
          <Button
            color="slate"
            onClick={buttonClickHandler}
            className="w-full rounded-none border-r-0 border-l-0"
          >
            <span className="text-ellipsis">
              {monthLabels[month as MonthNumber]}
            </span>{" "}
            <span>{year}</span>
          </Button>
        </Picker>

        <DropdownContainer open={show} className="min-w-[12rem] w-full py-4">
          <div className="w-full flex justify-between items-center mb-4 px-2 text-slate-600">
            <button
              color="slate"
              onClick={viewPrevYearPage}
              className="w-7 p-1 rounded-md hover:bg-slate-200"
              title="Previous page"
            >
              <ChevronLeftIcon />
            </button>
            <p>{yearPage}</p>
            <button
              color="slate"
              onClick={viewNextYearPage}
              className="w-7 p-1 rounded-md hover:bg-slate-200"
              title="Next page"
            >
              <ChevronRightIcon />
            </button>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 gap-1 gap-y-1">
            {Object.keys(monthLabels).map((key) => {
              const monthNumber = Number(key) as MonthNumber;
              const selected =
                month === monthNumber && year === yearPage
                  ? "bg-blue-200 hover:bg-blue-200 !text-blue-600"
                  : "";
              return (
                <button
                  key={monthNumber}
                  onClick={monthClickHandler(monthNumber)}
                  className={`w-full hover:bg-slate-200 hover:text-black text-slate-600 p-1 rounded-md ${selected}`}
                >
                  {monthLabels[monthNumber]}
                </button>
              );
            })}
          </div>
        </DropdownContainer>
      </div>
    </div>
  );
}

const monthLabels: Record<MonthNumber, string> = {
  1: "Jan.",
  2: "Feb.",
  3: "Mar.",
  4: "Apr.",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug.",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dec.",
};

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface YearPickerProps {
  maxYear?: number;
  minYear?: number;
  defaultYear?: number;
  defaultMonth?: MonthNumber;
  className?: string;
  handleChange?: (year: number) => void;
}
