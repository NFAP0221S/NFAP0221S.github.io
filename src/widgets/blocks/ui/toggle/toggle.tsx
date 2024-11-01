'use client'

import { NotionBlock } from "@/shared/types/notion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Toggle = ({
  block,
  className,
}: {
  block: NotionBlock;
  className?: string;
}) => {
  console.log("### Toggle", block);

  return (
    <details className={twMerge("mb-4", className)}>
      <summary className="cursor-pointer text-gray-800 dark:text-gray-200">
        {/* {content} */}
      </summary>
      {/* Nested content would go here */}
    </details>
  );
};
