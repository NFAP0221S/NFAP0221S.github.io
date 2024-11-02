import { twMerge } from "tailwind-merge";

export const Blockquote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <blockquote
    className={twMerge(
      "pl-4 border-l-4 border-gray-300 italic mb-4",
      className
    )}
    id="blockquote"
  >
    {children}
  </blockquote>
);
