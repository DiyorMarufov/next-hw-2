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
            className={`${activeClassName("/dashboard/products")}`}
            href={"/dashboard/products"}
          >
            All products
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/products/categories")}`}
            href={"/dashboard/products/categories"}
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            className={`${activeClassName("/dashboard/products/inventory")}`}
            href={"/dashboard/products/inventory"}
          >
            Inventory
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default memo(Layout);
