'use client'

import { SplitCategories } from "@/features/render-category";
import { CatListProps } from "@/shared/types/component";
import { Button, ScrollShadow } from "@nextui-org/react";
// import { SidebarHeader } from "./sidebar-header";

export const Sidebar = ({categoryList}: CatListProps) => {

  return(
    <div className={`fixed top-4 lg:w-1/5 h-[calc(100vh-2rem)]`}>
      {/* <SidebarHeader/> */}
      <ScrollShadow className="pr-4 h-full">
        <SplitCategories categoryList={categoryList} />
      </ScrollShadow>
    </div>
  )
};
