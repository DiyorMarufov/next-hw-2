import Sidebar from "@/components/sidebar/sidebar";
import React, { memo } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default memo(Layout);
