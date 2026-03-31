import { SHARED_STYLE } from "./shared_styles";

type MathConstant = {
    name: string;
    symbol: string;
    value: number;
    description: string;
};

type MathFormula = {
    name: string;
    equation: string;
    topic: string;
};

const MATH_CONSTANTS: MathConstant[] = [
    {
        name: "Pi",
        symbol: "π",
        value: 3.141592653589793,
        description: "Ratio of circumference to diameter",
    },
    {
        name: "Euler's number",
        symbol: "e",
        value: 2.718281828459045,
        description: "Base of natural logarithm",
    },
    {
        name: "Golden ratio",
        symbol: "φ",
        value: 1.618033988749895,
        description: "(1 + √5) / 2",
    },
    {
        name: "√2",
        symbol: "√2",
        value: 1.41421356237,
        description: "Diagonal of unit square",
    },
    {
        name: "√3",
        symbol: "√3",
        value: 1.73205080757,
        description: "Height of equilateral triangle (side = 2)",
    },
    {
        name: "ln 2",
        symbol: "ln 2",
        value: 0.6931471805599453,
        description: "Natural log of 2",
    },
    {
        name: "Apéry's constant",
        symbol: "ζ(3)",
        value: 1.2020569031595942,
        description: "Σ 1/n³",
    },
    {
        name: "Catalan's constant",
        symbol: "G",
        value: 0.915965594177219,
        description: "Alternating sum of reciprocal odd squares",
    },
    {
        name: "Feigenbaum δ",
        symbol: "δ",
        value: 4.6692016091029906,
        description: "Bifurcation ratio in chaos theory",
    },
    {
        name: "Feigenbaum α",
        symbol: "α",
        value: 2.5029078750958928,
        description: "Scaling ratio in bifurcation diagrams",
    },
];

