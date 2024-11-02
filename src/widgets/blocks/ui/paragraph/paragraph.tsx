import React from "react";
import { twMerge } from "tailwind-merge";
import { RichText } from "../rich-text/render-rich-text";
import { renderRichText } from "@/widgets/blocks/ui/rich-text";

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
  <p className={twMerge("mb-4 text-gray-700 dark:text-gray-300", className)} id="paragraph">
    {renderRichText(block.paragraph.rich_text, block)}
  </p>
);

