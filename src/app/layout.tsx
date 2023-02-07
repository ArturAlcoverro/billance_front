import  NavMenu from "./components/menu/NavMenu";

const links = [
  {
    href: "/",
    label: "Add",
  },
  {
    href: "/list",
    label: "List",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
];

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <head />
      <body className="w-full">
        <header>
        <nav>
          <NavMenu links={links}/>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
