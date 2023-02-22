import Link from "next/link";

export default function NavMenu({ links, closeFunction, active, setActive }: NavMenuProps) {

  function setActiveLink(href: string): void {
    setActive(href);
    closeFunction();
  }

  return (
    <div className="h-full flex flex-col items-center gap-3 pt-28 px-2">
      {links.map(({ href, label, icon }) => {
        const Icon = icon;

        const activeStyles = active !== href 
          ? "group flex flex-row justify-center items-center sm:aspect-square aspect-auto lg:aspect-auto rounded-md p-2 sm:w-auto lg:w-40 w-64 sm:ml-0 ml-3 hover:bg-slate-200 hover:text-l text-slate-500 hover:!text-black"
          : "group flex flex-row justify-center items-center sm:aspect-square aspect-auto lg:aspect-auto rounded-md p-2 sm:w-auto lg:w-40 w-64 sm:ml-0 ml-3 hover:bg-slate-200 hover:text-l text-black";

        const iconStyles = active !== href
          ? "h-8 sm:h-6 flex-grow-0 group-hover:text-black text-slate-500"
          : "h-8 sm:h-6 flex-grow-0 group-hover:text-black text-blue-500";  
        return (
          <Link onClick={() => {setActiveLink(href)}} key={href} href={href} className={activeStyles}>
            <Icon className={iconStyles}></Icon>
            <p className="flex-grow sm:ml-4 ml-8 sm:text-base sm:hidden lg:block block text-xl">
              {label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export interface NavMenuProps {
  links: { href: string; label: string; icon?: any }[];
  closeFunction: () => void;
  setActive: (active: string) => void;
  active: string;
}
