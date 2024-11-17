import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Library, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About NYT Bestsellers</h1>
        <p className="text-muted-foreground">
          Discover the stories behind the New York Times Bestsellers lists and our mission to connect readers with great books.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-4" />
            <CardTitle>Curated Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We showcase the finest literature across various genres, carefully selected by the New York Times editorial team.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Library className="h-8 w-8 mb-4" />
            <CardTitle>Updated Weekly</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our lists are refreshed weekly to bring you the latest and most popular books in each category.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Award className="h-8 w-8 mb-4" />
            <CardTitle>Trusted Authority</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For over a century, the New York Times Bestsellers list has been the definitive guide for book lovers worldwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}