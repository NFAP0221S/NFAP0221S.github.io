'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MdDensityMedium as MenuButton} from "react-icons/md";
// import SidebarContent from "./sidebar/SidebarContents";
import { NotionDB } from "@/shared/types/notion";

interface SidebarProps {
  categoryList : NotionDB[]
}

export function _Sheet({categoryList}: SidebarProps) {


    return (
      <Sheet>
        <SheetTrigger asChild>
          <MenuButton/>
        </SheetTrigger>
        <SheetContent side='left'>
          {/* <SidebarContent categoryList={categories} /> */}
        </SheetContent>
      </Sheet>
    )
}
