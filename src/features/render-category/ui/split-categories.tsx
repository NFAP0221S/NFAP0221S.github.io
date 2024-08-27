'use client'

import React, { useEffect, useState } from 'react';
import { NotionDB } from '@/shared/types/notion';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import {Chip} from "@nextui-org/react";

interface Props {
  categoryList: NotionDB[]
}

export const SplitCategories = ({ categoryList }: Props) => {
  
  // 메인 카테고리와 서브 카테고리로 각각 분할
  const allMainCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'main');
  const allSubCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'sub');

  const getSubCategories = (mainGroup: string) => {
    return allSubCategory.filter(sub => sub.properties.group.multi_select.some(group => group.name === mainGroup));
  };

  // Accordion에 전달할 데이터 구성
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

  // const isSelected = selectedCategoryId === id;

  // const handleClick = () => {
  //   onCategoryClick(id);
  // };


  const defaultExpandedKeys = accordionItems.map((item) => item.id);

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={defaultExpandedKeys}>
      {accordionItems.map((mainItem) => (
        <AccordionItem 
          key={mainItem.id} 
          aria-label={mainItem.title} 
          title={mainItem.title}
          // title={
          //   <Chip color="warning" variant="light">
          //     {mainItem.title}
          //   </Chip>
          // }
        >
          <div className="pl-4">
            {mainItem.subTitles.map((subItem) => (
              // <div key={subItem.id} className="pb-2">
              //   {subItem.title}
              // </div>
              <div className="pb-2">
                <Link 
                  href={`/posts/${subItem.id}/1`}
                  // className={`text-md ${isSelected ? 'text-blue-500' : 'hover:text-blue-500'}`}
                  className={`text-md`}
                  // onClick={handleClick}
                >
                  <div>{subItem.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
