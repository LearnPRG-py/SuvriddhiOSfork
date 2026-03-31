import { SHARED_STYLE } from "./shared_styles";

type PhysConstant = {
    name: string;
    symbol: string;
    value: number;
    units: string;
};

type PhysFormula = {
    name: string;
    equation: string;
    topic: string;
};

const PHYS_CONSTANTS: PhysConstant[] = [
    {
        name: "Speed of light",
        symbol: "c",
        value: 2.99792458e8,
        units: "m s⁻¹",
    },
    {
        name: "Planck constant",
        symbol: "h",
        value: 6.62607015e-34,
        units: "J s",
    },
    {
        name: "Reduced Planck constant",
        symbol: "ħ",
        value: 1.054571817e-34,
        units: "J s",
    },
    {
        name: "Gravitational constant",
        symbol: "G",
        value: 6.6743e-11,
        units: "m³ kg⁻¹ s⁻²",
    },
    {
        name: "Elementary charge",
        symbol: "e",
        value: 1.602176634e-19,
        units: "C",
    },
    { name: "Electron mass", symbol: "mₑ", value: 9.10938356e-31, units: "kg" },
    { name: "Proton mass", symbol: "mₚ", value: 1.6726219e-27, units: "kg" },
    { name: "Neutron mass", symbol: "mₙ", value: 1.6749275e-27, units: "kg" },
    {
        name: "Boltzmann constant",
        symbol: "k_B",
        value: 1.380649e-23,
        units: "J K⁻¹",
    },
    {
        name: "Avogadro constant",
        symbol: "Nₐ",
        value: 6.02214076e23,
        units: "mol⁻¹",
    },
    {
        name: "Gas constant",
        symbol: "R",
        value: 8.314462618,
        units: "J mol⁻¹ K⁻¹",
    },
    {
        name: "Vacuum permittivity",
        symbol: "ε₀",
        value: 8.8541878128e-12,
        units: "F m⁻¹",
    },
    {
        name: "Vacuum permeability",
        symbol: "μ₀",
        value: 1.25663706212e-6,
        units: "N A⁻²",
    },
    {
        name: "Coulomb constant",
        symbol: "kₑ",
        value: 8.9875517923e9,
        units: "N m² C⁻²",
    },
    { name: "Standard gravity", symbol: "g", value: 9.80665, units: "m s⁻²" },
];

