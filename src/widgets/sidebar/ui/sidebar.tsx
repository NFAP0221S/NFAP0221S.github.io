"use client";

import { Categories } from "@/features/render-category";
import { CatListProps } from "@/shared/types/component";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Sidebar = ({ categoryList }: CatListProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const showSidebar = pathname?.startsWith("/blog");

  return (
    <>
      {(showSidebar || sidebarOpen) && (
        <aside
          className={`w-64 border-r ${
            sidebarOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              Categories
            </h2>
            <Categories categoryList={categoryList} />
          </div>
        </aside>
      )}
    </>
  );
};
