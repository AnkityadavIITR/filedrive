import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export function DataCard({ file }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>File</CardTitle>
        <CardDescription>{file.title}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <a href={file.content} target="_blank" rel="noopener noreferrer">
          <Button>Download</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
