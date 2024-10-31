import React from "react";
import { NotionBlock } from "@/shared/types/notion";
import {
  BulletedListItem,
  CodeBlock,
  Heading,
  ImageBlock,
  NumberedListItem,
  Paragraph,
  TableBlock,
  ToDo,
  Toggle,
} from "@/widgets/blocks";

export const BlockRenderer = ({ block }: NotionBlock) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph block={block || ""} />;
    case "heading_1":
    case "heading_2":
    case "heading_3":
      return <Heading block={block || ""} />;
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
