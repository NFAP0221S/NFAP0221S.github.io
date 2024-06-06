'use client';
import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useThemeClass } from '@/app/hooks';

export default function Header() {
  const { bgCr, txtCr } = useThemeClass(); 

  return(
    <header className={`flex items-center justify-between p-4 ${bgCr} ${txtCr}`}>
      <nav className='flex items-center'>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/posts" className="mr-4">Posts</Link>
        <DarkModeSwitch />
      </nav>
    </header>
  )
};

