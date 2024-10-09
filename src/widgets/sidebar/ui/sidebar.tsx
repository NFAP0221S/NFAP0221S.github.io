"use client";

import { SplitCategories } from "@/features/render-category";
import { CatListProps } from "@/shared/types/component";
import { Button } from "@/shared/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/ui/collapsible"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { SidebarHeader } from "./sidebar-header";

const categories = [
  {
    name: "Tech",
    subcategories: ["Web Development", "Mobile Development", "AI & Machine Learning"]
  },
  {
    name: "Lifestyle",
    subcategories: ["Minimalism", "Productivity", "Health & Wellness"]
  },
  {
    name: "Travel",
    subcategories: ["Asia", "Europe", "North America"]
  }
]

export const Sidebar = () => {
// export const Sidebar = ({ categoryList }: CatListProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const showSidebar = pathname?.startsWith('/blog')

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
            <div className="space-y-1">
              {categories.map((category) => (
                <Collapsible
                  key={category.name}
                  open={openCategory === category.name}
                  onOpenChange={() =>
                    setOpenCategory(
                      openCategory === category.name ? null : category.name
                    )
                  }
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      {category.name}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <Link
                          href={`/blog/category/${category.name.toLowerCase()}/${subcategory
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {subcategory}
                        </Link>
                      </Button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
