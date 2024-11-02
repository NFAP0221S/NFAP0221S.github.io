// "use client";

import Image from "next/image";
import { Info } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { NotionBlock } from "@/shared/types/notion";
import { getBlocks } from "@/shared/lib/notion";
import { BlockRenderer } from "@/features/blocks";
import { renderRichText } from "@/widgets/blocks/ui/rich-text";

export const Callout = async ({
  block,
  icon,
  color = "default",
  className,
}: {
  block: NotionBlock;
  icon?: any;
  color?: string;
  className?: string;
}) => {
  const _children = block.has_children ? await getBlocks(block.id) : null;

  const colorClasses =
    {
      gray_background: "bg-gray-100 border-gray-200 text-gray-800",
      blue_background: "bg-blue-100 border-blue-200 text-blue-800",
      red_background: "bg-red-100 border-red-200 text-red-800",
      green_background: "bg-green-100 border-green-200 text-green-800",
      yellow_background: "bg-yellow-100 border-yellow-200 text-yellow-800",
    }[color] || "bg-gray-100 border-gray-200 text-gray-800";

  return (
    <div
      className={twMerge(
        `flex items-start p-4 m-2 border rounded-md ${colorClasses}`,
        className
      )}
    >
      {/* 아이콘 */}
      <div className="flex-shrink-0 mr-3">
        {icon && icon.type === "emoji" && (
          <span className="text-xl">{icon.emoji}</span>
        )}
        {icon && icon.type === "file" && (
          <Image src={icon.url} alt="" width={20} height={20} />
        )}
        {!icon && <Info className="w-5 h-5" />}
      </div>

      {/* 메인 콘텐츠와 하위 블록 */}
      <div>
        {renderRichText(block.callout?.rich_text)}
        {_children && (
          <div className="mt-4">
            {_children.map((childBlock) => (
              <BlockRenderer key={childBlock.id} block={childBlock} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
