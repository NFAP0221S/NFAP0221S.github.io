'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import { NotionDB } from '@/shared/types/notion';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';

interface SplitCategoriesProps {
  categoryList: NotionDB[];
}

interface SubCategoryListProps {
  subCategories: { id: string; title: string }[];
  selectedCategoryId: string | null;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
}

interface CategoryItemProps {
  id: string;
  title: string;
  selectedCategoryId: string | null;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SplitCategories = ({ categoryList }: SplitCategoriesProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const allMainCategory = useMemo(() => {
    return categoryList
      .filter(
        (post) =>
          post?.properties?.level?.rich_text?.[0]?.plain_text === 'main' &&
          post?.properties?.render?.rich_text?.[0]?.plain_text !== 'false'
      )
      .sort((a, b) => {
        const sortA = parseInt(a.properties.sort.rich_text[0].plain_text, 10);
        const sortB = parseInt(b.properties.sort.rich_text[0].plain_text, 10);
        return sortA - sortB;
      });
  }, [categoryList]);

  const allSubCategory = useMemo(() => {
    return categoryList.filter((post) => post.properties.level.rich_text[0].plain_text === 'sub');
  }, [categoryList]);

  const getSubCategories = useCallback(
    (mainGroup: string) =>
      allSubCategory.filter((sub) => sub.properties.group.multi_select.some((group) => group.name === mainGroup)),
    [allSubCategory]
  );

  const accordionItems = useMemo(() => {
    return allMainCategory.map((main) => {
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
  }, [allMainCategory, getSubCategories]);

  const defaultExpandedKeys = useMemo(() => accordionItems.map((item) => item.id), [accordionItems]);

  return (
    <Accordion selectionMode="multiple" defaultExpandedKeys={defaultExpandedKeys}>
      {accordionItems.map(({ id, title, subTitles }) => (
        <AccordionItem key={id} aria-label={title} title={<span className="text-base">{title}</span>}>
          <SubCategoryList
            subCategories={subTitles}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const SubCategoryList = ({ subCategories, selectedCategoryId, setSelectedCategoryId }: SubCategoryListProps) => (
  <div className="pl-4">
    {subCategories.map(({ id, title }) => (
      <CategoryItem
        key={id}
        id={id}
        title={title}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
    ))}
  </div>
);

const CategoryItem = ({ id, title, selectedCategoryId, setSelectedCategoryId }: CategoryItemProps) => {
  const isSelected = selectedCategoryId === id;

  const handleClick = useCallback(() => {
    setSelectedCategoryId(id);
  }, [id, setSelectedCategoryId]);

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
