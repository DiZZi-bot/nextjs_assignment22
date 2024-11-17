import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default function BookCard({
  list_name,
  display_name,
  list_name_encoded,
  oldest_published_date,
  newest_published_date,
  updated,
}: BookCardProps) {
  return (
    <Link href={`/list/${list_name_encoded}`}>
      <Card className="h-full transition-all hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="line-clamp-2">{display_name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="secondary">{updated}</Badge>
            <p className="text-sm text-muted-foreground">
              From {oldest_published_date} to {newest_published_date}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}