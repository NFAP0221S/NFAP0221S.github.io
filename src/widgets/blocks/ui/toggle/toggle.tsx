import React from "react";
import { getBlocks } from "@/shared/lib/notion";
import { NotionBlock } from "@/shared/types/notion";
import { twMerge } from "tailwind-merge";
import { renderRichText } from "@/widgets/blocks/ui/rich-text";
import { BlockRenderer } from "@/features/blocks";

export const Toggle = async ({ block, className }: { block: NotionBlock; className?: string }) => {
  const children = block.has_children ? await getBlocks(block.id) : null;

  return (
    <details className={twMerge("mb-4", className)}>
      <summary className="cursor-pointer text-gray-800 dark:text-gray-200">
        {renderRichText(block.toggle?.rich_text)}
      </summary>
      <div>
        {children &&
          children.map((childBlock) => (
            <BlockRenderer key={childBlock.id} block={childBlock} />
          ))}
      </div>
    </details>
  );
};