const PHYS_FORMULAE: PhysFormula[] = [
    // kinematics
    { name: "Velocity", equation: "v = Δx / Δt", topic: "kinematics" },
    { name: "Acceleration", equation: "a = Δv / Δt", topic: "kinematics" },
    { name: "SUVAT 1", equation: "v = u + at", topic: "kinematics" },
    { name: "SUVAT 2", equation: "s = ut + ½at²", topic: "kinematics" },
    { name: "SUVAT 3", equation: "v² = u² + 2as", topic: "kinematics" },
    { name: "SUVAT 4", equation: "s = (u + v) / 2 · t", topic: "kinematics" },
    // mechanics
    { name: "Newton 2nd law", equation: "F = ma", topic: "mechanics" },
    { name: "Weight", equation: "W = mg", topic: "mechanics" },
    { name: "Momentum", equation: "p = mv", topic: "mechanics" },
    { name: "Impulse", equation: "FΔt = Δp", topic: "mechanics" },
    { name: "Work", equation: "W = Fd cosθ", topic: "mechanics" },
    { name: "Power", equation: "P = W / t = Fv", topic: "mechanics" },
    // energy
    { name: "Kinetic energy", equation: "Eₖ = ½mv²", topic: "energy" },
    { name: "Gravitational PE", equation: "Eₚ = mgh", topic: "energy" },
    { name: "Elastic PE", equation: "E = ½kx²", topic: "energy" },
    // circular & gravitation
    {
        name: "Centripetal force",
        equation: "F = mv² / r",
        topic: "circular motion",
    },
    { name: "Angular velocity", equation: "v = ωr", topic: "circular motion" },
    {
        name: "Gravitational force",
        equation: "F = GMm / r²",
        topic: "gravitation",
    },
    {
        name: "Orbital velocity",
        equation: "v = √(GM / r)",
        topic: "gravitation",
    },
    // waves
    { name: "Wave speed", equation: "v = fλ", topic: "waves" },
    { name: "Period–frequency", equation: "T = 1 / f", topic: "waves" },
    { name: "Intensity", equation: "I = P / A", topic: "waves" },
    { name: "Standing wave", equation: "λ = 2L / n", topic: "waves" },
    // optics
    { name: "Snell's law", equation: "n₁ sinθ₁ = n₂ sinθ₂", topic: "optics" },
    { name: "Refractive index", equation: "n = c / v", topic: "optics" },
    { name: "Lens equation", equation: "1/f = 1/u + 1/v", topic: "optics" },
    { name: "Diffraction grating", equation: "d sinθ = nλ", topic: "optics" },
    // electricity
    { name: "Current", equation: "I = Q / t", topic: "electricity" },
    { name: "Ohm's law", equation: "V = IR", topic: "electricity" },
    { name: "Power", equation: "P = VI = I²R = V²/R", topic: "electricity" },
    { name: "Resistivity", equation: "R = ρL / A", topic: "electricity" },
    {
        name: "Series resistance",
        equation: "R = R₁ + R₂ + …",
        topic: "electricity",
    },
    {
        name: "Parallel resistance",
        equation: "1/R = 1/R₁ + 1/R₂ + …",
        topic: "electricity",
    },
    // electric fields
    {
        name: "Coulomb's law",
        equation: "F = kq₁q₂ / r²",
        topic: "electric fields",
    },
    {
        name: "Electric field",
        equation: "E = F / q = kq / r²",
        topic: "electric fields",
    },
    {
        name: "Electric potential",
        equation: "V = kq / r",
        topic: "electric fields",
    },
    { name: "Capacitance", equation: "C = Q / V", topic: "electric fields" },
    {
        name: "Energy in capacitor",
        equation: "E = ½CV²",
        topic: "electric fields",
    },
    // magnetism & induction
    {
        name: "Magnetic force (charge)",
        equation: "F = qvB sinθ",
        topic: "magnetism",
    },
    {
        name: "Magnetic force (wire)",
        equation: "F = BIL sinθ",
        topic: "magnetism",
    },
    { name: "Magnetic flux", equation: "Φ = BA cosθ", topic: "magnetism" },
    { name: "Faraday's law", equation: "ε = −dΦ / dt", topic: "em induction" },
    {
        name: "Transformer ratio",
        equation: "Vₚ/Vₛ = Nₚ/Nₛ",
        topic: "em induction",
    },
    // thermal
    { name: "Heat capacity", equation: "Q = mcΔT", topic: "thermal" },
    { name: "Latent heat", equation: "Q = mL", topic: "thermal" },
    { name: "Ideal gas law", equation: "PV = nRT", topic: "thermal" },
    { name: "First law of thermo", equation: "ΔU = Q − W", topic: "thermal" },
    { name: "Mean KE of molecule", equation: "E = 3/2 kT", topic: "thermal" },
    // nuclear & quantum
    { name: "Radioactive decay", equation: "N = N₀ e^(−λt)", topic: "nuclear" },
    { name: "Activity", equation: "A = λN", topic: "nuclear" },
    { name: "Half-life", equation: "T½ = ln2 / λ", topic: "nuclear" },
    { name: "Mass–energy", equation: "E = mc²", topic: "nuclear" },
    { name: "Photon energy", equation: "E = hf", topic: "quantum" },
    { name: "de Broglie wavelength", equation: "λ = h / p", topic: "quantum" },
];

// ── grouping helper ────────────────────────────────────────────────────────
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
    kinematics: "#3BC9C9",
    mechanics: "#FF9A3C",
    energy: "#C8E84B",
    "circular motion": "#F783AC",
    gravitation: "#74C0FC",
    waves: "#DA77F2",
    optics: "#51CF66",
    electricity: "#FF6B6B",
    "electric fields": "#FFA8A8",
    magnetism: "#B197FC",
    "em induction": "#FFD43B",
    thermal: "#FF922B",
    nuclear: "#FFA8A8",
    quantum: "#74C0FC",
};

function ConstantsTable({ data }: { data: PhysConstant[] }) {
    return (
        <div className="data-section">
            <div className="section-heading">Physical Constants</div>
            <table className="phy-table">
                <thead>
                    <tr>
                        {["Name", "Symbol", "Value", "Units"].map((h) => (
                            <th key={h}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            style={{ transition: "background .12s" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#0d0d22")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "")
                            }
                        >
                            <td>{row.name}</td>
                            <td style={{ color: "#74C0FC", fontWeight: 700 }}>
                                {row.symbol}
                            </td>
                            <td style={{ color: "#C8E84B" }}>
                                {row.value.toExponential
                                    ? row.value.toExponential(3)
                                    : row.value}
                            </td>
                            <td style={{ color: "#555" }}>{row.units}</td>
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
    rows: PhysFormula[];
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

export default function PhyTables() {
    const grouped = groupBy(PHYS_FORMULAE, "topic");

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
                    Physics — Formula &amp; Constants
                </h1>
                <p
                    style={{
                        fontSize: 9,
                        color: "#2e2e4a",
                        letterSpacing: ".5px",
                    }}
                >
                    Physics Data Booklet · hover rows to highlight
                </p>
            </div>

            <ConstantsTable data={PHYS_CONSTANTS} />

            <div className="data-section">
                <div className="section-heading">Formulae by Topic</div>
                {Object.entries(grouped).map(([topic, rows]) => (
                    <FormulaeSection key={topic} topic={topic} rows={rows} />
                ))}
            </div>
        </div>
    );
}
