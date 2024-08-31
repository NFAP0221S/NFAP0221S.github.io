'use client';

import React, { useState } from 'react';
import { NotionDB } from '@/shared/types/notion';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';

interface Props {
  categoryList: NotionDB[];
}

// SplitCategories 컴포넌트: 메인 컴포넌트
export const SplitCategories = ({ categoryList }: Props) => {
  // 클릭된 카테고리 상태 관리
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const allMainCategory = categoryList.filter(
    (post) =>
      post?.properties?.level?.rich_text?.[0]?.plain_text === 'main' &&
      post?.properties?.render?.rich_text?.[0]?.plain_text !== 'false'
  );
  const allSubCategory = categoryList.filter(
    (post) => post.properties.level.rich_text[0].plain_text === 'sub'
  );

  // 메인 그룹에 해당하는 서브 카테고리를 가져오는 함수
  const getSubCategories = (mainGroup: string) =>
    allSubCategory.filter((sub) => sub.properties.group.multi_select.some((group) => group.name === mainGroup));

  // Accordion 데이터 구성
  const accordionItems = allMainCategory.map((main) => {
    const mainGroup = main.properties.group.multi_select[0].name;
    const matchedSubCategory = getSubCategories(mainGroup);

    return {
      id: main.id,
      title: main.properties.category.title[0].plain_text,
      subTitles: matchedSubCategory.map((sub) => ({
        id: sub.id,
        title: sub.properties.category.title[0].plain_text,
      })),
    };
  });

  const defaultExpandedKeys = accordionItems.map((item) => item.id);

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={defaultExpandedKeys}>
      {accordionItems.map(({ id, title, subTitles }) => (
        <AccordionItem key={id} aria-label={title} title={<span className="text-base">{title}</span>}>
          <SubCategoryList subCategories={subTitles} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

// SubCategoryList 컴포넌트: 서브 카테고리 목록을 렌더링
const SubCategoryList = ({ subCategories, selectedCategoryId, setSelectedCategoryId }: { subCategories: { id: string; title: string }[], selectedCategoryId: string | null, setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>> }) => (
  <div className="pl-4">
    {subCategories.map(({ id, title }) => (
      <CategoryItem key={id} id={id} title={title} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
    ))}
  </div>
);

// CategoryItem 컴포넌트: 카테고리 아이템을 표시
const CategoryItem = ({ id, title, selectedCategoryId, setSelectedCategoryId }: { id: string; title: string, selectedCategoryId: string | null, setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const isSelected = selectedCategoryId === id; // 현재 선택된 아이템인지 확인

  const handleClick = () => {
    setSelectedCategoryId(id); // 선택된 카테고리 상태 업데이트
  };

  return (
    <div key={id} className="pb-2">
      <Link 
        href={`/posts/${id}/1`} 
        className={`${isSelected ? 
          'text-[#006FEE] dark:text-[#F5A524]' : 
          'text-[#71717A] hover:text-[#11181C] dark:text-[#A1A1AA] dark:hover:text-[#ECEDEE]'}
        `}
        onClick={handleClick}
      >
        <div>{title}</div>
      </Link>
    </div>
  );
};
