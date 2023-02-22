'use client'

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
  defaultMonth = new Date().getMonth() + 1 as monthNumber,
  className = "",
  color = "slate",
  handleChange = (year :number) => {},
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
    viewPrevYearPage
  } = useMonthPicker(defaultYear, defaultMonth, maxYear, minYear)

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  function buttonClickHandler() {
    setShow(!show);
  }

  return (
    <div ref={ref} className={`${className} relative`}>
      <Picker 
        color={color} 
        prevHandle={setPrevMonth}
        nextHandle={setNextMonth}
      >
        <Button
          color={color}
          onClick={buttonClickHandler}
          className="w-full rounded-none border-r-0 border-l-0"
        >
          <span className="text-ellipsis">{monthLabels[month as monthNumber]}</span> <span>{year}</span>
        </Button>
      </Picker>

      <DropdownContainer open={show} className="min-w-[12rem] w-full py-4">
        <div className="w-full flex justify-between items-center mb-4 px-2 text-slate-600">
          <button
            color={color}
            onClick={viewPrevYearPage}
            className="w-7 p-1 rounded-md hover:bg-slate-200"
            title="Previous page"
          >
            <ChevronLeftIcon />
          </button>
          <p>{yearPage}</p>
          <button
            color={color}
            onClick={viewNextYearPage}
            className="w-7 p-1 rounded-md hover:bg-slate-200"
            title="Next page"
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-1 gap-y-1">
          {
            Object.keys(monthLabels).map((_monthNumber: any) => {
              const monthNumber = Number(_monthNumber)
              const selected = month === monthNumber && year === yearPage ? "bg-blue-200 hover:bg-blue-200 !text-blue-600" : "";
              return (
                <button
                key={monthNumber}
                onClick={() => {
                  setMonth(monthNumber, yearPage);
                }}
                className={`w-full hover:bg-slate-200 hover:text-black text-slate-600 p-1 rounded-md ${selected}`}
              >
                {monthLabels[monthNumber as monthNumber]}
              </button>
              )
            })
          }
        </div>
      </DropdownContainer>
    </div>
  );
}

const monthLabels = {
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
}

export type monthNumber =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface YearPickerProps {
  maxYear?: number,
  minYear?: number,
  defaultYear?: number,
  defaultMonth?: monthNumber
  className?: string,
  color? : Color,
  handleChange?: (year: number) => void;
}