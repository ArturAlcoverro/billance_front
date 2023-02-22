'use client'

import { Color } from "@/app/colors";
import useOutsideClick from "@rooks/use-outside-click";
import { MutableRefObject, useMemo, useRef, useState } from "react";
import Button from "../Button/Button";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import Picker from "../Picker/Picker";
import useYearPicker from "./useYearPicker";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

export default function YearPicker({
  maxYear = new Date().getFullYear() + 100,
  minYear = 1900,
  defaultYear = new Date().getFullYear(),
  className = "",
  color = "slate",
  handleChange = (year :number) => {},
}: YearPickerProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { 
    year, 
    setYear, 
    yearPage, 
    nextYearPage, 
    prevYearPage,
    setSelectedYearPage,
  } = useYearPicker(minYear, maxYear, defaultYear, handleChange);

  useOutsideClick(ref, () => {
    if (show) setShow(false);
    setSelectedYearPage()
  });

  function buttonClickHandler() {
    setShow(!show);
    setSelectedYearPage()
  }

  return (
    <div ref={ref} className={`${className} relative`}>
      <Picker 
        color={color} 
        nextHandle={() => setYear(year + 1)}
        prevHandle={() => setYear(year - 1)}
      >
        <Button
          color={color}
          onClick={buttonClickHandler}
          className="w-full rounded-none border-r-0 border-l-0"
        >
          {year}
        </Button>
      </Picker>

      <DropdownContainer open={show} className="min-w-[12rem] w-full max-w-[96] py-4">
        <div className="w-full flex justify-between items-center mb-4 px-2 text-slate-600">
          <button
            color={color}
            onClick={prevYearPage}
            className="w-7 p-1 rounded-md hover:bg-slate-200"
            title="Previous page"
          >
            <ChevronLeftIcon />
          </button>
          <p>{`${yearPage[0]} - ${yearPage[yearPage.length - 1]}`}</p>
          <button
            color={color}
            onClick={nextYearPage}
            className="w-7 p-1 rounded-md hover:bg-slate-200"
            title="Next page"
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-1 gap-y-1">
          {yearPage.map((y, index) => {

            const selected = y === year ? "bg-blue-200 hover:bg-blue-200 !text-blue-600" : "";

            return (
              <button
                key={index}
                onClick={() => {
                  setYear(y);
                  setShow(false);
                }}
                className={`w-full hover:bg-slate-200 hover:text-black text-slate-600 p-1 rounded-md ${selected}`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </DropdownContainer>
    </div>
  );
}

interface YearPickerProps {
  maxYear?: number,
  minYear?: number,
  defaultYear?: number,
  className?: string,
  color? : Color,
  handleChange?: (year: number) => void;
}