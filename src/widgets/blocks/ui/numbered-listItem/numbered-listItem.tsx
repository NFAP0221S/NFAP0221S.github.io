import React from "react";
import { twMerge } from "tailwind-merge";
import { getBlocks } from "@/shared/lib/notion";
import { BlockRenderer } from "@/features/blocks";
import { NotionBlock } from "@/shared/types/notion";

export const NumberedListItem = async ({
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
        "ml-6 mb-2 list-decimal text-gray-700 dark:text-gray-300",
        className
      )}
      id="numbered-list-item"
    >
      {block.numbered_list_item?.rich_text &&
        block.numbered_list_item.rich_text.map((text: any, index: number) => (
          <React.Fragment key={index}>{text.plain_text}</React.Fragment>
        ))}

      {/* 자식 블록이 있을 경우 중첩된 목록으로 렌더링 */}
      {children && (
        <ol className="ml-6 mt-2">
          {children.map((childBlock: any) => (
            <BlockRenderer key={childBlock.id} block={childBlock} />
          ))}
        </ol>
      )}
    </li>
  );
};
