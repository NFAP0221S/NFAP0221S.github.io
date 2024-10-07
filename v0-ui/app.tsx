"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { PieChart as PieChartComponent, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Moon, Sun, Github, Menu, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const pieChartData = [
  { name: 'Tech', value: 400 },
  { name: 'Lifestyle', value: 300 },
  { name: 'Travel', value: 300 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

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
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
              <p className="text-xl text-muted-foreground">
                Hi, I'm a passionate developer who loves to write about technology,
                lifestyle, and travel. This blog is my platform to share my thoughts
                and experiences with the world.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Image Placeholder
                </div>
              </div>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h2 className="text-2xl font-semibold mb-4">My Interests</h2>
                    <p className="text-muted-foreground">
                      I'm passionate about various topics in technology, lifestyle, and travel.
                      This chart represents the distribution of content you'll find on my blog.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 order-1 md:order-2">
                    <ResponsiveContainer width="100%" height={200}>
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
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
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