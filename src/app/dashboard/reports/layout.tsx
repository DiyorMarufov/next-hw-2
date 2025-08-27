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
            className={`${activeClassName("/dashboard/reports")}`}
            href={"/dashboard/reports"}
          >
            Sales
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/reports/customers")}`}
            href={"/dashboard/reports/customers"}
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/reports/revenue")}`}
            href={"/dashboard/reports/revenue"}
          >
            Revenue
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
