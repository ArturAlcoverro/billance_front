'use client'
import useOutsideClick from "@rooks/use-outside-click";
import { MutableRefObject, useRef, useState } from "react";
import Select from "./Select/Select";

export default function Test() {
  const pRef = useRef<HTMLParagraphElement>() as MutableRefObject<HTMLParagraphElement>;
  
  function outsidePClick() {
    alert("Clicked outside p");
  }

  useOutsideClick(pRef, outsidePClick);
  return (
    <div>
      <p ref={pRef}>Click outside me</p>
    </div>
  );
}
