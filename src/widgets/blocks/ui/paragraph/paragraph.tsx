"use client";

import { NotionBlock } from "@/shared/types/notion";
import React from "react";
import { twMerge } from "tailwind-merge";
import { CodeBlock } from "../code-block";
import { renderRichText } from "../rich-text";
import { RichText } from "../rich-text/render-rich-text";

interface ParagraphProps {
  block: ParagraphBlock;
  className?: string;
}

export type ParagraphBlock = {
  type: "paragraph";
  paragraph: {
    rich_text: RichText[];
    color: string;
  };
};

export const Paragraph = ({ block, className }: ParagraphProps) => (
  <p className={twMerge("mb-4 text-gray-700 dark:text-gray-300", className)}>
    {renderRichText(block.paragraph.rich_text, block)}
  </p>
);

