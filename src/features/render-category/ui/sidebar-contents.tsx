'use client'

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';
import { NotionDB } from '@/shared/types/notion';
import AccordionUI from '@/shared/next-ui/accordion';

interface Props {
  categoryList: NotionDB[]
}

export function SidebarContent({ categoryList }: Props) {
  
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const handleCategoryClick = (id: string) => {
    setSelectedCategoryId(id);
    
    const selectedSubCategory = categoryList.find(post => post.id === id);
    const mainCategory = categoryList.find(post => 
      post.properties.level.rich_text[0].plain_text === 'main' && 
      selectedSubCategory?.properties.group.multi_select.some(group => 
        post.properties.group.multi_select.some(mainGroup => mainGroup.name === group.name)
      )
    );

  };
  
  // 메인 카테고리와 서브 카테고리로 각각 분할
  const allMainCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'main');
  const allSubCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'sub');

  const getSubCategories = (mainGroup: string) => {
    return allSubCategory.filter(sub => sub.properties.group.multi_select.some(group => group.name === mainGroup));
  };

  // AccordionUI에 전달할 데이터 구성
  const accordionItems = allMainCategory.map(main => {
    const mainGroup = main.properties.group.multi_select[0].name;
    const matchedSubCategory = getSubCategories(mainGroup);

    return {
      id: main.id,
      title: main.properties.category.title[0].plain_text,
      subTitles: matchedSubCategory.map(sub => ({
        id: sub.id,
        title: sub.properties.category.title[0].plain_text,
      })),
    };
  });

  return (
    <ScrollArea>
      {/* <div className="p-4"> */}
        <AccordionUI items={accordionItems} />
      {/* </div> */}
    </ScrollArea>
  );
}
