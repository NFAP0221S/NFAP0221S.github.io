import React from "react";
import { twMerge } from "tailwind-merge";

export const Toggle = ({ content, className }: { content: string, className?: string }) => (
  <details className={twMerge("mb-4", className)}>
    <summary className="cursor-pointer text-gray-800 dark:text-gray-200">{content}</summary>
    {/* Nested content would go here */}
  </details>
)
