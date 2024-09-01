"use client";

import { Button } from "@nextui-org/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useIsDark } from "@/app/hooks";
import { useRouter } from "next/navigation";

export const PostHeader = ({ title }: {title: string}) => {
  const isDark = useIsDark();
  const router = useRouter(); 

  return (
    <div className="flex gap-4 items-start pb-4">
      <Button 
        isIconOnly 
        color={isDark ? 'warning' : 'primary'}
        aria-label="Like"
        onClick={() => router.back()} 
      >
        <IoMdArrowRoundBack />
      </Button>
      <h1 className="flex-1 text-start justify-center text-xl font-bold">
        {title}
      </h1>
    </div>
  );
};
