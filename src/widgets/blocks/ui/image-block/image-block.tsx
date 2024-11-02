import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image"


export const ImageBlock = ({ url, className }: { url: string, className?: string }) => (
  <div className={twMerge("mb-4", className)} id="image-block">
    <Image src={url} alt="Post image" width={600} height={400} className="rounded-lg" />
  </div>
)