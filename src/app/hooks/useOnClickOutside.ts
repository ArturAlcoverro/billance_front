import { useEffect } from "react";

export default function useOnClickOutside(ref: any, handler: (event: any) => any) {
  useEffect(
    () => {
      const listener = (event: any) => {
        console.log('> ❎🆘🆚 - event.target: ', event.target)
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}