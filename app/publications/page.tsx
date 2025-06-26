// app/publications/page.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publications } from "@/lib/data";
import { FileText, Code } from "lucide-react";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Publications</h1>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <p className="text-sm text-muted-foreground pt-2">{pub.authors}</p>
              <p className="text-sm text-muted-foreground">{pub.journal}</p>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                {pub.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="flex space-x-2">
              {pub.links.pdf && (
                <Button asChild variant="outline" size="sm">
                  <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> PDF
                  </a>
                </Button>
              )}
              {pub.links.code && (
                 <Button asChild variant="outline" size="sm">
                   <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                     <Code className="mr-2 h-4 w-4" /> Code
                   </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}