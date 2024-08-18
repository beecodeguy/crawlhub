"use client";

import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const BlogFormSchema = z.object({
  title: z.string().min(4),
  content: z.string(),
});

type TBlog = z.infer<typeof BlogFormSchema>;

const BlogEditor = () => {
  const { register, control, handleSubmit } = useForm<TBlog>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<TBlog> = async (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Title</Label>
        <Input {...register("title")} />
      </div>
      <div>
        <Label>Content</Label>
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TipTapEditor onChange={onChange} content={value} />
          )}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BlogEditor;
