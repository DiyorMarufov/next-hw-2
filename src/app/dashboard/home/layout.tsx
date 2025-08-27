"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  const activeClassName = (pathname: string) => {
    return path === pathname ? "text-[dodgerblue]" : "";
  };

  return (
    <div className="Layout">
      <ul className="flex gap-5">
        <li>
          <Link
            className={`${activeClassName("/dashboard/home")}`}
            href={"/dashboard/home"}
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/home/stats")}`}
            href={"/dashboard/home/stats"}
          >
            Stats
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/home/activity")}`}
            href={"/dashboard/home/activity"}
          >
            Activity
          </Link>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
