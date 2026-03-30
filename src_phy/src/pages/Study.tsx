// Ported from codefest themes page
import { useNavigate } from "react-router";

interface Theme {
    id: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    first?: boolean;
}

const themes: Theme[] = [
    {
        id: "1",
        title: "Flashcards",
        subtitle: "Create flashcards and revise concepts and topics",
        backgroundImage: "/flashcards.jpg",
        first: true,
    },
    {
        id: "2",
        title: "Notes",
        subtitle: "Takes notes on topics for quick recap and revision",
        backgroundImage: "/notes.jpg",
    },
    {
        id: "3",
        title: "Books",
        subtitle:
            "View existing textbooks from openstack (with more upcoming from sources like NCERT)",
        backgroundImage: "/books.jpg",
    },
];

export default function SubjectSelector() {
    const navigate = useNavigate();

    const handleSelect = (theme: Theme) => {
        if (theme.id == "1") {
            navigate(`/study/flashcards`);
        }
        if (theme.id == "2") {
            navigate(`/study/notes`);
        }
        if (theme.id == "2") {
            navigate(`/study/books`);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <section className="py-20 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-[#1e96a5] mb-6">
                    Explore Subject Data
                </h1>
                <p className="text-xl opacity-80 max-w-2xl mx-auto">
                    Pick your subject to get relevant data metrics pertaining to
                    the subject at hand.
                </p>
            </section>

            <div className="flex flex-col w-full">
                {themes.map((theme) => (
                    <div
                        key={theme.id}
                        onClick={() => handleSelect(theme)}
                        className="group relative w-full cursor-pointer overflow-hidden transition-all duration-500 ease-in-out border-b border-white/5"
                    >
                        <div
                            className="h-[200px] group-hover:h-[300px] flex flex-col items-center justify-center relative bg-cover bg-center transition-all duration-500"
                            style={{
                                backgroundImage: `url(${theme.backgroundImage})`,
                            }}
                        >
                            <div
                                className={`absolute inset-0 bg-black/50 transition-colors duration-400 group-hover:bg-black/20 ${theme.first ? "bg-gradient-to-b from-[#faf5ed1a] to-black/60" : ""}`}
                            />

                            <h2 className="relative z-10 text-4xl md:text-5xl font-black text-[#f7f2ec] tracking-tight">
                                {theme.title}
                            </h2>

                            <p className="relative z-10 text-lg opacity-0 max-h-0 overflow-hidden transition-all duration-400 group-hover:opacity-100 group-hover:max-h-20 group-hover:mt-4 text-center px-6">
                                {theme.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-20" />
        </div>
    );
}
