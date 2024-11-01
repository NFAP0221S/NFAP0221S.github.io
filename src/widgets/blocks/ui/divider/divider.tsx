import { twMerge } from "tailwind-merge";

export const Separator = ({ className }: { className?: string }) => (
  <hr className={twMerge("my-4 border-t border-gray-200", className)} />
)