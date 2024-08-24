'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
  subCategory: string;
  selectedCategoryId: string | null;
  onCategoryClick: (id: string) => void;
}

export const SubCategories = ({ id, subCategory, selectedCategoryId, onCategoryClick }: Props) => {
  const isSelected = selectedCategoryId === id;

  const handleClick = () => {
    onCategoryClick(id);
  };

  return (
    <div className="ml-4">
      <Link 
        href={`/posts/${id}/1`}
        className={`text-md ${isSelected ? 'text-blue-500' : 'hover:text-blue-500'}`}
        onClick={handleClick}
      >
        <div>{subCategory}</div>
      </Link>
    </div>
  );
}
