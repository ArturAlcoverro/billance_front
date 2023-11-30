'use client'

import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from 'react-resize-detector';

export default function AmountInput({handleChange}: AmountInputProps) {
  const [inputValue, setInputValue] = useState("00");
  const input = useRef<HTMLInputElement>(null);
  const span = useRef<HTMLSpanElement>(null);
  const currency = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  const { width, ref: container } = useResizeDetector();

  useEffect(() => {
    focusInput();
  }, []);

  function focusInput() {
    setTimeout(() => {
      if (input.current) {
        input.current.focus();
        input.current.selectionStart = input.current.value.length;
        input.current.selectionEnd = input.current.value.length;
      }
    }, 1);
  }

  useEffect(() => {
    let fontSize = 6;

    if(span.current && input.current && currency.current && container.current) {
      let spanWidth = 0
      let containerWidth = 0

      span.current.style.fontSize = fontSize + "rem";
      input.current.style.fontSize = fontSize + "rem";

      do {
        spanWidth = span.current.offsetWidth;
        containerWidth = container.current.offsetWidth;

        if(spanWidth > containerWidth - 32){
          fontSize -= .2;
          span.current.style.fontSize = fontSize + "rem";
        }
        
      } while (spanWidth > containerWidth - 32);

      spanWidth = span.current.offsetWidth;

      input.current.style.width = spanWidth + 16 + "px";
      input.current.style.fontSize = fontSize + "rem";
      currency.current.style.fontSize = ((fontSize/8) * 6) + "rem";
    }

    if(!visible) setVisible(true);

  }, [inputValue, width]);

  function handleInput(event: any) {
    const value = formatValue(event.target.value);

    if(handleChange) handleChange(value);
    setInputValue(value);
  }

  return (
    <div
      ref={container}
      className={`w-full flex text-8xl text-slate-600 justify-center items-center font-semibold h-32 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <span ref={currency} className="text-slate-400 text-6xl pr-2 relative -top-4">{"€"}</span>
      <input
        ref={input}
        className="h-20 w-9 focus:outline-0 bg-slate-50 "
        type="text"
        aria-label="amount"
        value={inputValue}
        onChange={handleInput}
        onFocus={focusInput}
      />
      <span ref={span} className="absolute -left-[1000rem]">
        {inputValue}
      </span>
    </div>
  );
}

function formatValue(value: string): string {
  const regex = /[^0-9,.\-+/*]/g;
  let isNegative = false;

  if(value.includes("-")) {
    value = value.replace("-", "");
    isNegative = true;
  }

  if(value.includes("+")) {
    value = value.replace("+", "");
    isNegative = false;
  }

  value = value.replace(regex, "");
  value = value.replace(",", ".");
  value = value.replace("..", ".");
  
  const dotIndex = value.indexOf(".");
  if (dotIndex !== -1) {
    value = value.substring(0, dotIndex + 3);
  }
  
  while(value[0] == '0'){
    value = value.substring(1);
  }

  while(value.split(".")[0].length < 2) {
    value = "0" + value;
  }

  while(value.split(".")[0].length > 10) {
    value = value.substring(0, value.length - 1);
  }

  if(isNegative) {
    value = "-" + value;
  }

  return value;
}

interface AmountInputProps {
  handleChange?: (value: string) => void;
}
