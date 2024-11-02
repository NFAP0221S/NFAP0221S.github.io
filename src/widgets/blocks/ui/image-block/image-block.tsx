import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { NotionBlock } from "@/shared/types/notion";

export const ImageBlock = ({
  block,
  className,
}: {
  block: NotionBlock;
  className?: string;
}) => {

  return (
    <div className={twMerge("mb-4", className)} id="image-block">
      <Image
        src={block.image.file.url}
        alt="Post image"
        width={600}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
};
