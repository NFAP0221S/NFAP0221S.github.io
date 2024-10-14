import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Link from "next/link";
import { PostPagination } from "@/widgets/pagination";
import { PostCard } from "@/widgets/card";
import { getBlocks } from '@/shared/lib/notion';

// import {
//   PieChart as PieChartComponent,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

interface PostsBlocksProps {
  id: string;
  initialBlocks: any[];
  currentPage: number;
}

// const renderCards = async (block: any) => {
//   const type = block?.type;
//   const id = block?.id;
//   const title = block?.child_page?.title;
//   const date = block?.created_time;

//   const blocks: any = await getBlocks(id);

//   const postCardProps = { id, title, date, blocks };

//   if (type === 'child_page' && id && title && date) {
//     return <PostCard key={id} {...postCardProps} />;
//   }
// };

const POSTS_PER_PAGE = 5;

export const BlogPage = ({ id, initialBlocks, currentPage }: PostsBlocksProps) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  // const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  console.log('### initialBlocks', initialBlocks)
  const itemsPerPage = 8;
  const totalPages = Math.ceil(initialBlocks.length / itemsPerPage);

  const reversedBlocks = [...initialBlocks].reverse(); 

  const paginatedBlocks = reversedBlocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-grow p-8 md:p-12 lg:p-8">
      <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="space-y-6">
        {/* {currentPosts.map((post) => (
          <PostCard key={post.id} {...post} blocks={post.blocks} />
        ))} */}
      </div>
      {/* <PostPagination
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      /> */}
    </main>
  );
};
