import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const LinkPreview = ({ url, className }: { url: string, className?: string }) => (
  <div className={twMerge("mb-4", className)}>
    <Link href={url} className="text-blue-500 hover:underline">{url}</Link>
  </div>
)