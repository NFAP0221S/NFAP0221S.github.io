"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeSwitch from "@/shared/ui/dark-mode-switch";
// import { SplitCategories } from "@/features/render-category";
// import { CatListProps } from "@/shared/types/component";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Moon, Sun, Github, Menu, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes"
import { DarkModeToggle } from "./dark-mode-toggle";

export const Header = () => {
// export const Header = ({ categoryList }: CatListProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">hs/memo</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {/* <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button> */}
            <DarkModeToggle />
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
  );
};