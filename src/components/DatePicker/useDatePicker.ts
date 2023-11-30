import { type } from "os";
import { useEffect, useState } from "react";

export default function useDatePicker(
  defaultYear: number,
  defaultMonth: number,
  maxYear: number,
  minYear: number
) {
  const [date, _setDate] = useState<Date>(new Date());
  const [year, setYear] = useState<number>(defaultYear);
  const [month, setMonth] = useState<number>(defaultMonth);
  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    //calculate current year month days if date is not monday fill the array with 0's
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const daysArrayWithEmpty = Array.from({ length: firstDay }, () => 0).concat(
      daysArray
    );
    setDays(daysArrayWithEmpty);
  }, [year, month]);

  function setDate(date: Date | string) {
    if (typeof date === "string") {
      date = convertDate(date);
    }
    _setDate(date);

    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }

  function convertDate(date: string): Date {
    date.replace("-", "/");
    const [month, day, year] = date.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day) + 1);
  }

  function getWeekday(date: Date) {
    let weekdayNumber = date.getDay() - 1;
    return weekdayNumber === -1 ? 6 : weekdayNumber;
  }

  function setNextPage() {
    if (month === 11) {
      if (year === maxYear) return;
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function setPrevPage() {
    if (month === 0) {
      if (year === minYear) return;
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  return {
    // year,
    // yearPage,
    // month,
    // setMonth,
    // setNextMonth,
    // setPrevMonth,
    // viewNextYearPage,
    // viewPrevYearPage,
  };
}
