import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"
import Link from "next/link";
// import {
//   PieChart as PieChartComponent,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

const posts = [
  { id: 1, title: "Getting Started with Next.js", date: "2023-06-01", excerpt: "Learn the basics of Next.js and how to set up your first project.", category: "Tech" },
  { id: 2, title: "The Art of Minimalism", date: "2023-06-15", excerpt: "Explore how minimalism can improve your life and boost productivity.", category: "Lifestyle" },
  { id: 3, title: "Hidden Gems of Southeast Asia", date: "2023-07-01", excerpt: "Discover lesser-known but breathtaking destinations in Southeast Asia.", category: "Travel" },
  { id: 4, title: "Advanced React Patterns", date: "2023-07-15", excerpt: "Dive deep into advanced React patterns to level up your development skills.", category: "Tech" },
  { id: 5, title: "Mindfulness in the Digital Age", date: "2023-08-01", excerpt: "Learn how to stay mindful and focused in an increasingly digital world.", category: "Lifestyle" },
  { id: 6, title: "Building Scalable APIs with Node.js", date: "2023-08-15", excerpt: "Best practices for creating robust and scalable APIs using Node.js.", category: "Tech" },
  { id: 7, title: "Sustainable Travel Tips", date: "2023-09-01", excerpt: "Discover ways to make your travels more environmentally friendly.", category: "Travel" },
  { id: 8, title: "The Future of AI in Healthcare", date: "2023-09-15", excerpt: "Explore the potential impact of AI on the healthcare industry.", category: "Tech" },
]

export const BlogPage = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="truncate" title={post.title}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date} | {post.category}
                </p>
                <p className="line-clamp-2" title={post.excerpt}>
                  {post.excerpt}
                </p>
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
        <div className="mt-8 flex justify-center">
          {/* <Pagination /> */}
        </div>
      </div>
    </main>
  );
};
