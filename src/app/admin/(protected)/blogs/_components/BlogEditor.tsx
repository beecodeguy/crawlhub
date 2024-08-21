"use client";

import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useRouter } from "next/navigation";
import { revalidatePath } from "@/lib/revalidate";

const BlogFormSchema = z.object({
  title: z.string().min(4),
  content: z.string().min(10),
});

type TBlog = z.infer<typeof BlogFormSchema>;

interface IProps {
  title?: string;
  content?: string;
  blogId?: number;
  id: string;
}

const BlogEditor: React.FC<IProps> = ({ blogId, content, title, id }) => {
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

  const router = useRouter();

  const onSubmit: SubmitHandler<TBlog> = async (d) => {
    try {
      const data = { ...d, userId: +id };
      if (blogId) {
        await axios.patch("/api/blog/" + blogId, data);
      } else {
        await axios.post("/api/blog", data);
      }
      await revalidatePath("/admin/blogs");
      router.push("/admin/blogs");
    } catch (e) {
      //
    }
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
