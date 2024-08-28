import { getDatabase } from "@/shared/lib/notion";

export async function fetchCategories() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  return await getDatabase(databaseId);
};