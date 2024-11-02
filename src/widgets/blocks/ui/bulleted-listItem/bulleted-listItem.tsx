// 'use client'

import { getBlocks } from "@/shared/lib/notion";
import { NotionBlock } from "@/shared/types/notion";
import { twMerge } from "tailwind-merge";
import { renderRichText } from "@/widgets/blocks/ui/rich-text";
import { BlockRenderer } from "@/features/blocks"; // BlockRenderer 불러오기

export const BulletedListItem = async ({
  block,
  className,
}: {
  block: NotionBlock;
  className?: string;
}) => {
  const children = block.has_children ? await getBlocks(block.id) : null;

  return (
    <li
      className={twMerge(
        "ml-6 mb-2 list-disc text-gray-700 dark:text-gray-300",
        className
      )}
      id="bulleted-list-item"
    >
      {renderRichText(block.bulleted_list_item?.rich_text)}
      
      {/* 자식 블록이 있을 경우 중첩된 목록으로 렌더링 */}
      {children && (
        <ul className="ml-6 mt-2">
          {children.map((childBlock) => (
            <BlockRenderer key={childBlock.id} block={childBlock} />
          ))}
        </ul>
      )}
    </li>
  );
};