const MATH_FORMULAE: MathFormula[] = [
    // algebra
    {
        name: "Quadratic formula",
        equation: "x = (−b ± √(b²−4ac)) / 2a",
        topic: "algebra",
    },
    {
        name: "Arithmetic series",
        equation: "Sₙ = n/2 (a₁ + aₙ)",
        topic: "algebra",
    },
    {
        name: "Geometric series",
        equation: "Sₙ = a(1 − rⁿ) / (1 − r)",
        topic: "algebra",
    },
    {
        name: "Infinite geometric",
        equation: "S∞ = a / (1 − r),  |r| < 1",
        topic: "algebra",
    },
    {
        name: "Binomial theorem",
        equation: "(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ",
        topic: "algebra",
    },
    { name: "Permutations", equation: "nPr = n! / (n−r)!", topic: "algebra" },
    { name: "Combinations", equation: "nCr = n! / r!(n−r)!", topic: "algebra" },
    {
        name: "Logarithm change base",
        equation: "log_b a = ln a / ln b",
        topic: "algebra",
    },
    {
        name: "Log product rule",
        equation: "log(xy) = log x + log y",
        topic: "algebra",
    },
    { name: "Log power rule", equation: "log(xⁿ) = n log x", topic: "algebra" },

    // geometry
    { name: "Pythagoras", equation: "a² + b² = c²", topic: "geometry" },
    { name: "Area — triangle", equation: "A = ½bh", topic: "geometry" },
    {
        name: "Area — Heron's",
        equation: "A = √[s(s−a)(s−b)(s−c)]",
        topic: "geometry",
    },
    { name: "Area — trig", equation: "A = ½ ab sinC", topic: "geometry" },
    { name: "Area — rectangle", equation: "A = lw", topic: "geometry" },
    { name: "Area — parallelogram", equation: "A = bh", topic: "geometry" },
    { name: "Area — trapezium", equation: "A = ½(a + b)h", topic: "geometry" },
    { name: "Area — circle", equation: "A = πr²", topic: "geometry" },
    { name: "Arc length", equation: "L = rθ", topic: "geometry" },
    { name: "Sector area", equation: "A = ½r²θ", topic: "geometry" },
    { name: "Volume — sphere", equation: "V = 4/3 πr³", topic: "geometry" },
    { name: "Volume — cylinder", equation: "V = πr²h", topic: "geometry" },
    { name: "Volume — cone", equation: "V = ⅓πr²h", topic: "geometry" },

    // trigonometry
    {
        name: "Sine rule",
        equation: "a/sinA = b/sinB = c/sinC",
        topic: "trigonometry",
    },
    {
        name: "Cosine rule",
        equation: "c² = a² + b² − 2ab cosC",
        topic: "trigonometry",
    },
    {
        name: "tan identity",
        equation: "tanθ = sinθ / cosθ",
        topic: "trigonometry",
    },
    {
        name: "Pythagorean identity",
        equation: "sin²θ + cos²θ = 1",
        topic: "trigonometry",
    },
    {
        name: "sin sum formula",
        equation: "sin(A ± B) = sinA cosB ± cosA sinB",
        topic: "trigonometry",
    },
    {
        name: "cos sum formula",
        equation: "cos(A ± B) = cosA cosB ∓ sinA sinB",
        topic: "trigonometry",
    },
    {
        name: "Double angle — sin",
        equation: "sin 2A = 2 sinA cosA",
        topic: "trigonometry",
    },
    {
        name: "Double angle — cos",
        equation: "cos 2A = cos²A − sin²A",
        topic: "trigonometry",
    },
    {
        name: "Special: sin 30°",
        equation: "sin 30° = ½,  cos 30° = √3/2",
        topic: "trigonometry",
    },
    {
        name: "Special: sin 45°",
        equation: "sin 45° = cos 45° = √2/2",
        topic: "trigonometry",
    },

    // coordinate geometry
    {
        name: "Distance",
        equation: "d = √((x₂−x₁)² + (y₂−y₁)²)",
        topic: "coordinate geometry",
    },
    {
        name: "Midpoint",
        equation: "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
        topic: "coordinate geometry",
    },
    {
        name: "Gradient",
        equation: "m = (y₂ − y₁) / (x₂ − x₁)",
        topic: "coordinate geometry",
    },
    {
        name: "Line equation",
        equation: "y − y₁ = m(x − x₁)",
        topic: "coordinate geometry",
    },
    {
        name: "Circle equation",
        equation: "(x−h)² + (y−k)² = r²",
        topic: "coordinate geometry",
    },

    // vectors
    { name: "Magnitude", equation: "|v| = √(x² + y² + z²)", topic: "vectors" },
    { name: "Dot product", equation: "A · B = |A||B| cosθ", topic: "vectors" },
    {
        name: "Cross product",
        equation: "|A × B| = |A||B| sinθ",
        topic: "vectors",
    },
    { name: "Unit vector", equation: "û = v / |v|", topic: "vectors" },

    // complex numbers
    { name: "Modulus", equation: "|z| = √(x² + y²)", topic: "complex numbers" },
    {
        name: "Argument",
        equation: "arg(z) = tan⁻¹(y / x)",
        topic: "complex numbers",
    },
    {
        name: "Euler's formula",
        equation: "e^(iθ) = cosθ + i sinθ",
        topic: "complex numbers",
    },
    {
        name: "De Moivre's theorem",
        equation: "zⁿ = rⁿ(cos nθ + i sin nθ)",
        topic: "complex numbers",
    },

    // calculus
    {
        name: "Derivative — power",
        equation: "d/dx (xⁿ) = nxⁿ⁻¹",
        topic: "calculus",
    },
    {
        name: "Derivative — product",
        equation: "(uv)' = u'v + uv'",
        topic: "calculus",
    },
    {
        name: "Derivative — quotient",
        equation: "(u/v)' = (u'v − uv') / v²",
        topic: "calculus",
    },
    {
        name: "Derivative — chain",
        equation: "dy/dx = dy/du · du/dx",
        topic: "calculus",
    },
    { name: "Derivative — eˣ", equation: "d/dx (eˣ) = eˣ", topic: "calculus" },
    {
        name: "Derivative — ln x",
        equation: "d/dx (ln x) = 1/x",
        topic: "calculus",
    },
    {
        name: "Integral — power",
        equation: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
        topic: "calculus",
    },
    {
        name: "Integration by parts",
        equation: "∫ u dv = uv − ∫ v du",
        topic: "calculus",
    },
    {
        name: "Fundamental theorem",
        equation: "∫ₐᵇ f dx = F(b) − F(a)",
        topic: "calculus",
    },

    // probability & stats
    {
        name: "Probability",
        equation: "P(A) = n(A) / n(S)",
        topic: "probability",
    },
    { name: "Complement", equation: "P(A') = 1 − P(A)", topic: "probability" },
    {
        name: "Addition rule",
        equation: "P(A∪B) = P(A) + P(B) − P(A∩B)",
        topic: "probability",
    },
    {
        name: "Bayes' theorem",
        equation: "P(A|B) = P(B|A)P(A) / P(B)",
        topic: "probability",
    },
    { name: "Mean", equation: "μ = Σx / n", topic: "probability" },
    { name: "Variance", equation: "σ² = Σ(x − μ)² / n", topic: "probability" },
    {
        name: "Standard deviation",
        equation: "σ = √(Σ(x − μ)² / n)",
        topic: "probability",
    },
];

