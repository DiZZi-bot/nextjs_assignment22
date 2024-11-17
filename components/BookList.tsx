import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
  rank: number;
  publisher: string;
  amazon_product_url: string;
}

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <Card key={book.title} className="overflow-hidden flex flex-col">
          <div className="aspect-[3/4] relative">
            <img
              src={book.book_image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div className="min-h-[3.6rem]">
                <CardTitle className="line-clamp-2">{book.title}</CardTitle>
              </div>
              <Badge className="shrink-0">#{book.rank}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <div className="flex-grow">
              <p className="mb-2 font-semibold">{book.author}</p>
              <p className="text-sm text-muted-foreground mb-2">{book.publisher}</p>
              <p className="text-sm line-clamp-3">{book.description}</p>
            </div>
            <Button 
              className="w-full mt-4 bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              asChild
            >
              <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Buy on Amazon
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}