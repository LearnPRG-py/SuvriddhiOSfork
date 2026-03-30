import { BookOpen, Code2, Table } from "lucide-react";
import { Link } from "react-router";

const buttons = [
    {
        id: 0,
        title: "Learn",
        desc: "Explore interactive simulations and lessons, as well as content to learn the topic",
        icon: <BookOpen size={32} />,
        to: "/learn",
    },
    {
        id: 1,
        title: "Data Table",
        desc: "A directory with data like constants, the periodic table and formulae",
        icon: <Table size={32} />,
        to: "/data",
    },
    {
        id: 2,
        title: "Study Zone",
        desc: "Take and organize your study notes, create flashcards and more",
        icon: <Code2 size={32} />,
        to: "/notes",
    },
];

export default function MenuCards() {
    return (
        <div className="grid gap-6 grid-cols-3">
            {buttons.map((item) => (
                <Link to={item.to} key={item.id} className="menu-card">
                    <div className="menu-card-content">
                        <div className="mb-4 text-4xl">{item.icon}</div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {item.desc}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
