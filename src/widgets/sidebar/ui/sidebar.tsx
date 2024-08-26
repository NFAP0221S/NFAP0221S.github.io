'use client'

import { SidebarContent } from "@/features/render-category";
import { NotionDB } from "@/shared/types/notion";
import { Button, ScrollShadow } from "@nextui-org/react";
import { SidebarHeader } from "./sidebar-header";

interface SidebarProps {
  categoryList : NotionDB[]
}

export const Sidebar = ({categoryList}: SidebarProps) => {

  return(
    <div className={`fixed top-4 lg:w-1/5 h-[calc(100vh-2rem)]`}>
      {/* <SidebarHeader/> */}
      <ScrollShadow className="pr-4 h-full">
        <SidebarContent categoryList={categoryList} />
        <SidebarContent categoryList={categoryList} />
      </ScrollShadow>
    </div>
  )
};
