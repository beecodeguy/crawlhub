"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

import { useState } from "react";

interface IProps {
  onChange: (v: string) => void;
  content: string;
}

const TipTapEditor: React.FC<IProps> = ({ onChange, content }) => {

  const editor = useEditor({
    extensions: [StarterKit, Underline, ImageResize, TextStyle, Image, Color],
    immediatelyRender: true,
    editorProps: {
      attributes: {
        class:
          "border border-gray-400 p-4 min-h-[20rem] max-h-[20rem] overflow-y-auto outline-none prose max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent
        className="cursor-text"
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default TipTapEditor;
