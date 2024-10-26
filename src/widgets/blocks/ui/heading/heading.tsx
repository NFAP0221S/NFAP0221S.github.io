import { twMerge } from "tailwind-merge"

export const Heading1 = ({ content, className }: { content: string, className?: string }) => (
  <h1 className={twMerge("text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100", className)}>{content}</h1>
)

export const Heading2 = ({ content, className }: { content: string, className?: string }) => (
  <h2 className={twMerge("text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200", className)}>{content}</h2>
)

export const Heading3 = ({ content, className }: { content: string, className?: string }) => (
  <h3 className={twMerge("text-xl font-bold mb-2 text-gray-800 dark:text-gray-200", className)}>{content}</h3>
)