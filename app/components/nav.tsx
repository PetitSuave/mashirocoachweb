import Link from "next/link";
import { metaData } from "../config";

const navItems = {
  // "/blog": { name: "Blog" },
  "#contact": { name: "Kontakt" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-6 mb-3 py-5 mx-9">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="tracking-tight">
            <p className="text-center text-3xl font-semibold uppercase">{metaData.title}</p>
            <p className="text-center text-base">{"Integrativní kouč pro tělo i mysl"}</p>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
