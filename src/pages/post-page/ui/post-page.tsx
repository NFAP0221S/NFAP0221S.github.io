// 'use client'

import React from "react";
import { NotionBlock } from "@/shared/types/notion";
import { PostHeader } from "@/widgets/header";
import { RenderBlock } from "@/features/blocks";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import {
  BulletedListItem,
  CodeBlock,
  Heading1,
  Heading2,
  Heading3,
  ImageBlock,
  NumberedListItem,
  Paragraph,
  TableBlock,
  ToDo,
  Toggle,
} from "@/widgets/block";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PostBlocksProps {
  page: any;
  blocks: NotionBlock[];
}

type TableRow = {
  id: string;
  cells: string[];
};

type Block = {
  type:
    | "paragraph"
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "bulleted_list_item"
    | "numbered_list_item"
    | "to_do"
    | "toggle"
    | "image"
    | "code"
    | "table";
  id: string;
  content?: string;
  checked?: boolean;
  language?: string;
  url?: string;
  table?: {
    headers: string[];
    rows: TableRow[];
  };
};

export const PostPage = ({ page, blocks }: PostBlocksProps) => {
  // const title = page?.properties['이름']?.title?.[0]?.plain_text || page?.properties.title.title[0].plain_text
  const title = page?.properties.title.title[0].plain_text;

  const BlockRenderer = ({ block }: { block: NotionBlock }) => {
    switch (block.type) {
      case "paragraph":
        return <Paragraph content={block.content || ""} />;
      case "heading_1":
        return <Heading1 content={block.content || ""} />;
      case "heading_2":
        return <Heading2 content={block.content || ""} />;
      case "heading_3":
        return <Heading3 content={block.content || ""} />;
      case "bulleted_list_item":
        return <BulletedListItem content={block.content || ""} />;
      case "numbered_list_item":
        return <NumberedListItem content={block.content || ""} />;
      case "to_do":
        return <ToDo content={block.content || ""} checked={block.checked} />;
      case "toggle":
        return <Toggle content={block.content || ""} />;
      case "image":
        return <ImageBlock url={block.url || ""} />;
      case "code":
        return (
          <CodeBlock content={block.content || ""} language={block.language} />
        );
      case "table":
        return block.table ? <TableBlock table={block.table} /> : null;
      default:
        return null;
    }
  };
  console.log("### blocks", blocks);
  return (
    <main className="flex-1 p-6">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" size="sm" className="mb-4" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-sm text-muted-foreground mb-4">
            {/* {post.date} | {post.category} */}
            {"2024-06-01"} | {"react"}
          </p>
          {/* <RenderBlock blocks={blocks} /> */}
          {blocks.map((block) => (
            <BlockRenderer key={block.id} block={block} />
          ))}
        </article>
      </div>
    </main>
  );
};
