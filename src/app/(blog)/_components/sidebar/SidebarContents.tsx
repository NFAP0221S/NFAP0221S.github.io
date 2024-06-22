'use client'

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { NotionDB } from '@/lib/notion';
import React from 'react';
import SubCategories from './SubCategories';

interface Props {
  categoryList: NotionDB[]
}

export default function SidebarContent({ categoryList }: Props) {
  // 메인 카테고리와 서브 카테고리로 각각 분할
  const allMainCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'main');
  const allSubCategory = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'sub');

  const getSubCategories = (mainGroup: string) => {
    return allSubCategory.filter(sub => sub.properties.group.multi_select.some(group => group.name === mainGroup));
  };

  return (
    <ScrollArea>
      <div className="p-4">
        {allMainCategory.map(main => {
          const mainGroup = main.properties.group.multi_select[0].name;
          const matchedSubCategory = getSubCategories(mainGroup);

          return (
            <React.Fragment key={main.id}>
              <div className="text-md font-semibold mb-2" title='main_category'>
                {main.properties.category.title[0].plain_text}
              </div>
              {matchedSubCategory.length > 0 && (
                <div title='sub_category'>
                  {matchedSubCategory.map(sub => (
                    <React.Fragment key={sub.id}>
                      <SubCategories id={sub.id} subCategory={sub.properties.category.title[0].plain_text} />
                    </React.Fragment>
                  ))}
                </div>
              )}
              <Separator className="my-2" />
            </React.Fragment>
          );
        })}
      </div>
    </ScrollArea>
  );
}
