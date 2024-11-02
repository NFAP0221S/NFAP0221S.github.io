import React from "react";
import { twMerge } from "tailwind-merge";

export const NumberedListItem = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => (
  <li
    className={twMerge(
      "ml-6 mb-2 list-decimal text-gray-700 dark:text-gray-300",
      className
    )}
    id="numbered-list-item"
  >
    {content}
  </li>
);
