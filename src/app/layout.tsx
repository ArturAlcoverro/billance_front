'use client'

import NavMenu from "./components/NavMenu/NavMenu";

import Bars2Icon from "@heroicons/react/24/outline/Bars2Icon"
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon"
import links from "./routes";

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";


import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode;}) {
  const href = usePathname();
  
  const [menuClose, setMenuClose] = useState(false);
  const [menuActive, setMenuActive ] = useState(href ?? "/");

  const menuToogleStyles = menuClose ? "" : "hidden";

  useEffect(() => {
    setMenuClose(false)
  }, []);

  const MenuIcon = menuClose ? XMarkIcon : Bars2Icon;

  return (
    <html lang="en">
      <head />
      <body className="w-full bg-slate-50  m-auto max-w-7xl bg-slate-0 min-h-screen grid lg:grid-cols-[12rem_1fr] grid-cols-[4rem_1fr] relative">
        <nav
          className={`min-h-screen col-start-1 sm:col-end-2 fixed bg-slate-50 sm:block lg:w-auto sm:w-16 w-full border-l-pink-600 z-10 border-slate-300 ${menuToogleStyles}`}
        >
          <NavMenu closeFunction={()=>{setMenuClose(false);}} links={links} active={menuActive} setActive={setMenuActive} />
        </nav>
        <main className="min-h-screen sm:col-start-2 sm:col-end-3 col-start-1 col-end-3 border-l-pink-600 sm:pl-0 p-4">
          {children}
        </main>
          <button
            className={`absolute right-4 top-1 mt-3 text-0 w-14 p-2 z-10 rounded-md hover:bg-slate-150 sm:hidden`}
            onClick={() => {
              setMenuClose(!menuClose);
            }}
          >
            <MenuIcon></MenuIcon>
            <span className="sr-only">Menu</span>
          </button>

      </body>
    </html>
  );
}
