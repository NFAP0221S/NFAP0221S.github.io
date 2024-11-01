import { NotionBlock } from "@/shared/types/notion";
import React from "react";
import { twMerge } from "tailwind-merge";

export type RichText = {
  type: "text";
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};

// renderRichText 함수 수정
export const renderRichText = (richTextArray: RichText[], block: NotionBlock) => {
  if (!richTextArray || richTextArray.length === 0) {
    return <br />;
  }

  return richTextArray.map((text, index) => {
    const { bold, italic, strikethrough, underline, code } = text.annotations;

    // 스타일링 클래스 할당
    const styleClasses = twMerge(
      bold ? "font-bold" : "",
      italic ? "italic" : "",
      strikethrough ? "line-through" : "",
      underline ? "underline" : "",
      code ? "bg-gray-100 dark:bg-gray-800 p-1 rounded" : ""
    );

    // console.log("### Paragraph", block);

    return (
      <React.Fragment key={`rich-text-${index}`}>
        {code ? (
          <span
            className={twMerge(
              "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-1 rounded text-sm font-mono",
            )}
          >
            <code className="language-plaintext">{text.text.content}</code>
          </span>
        ) : (
          <span className={styleClasses}>
            {text.plain_text.split("\n").map((part, partIndex) => (
              <React.Fragment key={`rich-text-split-${part}-${partIndex}`}>
                {part}
                {partIndex < text.plain_text.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        )}
      </React.Fragment>
    );
  });
};