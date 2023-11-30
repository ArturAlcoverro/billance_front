import { useEffect, useMemo, useState } from "react";

const YEARS_PER_PAGE = 12;

export default function (
  minYear: number,
  maxYear: number,
  defaultYear: number,
  handleYearChange: (year: number) => void = () => {}
) {
  const defaultYearPageIndex = useMemo(() => {
    return Math.floor((defaultYear - minYear) / YEARS_PER_PAGE);
  }, [minYear, defaultYear]);

  const [year, _setYear] = useState(defaultYear);
  const [yearPageIndex, setYearPageIndex] = useState<number>(defaultYearPageIndex);

  const years: number[] = useMemo(() => {
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => i + minYear);
  }, [maxYear, minYear]);

  const yearsPages: number[][] = useMemo(() => {
    const pages = [];
    for (let i = 0; i < years.length; i += YEARS_PER_PAGE) {
      pages.push(years.slice(i, i + YEARS_PER_PAGE));
    }
    return pages;
  }, [years]);

  function setSelectedYearPage(){
    setYearPageIndex(Math.floor((year - minYear) / YEARS_PER_PAGE))
  }

  useEffect(() => {
    setSelectedYearPage()
  }, [year]);

  function setYear(year: number) {
    if(year >= minYear && year <= maxYear) {
      _setYear(year);
      handleYearChange(year);
    }
  }

  function nextYearPage() {
    if (!yearsPages[yearPageIndex].includes(maxYear)) {
      setYearPageIndex((prev) => prev + 1);
    }
  }

  function prevYearPage() {
    if (!yearsPages[yearPageIndex].includes(minYear)) {
      setYearPageIndex((prev) => prev - 1);
    }
  }
  
  return {
    year,
    setYear,
    yearPage: yearsPages[yearPageIndex],
    nextYearPage,
    prevYearPage,
    setSelectedYearPage
  }
}