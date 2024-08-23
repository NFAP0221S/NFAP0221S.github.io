'use client'

import { NotionDB } from "@/shared/types/notion";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface SidebarProps {
  categoryList : NotionDB[]
}

// interface SubCategory {
//   id: string;
//   name: string;
// }

// interface Category {
//   id: string;
//   name: string;
//   subCategories: SubCategory[];
// }

export default function Sidebar({ categoryList }: SidebarProps) {
  // 모든 아코디언이 초기화 시 열리도록 모든 키를 배열로 전달
  const defaultExpandedKeys = categoryList.map((category) => category.id);

  console.log('categoryList:', categoryList)

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="p-4">
        {/* <Accordion selectionMode="multiple" defaultExpandedKeys={defaultExpandedKeys}>
          {categoryList.map((category) => (
            <AccordionItem key={category.id} aria-label={category.name} title={category.name}>
              {category.subCategories.map((subCategory) => (
                <div key={subCategory.id} className="pl-4">
                  <a href={`/sub-category/${subCategory.id}`} className="block text-gray-600 hover:text-gray-900">
                    {subCategory.name}
                  </a>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion> */}
      </div>
    </aside>
  );
}
