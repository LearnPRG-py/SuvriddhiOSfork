// Ported from codefest themes page
import { useNavigate } from "react-router";
import { useStore } from "../store/useStore";

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
        title: "Physics",
        subtitle: "Mechanics, Quantum, and beyond",
        backgroundImage: "/phy.jpg",
        first: true,
    },
    {
        id: "2",
        title: "Chemistry",
        subtitle: "Molecular structures and reactions",
        backgroundImage: "/chem.jpg",
    },
    {
        id: "3",
        title: "Math",
        subtitle: "Calculus, Algebra, and Logic",
        backgroundImage: "/math.jpg",
    },
];

const routeMap: Record<string, string> = {
    "1": "physics",
    "2": "chem",
    "3": "math",
};

export default function DatasheetSelector() {
    const navigate = useNavigate();
    const { setSubject } = useStore();

    const handleSelect = (theme: Theme) => {
        const subjectPath = routeMap[theme.id];
        const subject =
            subjectPath === "chem"
                ? "Chemistry"
                : (subjectPath as "Physics" | "Math");

        setSubject(subject);
        navigate(`/data/${subjectPath}`);
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
