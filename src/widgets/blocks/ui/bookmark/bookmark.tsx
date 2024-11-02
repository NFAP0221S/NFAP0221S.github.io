'use client'

import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

export const Bookmark = ({ url, caption, className }: { url: string, caption?: string, className?: string }) => (
  <div className={twMerge("mb-4 p-4 border rounded", className)} id="bookmark">
    <Link href={url} className="text-blue-500 hover:underline">{url}</Link>
    {caption && <p className="text-sm text-gray-500 mt-2">{caption}</p>}
  </div>
)
