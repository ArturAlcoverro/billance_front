"use client";

import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import { useState } from "react";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import Input from "../Input/Input";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

export default function DatePicker({ className = "" }: DatePickerProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-64 relative h-fit">
        <Input
          placeholder="Select date range"
          color={"slate"}
          className="flex justify-between w-full"
          onClick={() => setShow(!show)}
          // label="Date range"
        >
          <CalendarDaysIcon />
        </Input>
        <DropdownContainer open={show} className="min-w-full py-4">
          <div className="w-full flex justify-between items-center mb-4 px-2 text-slate-600">
          <button
              color="slate"
              className="w-7 p-1 rounded-md hover:bg-slate-200"
              title="Previous page"
            >
              <ChevronLeftIcon />
            </button>
            <p>Mar. 2022</p>
            <button
              color="slate"
              className="w-7 p-1 rounded-md hover:bg-slate-200"
              title="Next page"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </DropdownContainer>
      </div>
    </div>
  );
}

interface DatePickerProps {
  className?: string;
  handleChange?: (date: Date) => void;
}
