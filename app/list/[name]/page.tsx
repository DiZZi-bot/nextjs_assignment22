async function getBookLists() {
  try {
    const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
    if (!res.ok) throw new Error("Failed to fetch book lists");
    return res.json();
  } catch (error) {
    console.error("Error fetching book lists:", error);
    return { results: [] }; // 에러 발생 시 빈 배열 반환
  }
}

async function getBookList(name: string) {
  try {
    console.log("Fetching book list for:", name);
    const res = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${name}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch book list for ${name}`);
    }
    const data = await res.json();
    console.log(`Fetched book list for ${name}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching book list for ${name}:`, error);
    return { results: { display_name: "Unknown", updated: "", books: [] } };
  }
}

import BookList from "@/components/BookList";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const { results } = await getBookLists();
  return results.map((list: { list_name_encoded: string }) => ({
    name: list.list_name_encoded,
  }));
}

export default async function ListPage({
  params: { name },
}: {
  params: { name: string };
}) {
  console.log("Fetching details for:", name); // check
  const { results } = await getBookList(name);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Lists
        </Link>
        <h1 className="text-4xl font-bold">{results.display_name}</h1>
        <p className="text-muted-foreground">Updated: {results.updated}</p>
      </div>

      <BookList books={results.books} />
    </div>
  );
}
