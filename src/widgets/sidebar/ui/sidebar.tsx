'use client'

import { NotionDB } from "@/shared/types/notion";

interface SidebarProps {
  categoryList : NotionDB[]
}

export const Sidebar = ({categoryList}: SidebarProps) => {

    return(
      <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block`}>
        {/* <SidebarContent categoryList={categories} /> */}
      </aside>
    )
};
