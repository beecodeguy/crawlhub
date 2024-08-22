"use client";

import React, { useCallback } from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Image,
  Heading1,
  AlignJustify,
  AlignCenter,
  AlignLeft,
} from "lucide-react";

type Props = {
  editor: Editor;
  content: string;
};

const Toolbar = ({ editor }: Props) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const handleTextAlign = (textAlign: string) => {
    if (editor.isActive({ textAlign })) {
      editor.chain().focus().unsetTextAlign().run();
    } else {
      editor.chain().focus().setTextAlign(textAlign).run();
    }
  };

  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleTextAlign("center");
          }}
          className={
            editor.isActive({ textAlign: "center" })
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <AlignCenter className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleTextAlign("justify");
          }}
          className={
            editor.isActive({ textAlign: "justify" })
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <AlignJustify className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <input
          type="color"
          className="h-7 w-7 cursor-pointer"
          onChange={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          data-testid="setColor"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Heading1 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>
        <button
          onClick={addImage}
          className="bg-gray-200 rounded hover:bg-sky-700 p-1"
        >
          <Image className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-sky-700 text-white rounded-lg p-1"
              : "bg-gray-200 rounded hover:bg-sky-700 p-1 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
