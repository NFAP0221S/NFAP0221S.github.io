import { twMerge } from "tailwind-merge";

export const BulletedListItem = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => (
  <li
    className={twMerge(
      "ml-6 mb-2 list-disc text-gray-700 dark:text-gray-300",
      className
    )}
    id="bullted-list-item"
  >
    {content}
  </li>
);
