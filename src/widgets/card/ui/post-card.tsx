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
  
  // id: number;
  // title: string;
  // date: string;
  // category: string;
  // excerpt: string;
  // blocks: any;
}

export const PostCard = (props: any) => {
// export const PostCard = (props: CardProps) => {
  // const { id, title, date, category, excerpt, blocks } = props
  // const router = useRouter();
  // const text = blocks[1]?.paragraph?.rich_text[0]?.plain_text;
  // const shortText = text ? text.substring(0, 8) : '';
  // const dateSlcie = date ? date.substring(0, 10) : "";
  const dateSlcie = props.last_edited_time ? props.last_edited_time.substring(0, 10) : "";
  console.log('### props', props)
  // const handleButtonClick = () => {
  //   router.push(`/post/${id}`);
  // };

  // const title = props.child_page.title

  return (
    <Card className="w-full">
      <CardHeader>
        {/* <CardTitle>{title}</CardTitle> */}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {/* {dateSlcie} | {category} */}
          {dateSlcie} | {'category'}
        </p>
        {/* <p>{excerpt}</p> */}
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${props.id}`}
          className="text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
