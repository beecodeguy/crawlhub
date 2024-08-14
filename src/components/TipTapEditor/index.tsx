"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image"
import { useState } from "react";

const TiptapEditor = () => {
  const [content, setContent] = useState("");
  

  const editor = useEditor({
    extensions: [StarterKit, Underline, Image],
    editorProps: {
      attributes: {
        class:
          "border border-gray-400 p-4 min-h-[12rem] max-h-[12rem] overflow-y-auto outline-none prose max-w-none",
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
    setContent(newContent);
  };

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default TiptapEditor;
