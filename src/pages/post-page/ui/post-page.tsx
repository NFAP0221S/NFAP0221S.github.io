import React from 'react'
import { NotionBlock } from '@/shared/types/notion';
import { PostHeader } from '@/widgets/header';
import { RenderBlock } from '@/features/blocks';

interface PostBlocksProps {
  page: any
  blocks: NotionBlock[]
}

export const PostPage = ({ page, blocks }: PostBlocksProps) => {

  // const title = page?.properties['이름']?.title?.[0]?.plain_text || page?.properties.title.title[0].plain_text
  const title = page?.properties.title.title[0].plain_text

  return (
    <React.Fragment>
      <PostHeader title={title} />
      <div className="overflow-auto">
        <RenderBlock blocks={blocks} />
      </div>
    </React.Fragment>
  );
}
