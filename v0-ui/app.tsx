"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { PieChart as PieChartComponent, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Moon, Sun, Github, Menu, ChevronDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const pieChartData = [
  { name: 'Tech', value: 400 },
  { name: 'Lifestyle', value: 300 },
  { name: 'Travel', value: 300 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const posts = [
  { id: 1, title: "Getting Started with Next.js and Understanding Its Core Concepts", date: "2023-06-01", excerpt: "Learn the basics of Next.js and how to set up your first project.", category: "Tech" },
  { id: 2, title: "The Art of Minimalism: Simplifying Your Life for Maximum Happiness", date: "2023-06-15", excerpt: "Explore how minimalism can improve your life and boost productivity.", category: "Lifestyle" },
  { id: 3, title: "Hidden Gems of Southeast Asia: Off-the-Beaten-Path Destinations", date: "2023-07-01", excerpt: "Discover lesser-known but breathtaking destinations in Southeast Asia.", category: "Travel" },
  { id: 4, title: "Advanced React Patterns for Building Scalable Applications", date: "2023-07-15", excerpt: "Dive deep into advanced React patterns to level up your development skills.", category: "Tech" },
]

const categories = [
  {
    name: "Tech",
    subcategories: ["Web Development", "Mobile Development", "AI & Machine Learning"]
  },
  {
    name: "Lifestyle",
    subcategories: ["Minimalism", "Productivity", "Health & Wellness"]
  },
  {
    name: "Travel",
    subcategories: ["Asia", "Europe", "North America"]
  }
]

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const showSidebar = pathname.startsWith('/blog')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">My Blog</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" asChild className="ml-2">
                <Link href="https://github.com">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="ml-2">
                <Avatar>
                  <AvatarImage src="/avatar.png" alt="@username" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {(showSidebar || sidebarOpen) && (
          <aside className={`w-64 border-r ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">Categories</h2>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Collapsible
                    key={category.name}
                    open={openCategory === category.name}
                    onOpenChange={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between">
                        {category.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                      {category.subcategories.map((subcategory) => (
                        <Button key={subcategory} variant="ghost" className="w-full justify-start">
                          <Link href={`/blog/category/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(' ', '-')}`}>
                            {subcategory}
                          </Link>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Main content area */}
        <main className="flex-1 p-6 md:px-8">
          <h1 className="text-4xl font-bold mb-6">Welcome to My Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-lg">
                Hi, I'm a passionate developer who loves to write about technology,
                lifestyle, and travel. This blog is my platform to share my thoughts
                and experiences with the world.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Interests</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChartComponent>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChartComponent>
              </ResponsiveContainer>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="truncate" title={post.title}>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{post.date} | {post.category}</p>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Button
        className="fixed bottom-4 right-4"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}