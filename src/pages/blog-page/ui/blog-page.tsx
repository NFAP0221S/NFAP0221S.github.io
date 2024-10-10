"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Link from "next/link";
import { PostPagination } from "@/widgets/pagination";
// import {
//   PieChart as PieChartComponent,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2023-06-01",
    excerpt:
      "Learn the basics of Next.js and how to set up your first project.",
    category: "Tech",
  },
  {
    id: 2,
    title: "The Art of Minimalism",
    date: "2023-06-15",
    excerpt:
      "Explore how minimalism can improve your life and boost productivity.",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Hidden Gems of Southeast Asia",
    date: "2023-07-01",
    excerpt:
      "Discover lesser-known but breathtaking destinations in Southeast Asia.",
    category: "Travel",
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    date: "2023-07-15",
    excerpt:
      "Dive deep into advanced React patterns to level up your development skills.",
    category: "Tech",
  },
  {
    id: 5,
    title: "Mindfulness in the Digital Age",
    date: "2023-08-01",
    excerpt:
      "Learn how to stay mindful and focused in an increasingly digital world.",
    category: "Lifestyle",
  },
  {
    id: 6,
    title: "Building Scalable APIs with Node.js",
    date: "2023-08-15",
    excerpt:
      "Best practices for creating robust and scalable APIs using Node.js.",
    category: "Tech",
  },
  {
    id: 7,
    title: "Sustainable Travel Tips",
    date: "2023-09-01",
    excerpt:
      "Discover ways to make your travels more environmentally friendly.",
    category: "Travel",
  },
  {
    id: 8,
    title: "The Future of AI in Healthcare",
    date: "2023-09-15",
    excerpt: "Explore the potential impact of AI on the healthcare industry.",
    category: "Tech",
  },
];

const POSTS_PER_PAGE = 5;

export const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="flex-grow p-8 md:p-12 lg:p-8">
      <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="space-y-6">
        {currentPosts.map((post) => (
          <Card key={post.id} className="w-full">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {post.date} | {post.category}
              </p>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/blog/${post.id}`}
                className="text-primary hover:underline"
              >
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PostPagination
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};
