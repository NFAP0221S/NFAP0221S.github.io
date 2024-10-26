import React from "react";
import { twMerge } from "tailwind-merge";

export const ToDo = ({ content, checked, className }: { content: string, checked?: boolean, className?: string }) => (
  <div className={twMerge("flex items-center mb-2", className)}>
    <input type="checkbox" checked={checked} readOnly className="mr-2" />
    <span className="text-gray-700 dark:text-gray-300">{content}</span>
  </div>
)
