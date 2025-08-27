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
            className={`${activeClassName("/dashboard/users")}`}
            href={"/dashboard/users"}
          >
            Info
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/users/activity")}`}
            href={"/dashboard/users/activity"}
          >
            Activity
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/users/preferences")}`}
            href={"/dashboard/users/preferences"}
          >
            Preferences
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