function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
    return arr.reduce(
        (acc, item) => {
            const k = String(item[key]);
            (acc[k] ??= []).push(item);
            return acc;
        },
        {} as Record<string, T[]>,
    );
}

const TOPIC_COLOR: Record<string, string> = {
    algebra: "#FF9A3C",
    geometry: "#51CF66",
    trigonometry: "#F783AC",
    "coordinate geometry": "#74C0FC",
    vectors: "#3BC9C9",
    "complex numbers": "#DA77F2",
    calculus: "#C8E84B",
    probability: "#FFA8A8",
};

function ConstantsTable({ data }: { data: MathConstant[] }) {
    return (
        <div className="data-section">
            <div className="section-heading">Mathematical Constants</div>
            <table className="phy-table">
                <thead>
                    <tr>
                        {["Name", "Symbol", "Value", "Notes"].map((h) => (
                            <th key={h}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#0d0d22")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "")
                            }
                        >
                            <td>{row.name}</td>
                            <td style={{ color: "#FF9A3C", fontWeight: 700 }}>
                                {row.symbol}
                            </td>
                            <td style={{ color: "#C8E84B" }}>{row.value}</td>
                            <td style={{ color: "#555", fontSize: 10 }}>
                                {row.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function FormulaeSection({
    topic,
    rows,
}: {
    topic: string;
    rows: MathFormula[];
}) {
    const c = TOPIC_COLOR[topic] ?? "#888";
    return (
        <div style={{ marginBottom: 24 }}>
            <div
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                }}
            >
                <div
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: c,
                        boxShadow: `0 0 6px ${c}`,
                    }}
                />
                <span
                    style={{
                        fontSize: 9,
                        color: c,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "'Space Mono'",
                    }}
                >
                    {topic}
                </span>
            </div>
            <table className="phy-table">
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#0d0d22")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "")
                            }
                        >
                            <td style={{ color: "#888", width: "40%" }}>
                                {row.name}
                            </td>
                            <td
                                style={{
                                    color: c,
                                    fontFamily: "'Chakra Petch'",
                                    fontWeight: 500,
                                    letterSpacing: ".3px",
                                }}
                            >
                                {row.equation}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function MathTables() {
    const grouped = groupBy(MATH_FORMULAE, "topic");

    return (
        <div className="pt-wrap">
            <a
                href="/"
                data-discover="true"
                className="hover:text-primary transition-colors ml-[97%] mt-[2%]"
                style={{
                    position: "fixed",
                    top: 16,
                    right: 16,
                    zIndex: 50,
                    display: "inline-flex",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    className="lucide lucide-house"
                >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
            </a>
            <style>{SHARED_STYLE}</style>

            <div style={{ marginBottom: 24, textAlign: "center" }}>
                <h1
                    style={{
                        fontFamily: "'Chakra Petch'",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#eee",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: 4,
                    }}
                >
                    Mathematics — Formulae &amp; Constants
                </h1>
                <p
                    style={{
                        fontSize: 9,
                        color: "#2e2e4a",
                        letterSpacing: ".5px",
                    }}
                >
                    Mathematics · hover rows to highlight
                </p>
            </div>

            <ConstantsTable data={MATH_CONSTANTS} />

            <div className="data-section">
                <div className="section-heading">Formulae by Topic</div>
                {Object.entries(grouped).map(([topic, rows]) => (
                    <FormulaeSection
                        key={topic}
                        topic={topic}
                        rows={rows as MathFormula[]}
                    />
                ))}
            </div>
        </div>
    );
}
