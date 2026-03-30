import { useState } from "react";
import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0f0f0f;
  color: #e8e4dc;
  font-family: 'DM Mono', monospace;
}

.learn {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  width: 260px;
  border-right: 1px solid #222;
  padding: 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-title {
  font-family: 'Fraunces', serif;
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
}

.book-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.book-btn {
  background: none;
  border: 1px solid #2a2a2a;
  color: #666;
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  font-size: 0.75rem;
  text-align: left;
  transition: all 0.18s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.book-btn:hover {
  border-color: #e8e4dc;
  color: #e8e4dc;
  background: #171717;
}

.book-btn.active {
  border-color: #e8e4dc;
  color: #e8e4dc;
  background: #1a1a1a;
}

.viewer-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.viewer-header {
  height: 54px;
  border-bottom: 1px solid #222;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #555;
}

.viewer-frame {
  flex: 1;
}

.placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  font-size: 0.8rem;
}
`;

export default function LearnPage() {
    const [pdf, setPdf] = useState(null);

    const books = [
        { name: "Physics Data Booklet", path: "/pdfs/physics.pdf" },
        { name: "Chemistry Data Booklet", path: "/pdfs/chemistry.pdf" },
        { name: "Math Formula Book", path: "/pdfs/math.pdf" },
        { name: "Engineering Tables", path: "/pdfs/engineering.pdf" },
    ];

    return (
        <>
            <style>{STYLES}</style>

            <div className="learn">
                <div className="sidebar">
                    <div className="sidebar-title">Reference Library</div>

                    <div className="book-grid">
                        {books.map((book) => (
                            <button
                                key={book.path}
                                className={`book-btn ${pdf === book.path ? "active" : ""}`}
                                onClick={() => setPdf(book.path)}
                            >
                                {book.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="viewer-container">
                    <div className="viewer-header">
                        {pdf ? pdf.split("/").pop() : "No document selected"}
                    </div>

                    <div className="viewer-frame">
                        {pdf ? (
                            <PDFViewer
                                config={{
                                    src: pdf,
                                    theme: { preference: "dark" },
                                }}
                            />
                        ) : (
                            <div className="placeholder">
                                Select a document from the library
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
