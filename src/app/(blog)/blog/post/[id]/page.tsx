import { getBlocks, getDatabase, getPage } from "@/shared/lib/notion";
import { notFound } from "next/navigation";
import { PostPage } from "@/pages/post-page";

export const generateStaticParams = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  const posts = await getDatabase(databaseId);

  const postDetails = await Promise.all(
    posts.map(async (post) => {
      const blocks = await getBlocks(post.id);
      return {
        id: post.id,
        blockIds: blocks
          .filter((block: any) => block?.type === "child_page") // child_page 타입인 블록들만 필터링
          .map((block) => block.id), // 필터된 블록들의 ID만 추출
      };
    })
  );

  return postDetails.flatMap((postDetail) =>
    postDetail.blockIds.map((blockId) => ({
      id: blockId,
    }))
  );
};

const Post = async ({ params }: any) => {
  const { id } = params;

  const page: any = await getPage(id);
  const blocks = await getBlocks(id);

  if (!page) {
    notFound();
  }

  const postProps = { page, blocks };

  return <PostPage {...postProps} />;
};

export default Post;
