"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { NotionDB } from "@/shared/types/notion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible";
import { Button } from "@/shared/ui/button";
import { useCategory } from "@/app/provider/category-provider";

interface SplitCategoriesProps {
  categoryList: NotionDB[];
}

export const Categories = ({ categoryList }: SplitCategoriesProps) => {
  const { setSelectedSubCategory, setSelectedCategory } = useCategory();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // 가져온 main,sub 카테고리 리스트 -> main 카테고리만 정렬하여 반환
  const allMainCategory = useMemo(() => {
    return categoryList
      .filter(
        (post) =>
          post?.properties?.level?.rich_text?.[0]?.plain_text === "main" &&
          post?.properties?.render?.rich_text?.[0]?.plain_text !== "false"
      )
      .sort((a, b) => {
        const sortA = parseInt(a.properties.sort.rich_text[0].plain_text, 10);
        const sortB = parseInt(b.properties.sort.rich_text[0].plain_text, 10);
        return sortA - sortB;
      });
  }, [categoryList]);

  // 가져온 main,sub 카테고리 리스트 -> sub 카테고리만 반환
  const allSubCategory = useMemo(() => {
    return categoryList.filter(
      (post) => post.properties.level.rich_text[0].plain_text === "sub"
    );
  }, [categoryList]);

  // allSubCategory(sub 카테고리)를 main 카테고리에 그룹화
  const getSubCategories = useCallback(
    (mainGroup: string) =>
      allSubCategory.filter((sub) =>
        sub.properties.group.multi_select.some(
          (group) => group.name === mainGroup
        )
      ),
    [allSubCategory]
  );

  // 가져온 main,sub 카테고리 리스트 -> main,sub 카테고리 그룹화 하여
  // 사이드바 (아코디언) 리스트 생성
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

  console.log("### accordionItems", accordionItems);
  console.log("### allMainCategory", allMainCategory);

  return (
    <div className="space-y-1">
      {accordionItems.map((category) => (
        <Collapsible
          key={category.id}
          open={openCategory === category.id}
          onOpenChange={() =>
            setOpenCategory(openCategory === category.id ? null : category.id)
          }
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              {category.title}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4">
            {category.subTitles.map((subcategory) => (
              <Button
                key={subcategory.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                    setSelectedCategory(`${category.title} ${subcategory.title}`)
                    setSelectedSubCategory(subcategory.title)
                  }
                }
              >
                <Link
                  href={`/blog/posts/${subcategory.id}/1`}
                  // href={`/blog/posts/${category.title.toLowerCase()}/${subcategory.title
                  //   .toLowerCase()
                  //   .replace(" ", "-")}`}
                >
                  {subcategory.title}
                </Link>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};
