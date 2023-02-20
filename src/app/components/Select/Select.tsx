"use client";

import useOutsideClick from "@rooks/use-outside-click";
import { MutableRefObject, useMemo, useRef, useState } from "react";
import Button from "../Button/Button";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import ChevronUpDownIcon from "@heroicons/react/24/outline/ChevronUpDownIcon";
import { Color } from "@/app/colors";

export default function Select({
  placeholder,
  position,
  align,
  options,
  color = "slate",
  closeOnSelect = true,
  handleChange,
  className,
  defaultKey = "",
  ...props
}: SelectProps) {
  const optionsMap = useMemo(() => {
    const obj:any = {} 
    options.forEach((option) => {
      obj[option.key] = option;
    });
    return obj;
  }, [options]);

  const [value, setValue] = useState<SelectOption | null>(optionsMap[defaultKey] ?? null);
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  function buttonClickHandler() {
    setShow(!show);
  }

  function selectOption(option: SelectOption) {
    if (closeOnSelect) setShow(false);
    if (handleChange) handleChange(option);
    setValue(option);
  }

  return (
    <div ref={ref} className={`inline-flex relative ${className}`} {...props}>
      <Button onClick={buttonClickHandler} color={color} className={`flex justify-between w-full`}>
        <p className={value === null ? "opacity-70" : ""}>
          {value !== null ? value.value : placeholder}
        </p>
        <ChevronUpDownIcon/>
      </Button>

      <DropdownContainer open={show} className="min-w-full">
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const classes = value?.key !== option.key
              ? "p-2 px-3 rounded-md text-start hover:bg-slate-150 text-slate-600"
              : "p-2 px-3 rounded-md text-start bg-blue-200 text-blue-600";

            return (
              <button
                className={classes}
                key={option.key}
                onClick={() => selectOption(option)}
              >
                {option.value}
              </button>
            );
          })}
        </div>
      </DropdownContainer>
    </div>
  );
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  options: SelectOption[];
  color?: Color;
  position?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  closeOnSelect?: boolean;
  handleChange?: (value: SelectOption) => void;
  className?: string;
  defaultKey?: string;
  multiselect?: boolean;
}

export interface SelectOption {
  key: string;
  value: string;
}
