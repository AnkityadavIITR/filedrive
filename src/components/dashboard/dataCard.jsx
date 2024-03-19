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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import Link from "next/link";

function FileCardAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-ellipsis-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <Trash2 strokeWidth={1.25} size={20} className="" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DataCard({ file }) {
  return (
    <Card className="w-[350px]">
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>File</CardTitle>
          <CardDescription>{file.title}</CardDescription>
        </CardHeader>
        <CardHeader>
          <FileCardAction />
        </CardHeader>
      </div>

      <CardFooter className="flex justify-between">
        <a href={file.content} target="_blank" rel="noopener noreferrer">
          <Button>Download</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
