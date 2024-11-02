import { NotionBlock } from "@/shared/types/notion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({
  block,
  className,
}: {
  block: NotionBlock;
  className?: string;
}) => {
  const BlockRenderer = ({ block }: { block: NotionBlock }) => {
    switch (block.type) {
      case "heading_1":
        return (
          <h1
            className={twMerge(
              "text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100",
              className
            )}
            id="heading-1"
          >
            {renderRichText(block.heading_1?.rich_text)}
          </h1>
        );
      case "heading_2":
        return (
          <h2
            className={twMerge(
              "text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200",
              className
            )}
            id="heading-2"
          >
            {renderRichText(block.heading_2?.rich_text)}
          </h2>
        );
      case "heading_3":
        return (
          <h3
            className={twMerge(
              "text-xl font-bold mb-2 text-gray-800 dark:text-gray-200",
              className
            )}
            id="heading-3"
          >
            {renderRichText(block.heading_3?.rich_text)}
          </h3>
        );
      default:
        return null;
    }
  };

  const renderRichText = (richTextArray: any[]) => {
    if (!richTextArray || richTextArray.length === 0) {
      return <br />;
    }

    return richTextArray.map((text, index) => (
      <React.Fragment key={`rich-text-${text}-${index}`}>
        <span>
          {text?.plain_text
            .split("\n")
            .map((part: string, partIndex: number) => (
              <React.Fragment key={`rich-text-split-${part}-${partIndex}`}>
                {part}
                {partIndex < text.plain_text.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
        </span>
      </React.Fragment>
    ));
  };

  return <>{BlockRenderer({ block })}</>;
};
