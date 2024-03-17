"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  title: z.string().min(2,"min 2 word for title").max(100),
  file: z.custom<File | null>((val)=>val instanceof File, "required")
});

const Upload = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="px-10 py-10 w-full ml-[16vw] min-h-[92vh] ">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] font-semibold">Your files</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="">Upload</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload your file here</DialogTitle>
              <DialogDescription className="mt-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>File title</FormLabel>
                          <FormControl>
                            <Input placeholder="file name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="file"
                      render={({ field:{onChange}, ...field }) => (
                        <FormItem>
                          <FormLabel>File</FormLabel>
                          <FormControl>
                            <Input type="file" {...field} 
                            onChange={(e)=>onChange(e.target.files[0])}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {data?.length > 0 ? (
        data.map((data) => {})
      ) : (
        <div className="flex justify-center items-center mt-5">
          <img
            src="/Images/empty.png"
            alt=""
            className="max-w-[300px] mx-auto "
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
