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
  Callout,
  Blockquote,
  Equation,
  Separator,
  LinkPreview,
  Embed,
  Bookmark
} from "@/widgets/blocks";
import { getBlocks } from "@/shared/lib/notion";

export const BlockRenderer = ({ block }: NotionBlock) => {

  // const isChildren = async (id: string, text: string) => {
  //   const blocks: any = await getBlocks(id);
  //   if (text === "토글 자식:") {
  //     // console.log(text, blocks[0].paragraph.rich_text[0].plain_text)
  //     console.log(text, blocks);
  //     return blocks[0]?.paragraph?.rich_text?.[0]?.plain_text || ""; // 안전한 접근과 기본값 처리
  //   }
  //   // console.log(text, blocks[0]?.bulleted_list_item)
  // };

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
      return <Toggle block={block} />;
    case "image":
      return <ImageBlock url={block.url || ""} />;
    case "code":
      return <CodeBlock block={block || ""} language={block.language} />;
    case "callout":
      return <Callout block={block || ""} icon={block.icon} color={block.callout?.color}/>
    case "quote":
      return <Blockquote>{block.content}</Blockquote>;
    case "equation":
      return <Equation expression={block.expression || ""} />;
    case "divider":
      return <Separator />;
    case "link_preview":
      return <LinkPreview url={block.url || ""} />;
    case "embed":
      return <Embed url={block.url || ""} caption={block.caption} />;
    case "bookmark":
      return <Bookmark url={block.url || ""} caption={block.caption} />;
    // case "pdf":
    // case "file":
    //   return <File url={block.url || ""} caption={block.caption} />;
    // case "child_page":
    //   return <ChildPage title={block.content || ""} />;
    // case "child_database":
    //   return <ChildDatabase title={block.content || ""} />;
    case "table":
      return block.table ? <TableBlock table={block.table} /> : null;
    default:
      return null;
  }
};
