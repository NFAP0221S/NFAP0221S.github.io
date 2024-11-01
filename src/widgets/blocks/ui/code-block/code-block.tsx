'use client'

import React from "react";
import { twMerge } from "tailwind-merge";

export const CodeBlock = ({
  block,
  language,
  className,
}: {
  block: any;
  language?: string;
  className?: string;
}) => {

  console.log("### code block", block);
  return (
    <pre
      className={twMerge(
        "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto",
        className
      )}
    >
      <code className={`language-${language}`}>{block.code?.rich_text[0].plain_text}</code>
    </pre>
  );
};
