"use client";

import { Links } from "@/static";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const Sidebar = () => {
  const path = usePathname();

  const activeSidebar = (pathname: string) => {
    return path.startsWith(pathname)
      ? "bg-[white] text-slate-900"
      : "hover:bg-white/10";
  };
  return (
    <div className="w-[250px] h-screen overflow-auto bg-slate-900 p-4 text-white">
      <h1>Dashboard</h1>

      <ul className="my-10">
        {Links.map((link: any) => (
          <li key={link.id}>
            <Link
              className={`p-2 mb-2 rounded-[10px] flex ${activeSidebar(
                link.href
              )}`}
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Sidebar);
