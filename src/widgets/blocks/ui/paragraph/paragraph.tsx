import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  content: any[]; // richTextArray 형태의 데이터 사용
  className?: string;
}

export const Paragraph = ({ content, className }: ParagraphProps) => (
  <p className={twMerge("mb-4 text-gray-700 dark:text-gray-300", className)}>
    {renderRichText(content)}
  </p>
);

// renderRichText 함수 재사용
const renderRichText = (richTextArray: any[]) => {
  if (!richTextArray || richTextArray.length === 0) {
    return <br />;
  }

  return richTextArray.map((text, index) => (
    <React.Fragment key={`rich-text-${text}-${index}`}>
      <span>
        {text?.plain_text.split("\n").map((part: string, partIndex: number) => (
          <React.Fragment key={`rich-text-split-${part}-${partIndex}`}>
            {part}
            {partIndex < text.plain_text.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </React.Fragment>
  ));
};
