import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Embed = ({ url, caption, className }: { url: string, caption?: string, className?: string }) => (
  <div className={twMerge("mb-4", className)} id="embed">
    <iframe src={url} className="w-full h-64 border-0" />
    {caption && <p className="text-sm text-gray-500 mt-2">{caption}</p>}
  </div>
)
