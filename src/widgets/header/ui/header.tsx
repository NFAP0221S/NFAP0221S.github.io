'use client';

import React from 'react';
import Link from 'next/link';
import { useThemeClass } from '@/app/hooks';
import DarkModeSwitch from '@/shared/_components/DarkModeSwitch';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { WhiteBlack } = useThemeClass();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-colors duration-500">
      <div className="container p-4 px-6 max-w-screen-2xl flex items-center justify-between">
        {/* 왼쪽: 사이트 이름과 네비게이션 */}
        <div className="flex items-center">
          <Link href="/" className="font-bold">
            sol github pages
          </Link>
          <nav className="ml-6 flex space-x-4">
            <Link href="/about" className="text-gray-400">
              블로그
            </Link>
            <Link href="/work" className="text-gray-400">
              포트폴리오
            </Link>
            <Link href="/quiz" className="text-gray-400">
              JS
            </Link>
          </nav>
        </div>

        {/* 오른쪽: GitHub 및 프로필 링크 */}
        <div className="flex items-center space-x-4">
          <Link href="/profile" className="text-gray-400">
            프로필
          </Link>
          <Link href="https://github.com/your-github-profile" className="text-gray-400">
            GitHub
          </Link>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};
