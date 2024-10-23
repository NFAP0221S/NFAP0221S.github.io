import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

type Post = {
  id: string
  title: string
  date: string
  category: string
  blocks: Block[]
}

const post: Post = {
  id: "1",
  title: "Getting Started with Next.js",
  date: "2023-06-01",
  category: "Tech",
  blocks: [
    { type: "paragraph", id: "1", content: "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we'll explore the basics of Next.js and how to set up your first project." },
    { type: "heading_2", id: "2", content: "Creating a New Next.js Project" },
    { type: "paragraph", id: "3", content: "First, let's start by creating a new Next.js project. Open your terminal and run the following command:" },
    { type: "code", id: "4", content: "npx create-next-app my-next-app", language: "bash" },
    { type: "paragraph", id: "5", content: "This will create a new Next.js project in a directory called `my-next-app`. Once the installation is complete, navigate into the directory and start the development server:" },
    { type: "code", id: "6", content: "cd my-next-app\nnpm run dev", language: "bash" },
    { type: "paragraph", id: "7", content: "Congratulations! You now have a Next.js application running on `http://localhost:3000`." },
    { type: "heading_2", id: "8", content: "Key Features of Next.js" },
    { type: "paragraph", id: "9", content: "Let's explore some of the key features that make Next.js so powerful:" },
    { type: "bulleted_list_item", id: "10", content: "File-based Routing: Next.js uses a file-based routing system. Simply create a new file in the `pages` directory, and it automatically becomes a route." },
    { type: "bulleted_list_item", id: "11", content: "API Routes: You can easily create API endpoints by adding files to the `pages/api` directory." },
    { type: "bulleted_list_item", id: "12", content: "Static Site Generation (SSG) and Server-Side Rendering (SSR): Next.js supports both SSG and SSR out of the box, allowing you to choose the best rendering method for each page." },
    { type: "bulleted_list_item", id: "13", content: "CSS Support: Next.js has built-in support for CSS Modules, Sass, and other styling solutions." },
    { type: "paragraph", id: "14", content: "In future posts, we'll dive deeper into these features and explore more advanced topics. Happy coding!" },
    { type: "image", id: "15", url: "https://example.com/nextjs-logo.png" },
    { type: "to_do", id: "16", content: "Learn about Next.js routing", checked: true },
    { type: "to_do", id: "17", content: "Explore Next.js API routes", checked: false },
    { type: "toggle", id: "18", content: "Click to see a fun fact about Next.js" },
    { type: "paragraph", id: "19", content: "Next.js was created by Vercel and is used by some of the world's largest companies!" },
    { 
      type: "table", 
      id: "20", 
      table: {
        headers: ["Feature", "Description"],
        rows: [
          { id: "row1", cells: ["File-based Routing", "Automatic route creation based on file structure"] },
          { id: "row2", cells: ["API Routes", "Easy creation of API endpoints"] },
          { id: "row3", cells: ["SSG and SSR", "Support for both Static Site Generation and Server-Side Rendering"] },
          { id: "row4", cells: ["CSS Support", "Built-in support for various CSS solutions"] },
        ]
      }
    },
  ]
}

const BlockRenderer = ({ block }: { block: Block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-4">{block.content}</p>
    case 'heading_1':
      return <h1 className="text-3xl font-bold mb-4">{block.content}</h1>
    case 'heading_2':
      return <h2 className="text-2xl font-bold mb-3">{block.content}</h2>
    case 'heading_3':
      return <h3 className="text-xl font-bold mb-2">{block.content}</h3>
    case 'bulleted_list_item':
      return <li className="ml-6 mb-2 list-disc">{block.content}</li>
    case 'numbered_list_item':
      return <li className="ml-6 mb-2 list-decimal">{block.content}</li>
    case 'to_do':
      return (
        <div className="flex items-center mb-2">
          <input type="checkbox" checked={block.checked} readOnly className="mr-2" />
          <span>{block.content}</span>
        </div>
      )
    case 'toggle':
      return (
        <details className="mb-4">
          <summary className="cursor-pointer">{block.content}</summary>
          {/* Nested content would go here */}
        </details>
      )
    case 'image':
      return (
        <div className="mb-4">
          <Image src={block.url || ''} alt="Post image" width={600} height={400} className="rounded-lg" />
        </div>
      )
    case 'code':
      return (
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
          <code className={`language-${block.language}`}>{block.content}</code>
        </pre>
      )
    case 'table':
      return (
        <div className="mb-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {block.table?.headers.map((header, index) => (
                  <TableHead key={index}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {block.table?.rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell, index) => (
                    <TableCell key={index}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )
    default:
      return null
  }
}

export default function PostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-purple-900 p-8">
      <Button
        variant="outline"
        size="sm"
        className="mb-4"
        asChild
      >
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{post.date} | {post.category}</p>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            {post.blocks.map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}