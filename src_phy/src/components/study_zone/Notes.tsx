import { useState, useEffect, useRef, useMemo } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
    ChevronLeft,
    ChevronRight,
    Home,
    Bold,
    Italic,
    List,
    Heading,
} from "lucide-react";
import { Link } from "react-router";
import { useStore } from "../../store/useStore";

const notebooks = [
    { key: "physics_notebook_notestsx", label: "Physics Notebook" },
    { key: "chem_notebook_notestsx", label: "Chemistry Notebook" },
    { key: "math_notebook_notestsx", label: "Math Notebook" },
];

const subjectToKey: Record<string, string> = {
    physics: "physics_notebook_notestsx",
    chemistry: "chem_notebook_notestsx",
    math: "math_notebook_notestsx",
};

const defaultContent = {
    type: "doc",
    content: [
        {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "My Notes" }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Start typing here... your notes save automatically.",
                },
            ],
        },
    ],
};

function loadNotebook(key: string) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultContent;
}

export default function Notes() {
    const { subject } = useStore();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const defaultKey = subjectToKey[subject] ?? notebooks[0].key;
    const [currentFile, setCurrentFile] = useState(defaultKey);

    const initialContent = useMemo(
        () => loadNotebook(defaultKey),
        [defaultKey],
    );

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const saveNotebook = (key: string, editorInstance: typeof editor) => {
        if (!editorInstance) return;
        localStorage.setItem(key, JSON.stringify(editorInstance.getJSON()));
    };

    const editor = useEditor({
        extensions: [StarterKit],
        content: initialContent,
        editorProps: {
            attributes: {
                class: "prose prose-invert max-w-none focus:outline-none",
            },
        },
        onUpdate: ({ editor: e }) => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
                saveNotebook(currentFile, e);
            }, 500);
        },
    });

    useEffect(() => {
        if (!editor) return;
        const content = loadNotebook(currentFile);
        editor.commands.setContent(content);
    }, [currentFile, editor]);

    const handleNotebookSwitch = (newKey: string) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        saveNotebook(currentFile, editor);
        setCurrentFile(newKey);
    };

    const currentLabel =
        notebooks.find((n) => n.key === currentFile)?.label ?? currentFile;

    return (
        <div
            className={`flex h-screen bg-background text-foreground theme-${subject}`}
        >
            {sidebarOpen && (
                <div className="w-48 bg-card border-r border-border flex flex-col">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-border">
                        <h2 className="text-sm font-semibold">My Notes</h2>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="opacity-70 hover:opacity-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="flex-1 p-2 overflow-auto">
                        {notebooks.map((nb) => (
                            <button
                                key={nb.key}
                                className={`block w-full text-left text-sm py-1 px-2 rounded hover:bg-muted ${
                                    currentFile === nb.key ? "bg-muted" : ""
                                }`}
                                onClick={() => handleNotebookSwitch(nb.key)}
                            >
                                {nb.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-1 flex-col relative">
                <div className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {!sidebarOpen && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="bg-card rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        )}

                        <Link
                            to="/"
                            className="bg-card rounded px-1 py-1 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            <Home size={16} />
                        </Link>

                        <h1 className="font-semibold text-sm opacity-90">
                            {currentLabel}
                        </h1>
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="border-b border-border p-2 flex gap-2 bg-card">
                        <button
                            onClick={() =>
                                editor?.chain().focus().toggleBold().run()
                            }
                            className={`p-2 rounded hover:bg-secondary ${editor?.isActive("bold") ? "bg-primary text-primary-foreground" : ""}`}
                        >
                            <Bold size={16} />
                        </button>
                        <button
                            onClick={() =>
                                editor?.chain().focus().toggleItalic().run()
                            }
                            className={`p-2 rounded hover:bg-secondary ${editor?.isActive("italic") ? "bg-primary text-primary-foreground" : ""}`}
                        >
                            <Italic size={16} />
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    ?.chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            }
                            className={`p-2 rounded hover:bg-secondary ${editor?.isActive("heading", { level: 2 }) ? "bg-primary text-primary-foreground" : ""}`}
                        >
                            <Heading size={16} />
                        </button>
                        <button
                            onClick={() =>
                                editor?.chain().focus().toggleBulletList().run()
                            }
                            className={`p-2 rounded hover:bg-secondary ${editor?.isActive("bulletList") ? "bg-primary text-primary-foreground" : ""}`}
                        >
                            <List size={16} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        <EditorContent
                            editor={editor}
                            className="prose prose-invert min-h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
