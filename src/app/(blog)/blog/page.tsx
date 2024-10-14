import { notFound } from 'next/navigation';
import { BlogPage } from "@/pages/blog-page";
import { getDatabase, getBlocks, getPage } from "@/shared/lib/notion";

interface props {
  params: {
    id: string;
    page: string;
  };
}

export const generateStaticParams = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  const paramsArray = [];
  for (const post of posts) {
    const blocks = await getBlocks(post.id);
    const totalPages = Math.ceil(blocks.length / 8);
    for (let page = 1; page <= totalPages; page++) {
      paramsArray.push({ id: post.id, page: page.toString() });
    }
  }
  // return paramsArray;
  console.log('### paramsArray', paramsArray)
  console.log('### posts', posts)
  return posts
};

const Blog = async ({ params }: props) => {
  const { id, page } = params;
  const currentPage = parseInt(page, 10);
  console.log('### params', params)
  // const pageData: any = await getPage(id);
  // const blocks: any = await getBlocks(id);
  // const postsProps = { id, initialBlocks: blocks, currentPage };

  // if (!pageData || !blocks) {
  //   notFound();
  // }

  // return <BlogPage {...postsProps}/>;
  return <div>Hello</div>;
};

export default Blog;
