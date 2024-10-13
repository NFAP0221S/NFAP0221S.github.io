"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface CardProps {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  blocks: any;
}

export const PostCard = ({ id, title, date, category, excerpt, blocks }: CardProps) => {
  const router = useRouter();
  // const text = blocks[1]?.paragraph?.rich_text[0]?.plain_text;
  // const shortText = text ? text.substring(0, 8) : '';
  // const dateSlcie = date ? date.substring(0, 10) : "";

  // const handleButtonClick = () => {
  //   router.push(`/post/${id}`);
  // };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {date} | {category}
        </p>
        <p>{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${id}`}
          className="text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
