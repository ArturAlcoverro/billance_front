import { useEffect, useState } from "react"

export default function useMonthPicker(defaultYear: number, defaultMonth: number, maxYear: number, minYear: number){
  const [year, setYear] = useState<number>(defaultYear)
  const [yearPage, setYearPage] = useState<number>(defaultYear)
  const [month, _setMonth] = useState(defaultMonth)

  function setMonth(month: number, year: number){
    _setMonth(month)
    setYear(year)
  }

  function setNextMonth(){
    const isDecember = month === 12
    const _month = isDecember ? 1 : month + 1
    const _year = isDecember ? year + 1: year

    if(_year > maxYear) return
    
    if(isDecember) setYearPage(_year)
    
    setMonth(_month, _year)
  }

  function setPrevMonth(){
    const isJanuary = month === 1
    const _month = isJanuary ? 12 : month - 1
    const _year = isJanuary ? year - 1: year
    
    if(_year < minYear) return  

    if(isJanuary) setYearPage(_year)
    
    setMonth(_month, _year)
  }

  function viewNextYearPage(){
    if(maxYear <= yearPage) return
    setYearPage(yearPage + 1)
  }

  function viewPrevYearPage(){
    if(minYear >= yearPage) return
    setYearPage(yearPage - 1)
  }

  return {
    year,
    yearPage,
    month,
    setMonth,
    setNextMonth,
    setPrevMonth,
    viewNextYearPage,
    viewPrevYearPage,
  }
}