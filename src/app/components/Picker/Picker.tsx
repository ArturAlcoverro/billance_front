'use client'
import { Color, colors } from "@/app/colors";
import Button from "../Button/Button";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

export default function Picker({
  children,
  className = "",
  color = "slate",
  prevHandle = () => {},
  nextHandle = () => {},
}: SwitcherProps) {
  return (
    <div className={`flex ${className}`}>
      <Button
        className="rounded-r-none mr-0.5 flex-grow-0 !px-1"
        color={color}
        onClick={prevHandle}
      >
        <ChevronLeftIcon />
      </Button>

      <div className="flex-grow">{children}</div>

      <Button
        className="rounded-l-none ml-0.5 flex-grow-0 !px-1"
        color={color}
        onClick={nextHandle}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

interface SwitcherProps {
  children: React.ReactNode,
  className?: string,
  color?: Color,
  prevHandle?: () => void;
  nextHandle?: () => void;
}