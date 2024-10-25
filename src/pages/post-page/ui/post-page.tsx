import React from "react";
import { NotionBlock } from "@/shared/types/notion";
import { PostHeader } from "@/widgets/header";
import { RenderBlock } from "@/features/blocks";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { BulletedListItem, CodeBlock, Heading1, Heading2, Heading3, ImageBlock, NumberedListItem, Paragraph, TableBlock, ToDo, Toggle } from "@/widgets/block";

interface PostBlocksProps {
  page: any;
  blocks: NotionBlock[];
}

type TableRow = {
  id: string
  cells: string[]
}

type Block = {
  type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'bulleted_list_item' | 'numbered_list_item' | 'to_do' | 'toggle' | 'image' | 'code' | 'table'
  id: string
  content?: string
  checked?: boolean
  language?: string
  url?: string
  table?: {
    headers: string[]
    rows: TableRow[]
  }
}

export const PostPage = ({ page, blocks }: PostBlocksProps) => {
  // const title = page?.properties['이름']?.title?.[0]?.plain_text || page?.properties.title.title[0].plain_text
  const title = page?.properties.title.title[0].plain_text;

  const BlockRenderer = ({ block }: { block: Block }) => {
    switch (block.type) {
      case 'paragraph':
        return <Paragraph content={block.content || ''} />
      case 'heading_1':
        return <Heading1 content={block.content || ''} />
      case 'heading_2':
        return <Heading2 content={block.content || ''} />
      case 'heading_3':
        return <Heading3 content={block.content || ''} />
      case 'bulleted_list_item':
        return <BulletedListItem content={block.content || ''} />
      case 'numbered_list_item':
        return <NumberedListItem content={block.content || ''} />
      case 'to_do':
        return <ToDo content={block.content || ''} checked={block.checked} />
      case 'toggle':
        return <Toggle content={block.content || ''} />
      case 'image':
        return <ImageBlock url={block.url || ''} />
      case 'code':
        return <CodeBlock content={block.content || ''} language={block.language} />
      case 'table':
        return block.table ? <TableBlock table={block.table} /> : null
      default:
        return null
    }
  }

  return (
    // <React.Fragment>
    //   <PostHeader title={title} />
    //   <div className="overflow-auto">
    //     <RenderBlock blocks={blocks} />
    //   </div>
    // </React.Fragment>
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        {/* <p className="text-sm text-muted-foreground">{post.date} | {post.category}</p> */}
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">
          {blocks.map((block: any) => (
            <BlockRenderer key={block.id} block={block} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
