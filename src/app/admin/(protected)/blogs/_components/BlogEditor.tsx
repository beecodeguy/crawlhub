"use client";

import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { ErrorMessage } from "@hookform/error-message"

const BlogFormSchema = z.object({
  title: z.string().min(4),
  content: z.string().min(10),
});

type TBlog = z.infer<typeof BlogFormSchema>;

interface IProps {
  title?: string;
  content?: string;
}

const BlogEditor: React.FC<IProps> = ({ content, title }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TBlog>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: title ?? "",
      content: content ?? "",
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
        <ErrorMessage errors={errors} name="title" />
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
        <ErrorMessage errors={errors} name="content" />
      </div>
      <Button
        className="flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-400 px-3 py-1.5 text-white"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default BlogEditor;
