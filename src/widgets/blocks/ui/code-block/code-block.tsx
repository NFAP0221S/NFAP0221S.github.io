import React from "react";
import { twMerge } from "tailwind-merge";

export const CodeBlock = ({ content, language, className }: { content: string, language?: string, className?: string }) => (
  <pre className={twMerge("bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto", className)}>
    <code className={`language-${language}`}>{content}</code>
  </pre>
)
