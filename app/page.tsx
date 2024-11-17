async function getBookLists() {
  console.log("Fetching book lists...");
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  if (!res.ok) {
    throw new Error("Failed to fetch book lists");
  }
  return res.json();
}

import BookCard from "@/components/BookCard";

export default async function Home() {
  console.log("Rendering Home component...");
  const { results } = await getBookLists();
  console.log("Get Book Lists...");

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">NYT Bestseller Lists</h1>
        <p className="text-muted-foreground">
          Explore the New York Times bestseller lists across various categories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((list: any) => (
          <BookCard key={list.list_name_encoded} {...list} />
        ))}
      </div>
    </div>
  );
}
