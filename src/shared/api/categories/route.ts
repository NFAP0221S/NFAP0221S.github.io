import { fetchCategories } from '@/shared/services/categories';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await fetchCategories();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}