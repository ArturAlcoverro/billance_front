import Link from "next/link";

export default function NavMenu({links}: NavMenuProps) {
  return (
    <div className="h-full flex">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export interface NavMenuProps {
  links: {href: string, label: string}[],
}