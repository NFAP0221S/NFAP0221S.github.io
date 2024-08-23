  'use client'

import { NotionDB } from "@/shared/types/notion";
import SidebarContent from "./SidebarContents";

interface SidebarProps {
  categoryList : NotionDB[]
}

export default function Sidebar({categoryList}: SidebarProps) {


    return(
      <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block`}>
        <SidebarContent categoryList={categoryList} />
      </aside>
    )
};
