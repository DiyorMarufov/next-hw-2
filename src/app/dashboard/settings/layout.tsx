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
            className={`${activeClassName("/dashboard/settings")}`}
            href={"/dashboard/settings"}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/settings/security")}`}
            href={"/dashboard/settings/security"}
          >
            Security
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName(
              "/dashboard/settings/notifications"
            )}`}
            href={"/dashboard/settings/notifications"}
          >
            Notification
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
