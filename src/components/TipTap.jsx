import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../css/tiptap.css";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "active" : ""}
      >
        <b>B</b>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "active" : ""}
      >
        <i>I</i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "active" : ""}
      >
        <s>S</s>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "active" : ""}
      >
        • Lista
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "active" : ""}
      >
        ❝ Cita
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>↺</button>
      <button onClick={() => editor.chain().focus().redo().run()}>↻</button>
    </div>
  );
};

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hola 👋 Escribe algo aquí...</p>",
  });

  return (
    <div className="tiptap-container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="editor" />
    </div>
  );
}
