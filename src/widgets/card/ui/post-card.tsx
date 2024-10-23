"use client";

import { useCategory } from "@/app/provider/category-provider";
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
  
  // id: number;
  // title: string;
  // date: string;
  // category: string;
  // excerpt: string;
  // blocks: any;
}

export const PostCard = (props: any) => {
// export const PostCard = (props: CardProps) => {
  const { selectedCategory } = useCategory();
  // const { id, title, date, category, excerpt, blocks } = props
  // const router = useRouter();
  // const text = blocks[1]?.paragraph?.rich_text[0]?.plain_text;
  // const shortText = text ? text.substring(0, 8) : '';
  // const dateSlcie = date ? date.substring(0, 10) : "";
  const dateSlcie = props.last_edited_time ? props.last_edited_time.substring(0, 10) : "";

  // const handleButtonClick = () => {
  //   router.push(`/post/${id}`);
  // };

  const title = props.child_page.title
  console.log('### blocks', props.blocks)
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {/* {dateSlcie} | {category} */}
          {dateSlcie} | {selectedCategory}
        </p>
        {/* <p>{excerpt}</p> */}
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/post/${props.id}`}
          className="text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
