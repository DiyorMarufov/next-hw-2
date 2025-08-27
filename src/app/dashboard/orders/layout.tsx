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
            className={`${activeClassName("/dashboard/orders")}`}
            href={"/dashboard/orders"}
          >
            All orders
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/orders/pending")}`}
            href={"/dashboard/orders/pending"}
          >
            Pending
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/orders/completed")}`}
            href={"/dashboard/orders/completed"}
          >
            Completed
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
