type MathConstant = {
    name: string | null;
    symbol: string | null;
    value: number | null;
    units: string | null;
};

const MATH_CONSTANTS: MathConstant[] = [
    { name: "Pi", symbol: "π", value: 3.141592653589793, units: null },
    {
        name: "Euler's number",
        symbol: "e",
        value: 2.718281828459045,
        units: null,
    },
    { name: "Golden ratio", symbol: "φ", value: 1.61803398875, units: null },
    {
        name: "Square root of 2",
        symbol: "√2",
        value: 1.41421356237,
        units: null,
    },
    {
        name: "Square root of 3",
        symbol: "√3",
        value: 1.73205080757,
        units: null,
    },
    {
        name: "Apéry's constant",
        symbol: "ζ(3)",
        value: 1.20205690316,
        units: null,
    },
    {
        name: "Catalan's constant",
        symbol: "G",
        value: 0.915965594,
        units: null,
    },
    {
        name: "Feigenbaum constant δ",
        symbol: "δ",
        value: 4.6692016091,
        units: null,
    },
    {
        name: "Feigenbaum constant α",
        symbol: "α",
        value: 2.502907875,
        units: null,
    },
];
type MathFormulae = {
    name: string | null;
    equation: string | null;
    topic: string | null;
};

const MATH_FORMULAE: MathFormulae[] = [
    // Algebra
    {
        name: "Quadratic formula",
        equation: "x = (-b ± √(b²-4ac)) / 2a",
        topic: "algebra",
    },
    {
        name: "Arithmetic series sum",
        equation: "S_n = n/2 (a_1 + a_n)",
        topic: "algebra",
    },
    {
        name: "Geometric series sum",
        equation: "S_n = a(1 - r^n)/(1 - r)",
        topic: "algebra",
    },
    {
        name: "Binomial theorem",
        equation: "(a+b)^n = Σ (nCk) a^(n-k) b^k",
        topic: "algebra",
    },
    { name: "Permutations", equation: "nPr = n! / (n-r)!", topic: "algebra" },
    {
        name: "Combinations",
        equation: "nCr = n! / (r!(n-r)!)",
        topic: "algebra",
    },

    // Geometry - Triangles
    { name: "Pythagoras theorem", equation: "a² + b² = c²", topic: "geometry" },
    {
        name: "Area of triangle (1/2 base×height)",
        equation: "A = ½ b h",
        topic: "geometry",
    },
    {
        name: "Area of triangle (Heron's formula)",
        equation: "A = √[s(s-a)(s-b)(s-c)]",
        topic: "geometry",
    },
    {
        name: "Triangle area (trig)",
        equation: "A = ½ ab sin C",
        topic: "geometry",
    },
    {
        name: "Centroid",
        equation: "G = ((x1+x2+x3)/3 , (y1+y2+y3)/3)",
        topic: "geometry",
    },
    {
        name: "Circumcenter",
        equation: "Intersection of perpendicular bisectors",
        topic: "geometry",
    },
    {
        name: "Incenter",
        equation: "Intersection of angle bisectors",
        topic: "geometry",
    },
    {
        name: "Orthocenter",
        equation: "Intersection of altitudes",
        topic: "geometry",
    },
    {
        name: "30-60-90 triangle ratios",
        equation: "1 : √3 : 2",
        topic: "geometry",
    },
    {
        name: "45-45-90 triangle ratios",
        equation: "1 : 1 : √2",
        topic: "geometry",
    },

    // Geometry - Circles
    {
        name: "Circumference of circle",
        equation: "C = 2 π r",
        topic: "geometry",
    },
    { name: "Area of circle", equation: "A = π r²", topic: "geometry" },
    {
        name: "Arc length",
        equation: "L = θ r (θ in radians)",
        topic: "geometry",
    },
    { name: "Sector area", equation: "A_sector = ½ r² θ", topic: "geometry" },
    {
        name: "Circle equation",
        equation: "(x-h)² + (y-k)² = r²",
        topic: "coordinate geometry",
    },
    {
        name: "Angle in semicircle",
        equation: "∠ = 90°",
        topic: "circle theorems",
    },
    {
        name: "Tangent-secant theorem",
        equation: "PA² = PT²",
        topic: "circle theorems",
    },
    {
        name: "Cyclic quadrilateral",
        equation: "Opposite angles sum = 180°",
        topic: "circle theorems",
    },
    {
        name: "Angle between chord and tangent",
        equation: "∠ = angle in alternate segment",
        topic: "circle theorems",
    },

    // Geometry - Quadrilaterals
    { name: "Area of rectangle", equation: "A = l × w", topic: "geometry" },
    { name: "Area of square", equation: "A = a²", topic: "geometry" },
    { name: "Area of parallelogram", equation: "A = b × h", topic: "geometry" },
    { name: "Area of rhombus", equation: "A = ½ × d1 × d2", topic: "geometry" },
    { name: "Area of trapezium", equation: "A = ½ (a+b)h", topic: "geometry" },

    // Trigonometry
    {
        name: "Sine rule",
        equation: "a/sin A = b/sin B = c/sin C",
        topic: "trigonometry",
    },
    {
        name: "Cosine rule",
        equation: "c² = a² + b² - 2ab cos C",
        topic: "trigonometry",
    },
    { name: "tan θ", equation: "tan θ = sin θ / cos θ", topic: "trigonometry" },
    {
        name: "Basic trig identities",
        equation: "sin²θ + cos²θ = 1",
        topic: "trigonometry",
    },
    {
        name: "Angle sum formula",
        equation: "sin(A±B) = sinA cosB ± cosA sinB",
        topic: "trigonometry",
    },
    {
        name: "Cosine sum formula",
        equation: "cos(A±B) = cosA cosB ∓ sinA sinB",
        topic: "trigonometry",
    },
    {
        name: "Double angle formulas",
        equation: "sin2A=2sinAcosA, cos2A=cos²A−sin²A",
        topic: "trigonometry",
    },
    {
        name: "Half angle formulas",
        equation: "sin²(A/2) = (1−cosA)/2, cos²(A/2) = (1+cosA)/2",
        topic: "trigonometry",
    },
    {
        name: "Special angles",
        equation: "sin30=½, sin45=√2/2, sin60=√3/2",
        topic: "trigonometry",
    },

    // Vectors
    {
        name: "Magnitude of vector",
        equation: "|v| = √(x² + y² + z²)",
        topic: "vectors",
    },
    { name: "Dot product", equation: "A·B = |A||B| cos θ", topic: "vectors" },
    {
        name: "Cross product",
        equation: "A×B = |A||B| sin θ n̂",
        topic: "vectors",
    },
    { name: "Unit vector", equation: "û = v / |v|", topic: "vectors" },

    // Complex numbers
    { name: "Modulus", equation: "|z| = √(x² + y²)", topic: "complex numbers" },
    {
        name: "Argument",
        equation: "arg(z) = tan⁻¹(y/x)",
        topic: "complex numbers",
    },
    {
        name: "De Moivre",
        equation: "z^n = r^n (cos nθ + i sin nθ)",
        topic: "complex numbers",
    },

    // Coordinate geometry
    {
        name: "Distance formula",
        equation: "d = √((x2-x1)² + (y2-y1)²)",
        topic: "coordinate geometry",
    },
    {
        name: "Midpoint formula",
        equation: "M = ((x1+x2)/2 , (y1+y2)/2)",
        topic: "coordinate geometry",
    },
    {
        name: "Slope formula",
        equation: "m = (y2 - y1)/(x2 - x1)",
        topic: "coordinate geometry",
    },
];

function PhyConstTable({ data }: { data: MathConstant[] }) {
    return (
        <div style={{ marginTop: 40 }}>
            <h1 style={{ textAlign: "center", marginBottom: 20 }}>
                Physical Constants
            </h1>
            <table className="phy-table">
                <thead>
                    <tr>
                        {["Name", "Symbol", "Value", "Units"].map((col) => (
                            <th key={col}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td>{row.name ?? "-"}</td>
                            <td>{row.symbol ?? "-"}</td>
                            <td>{row.value ?? "-"}</td>
                            <td>{row.units ?? "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PhyFormulaTable({ data }: { data: MathFormulae[] }) {
    return (
        <div style={{ marginTop: 40 }}>
            <h1 style={{ textAlign: "center", marginBottom: 20 }}>
                Physics Formulae
            </h1>
            <table className="phy-table">
                <thead>
                    <tr>
                        {["Name", "Equation"].map((col) => (
                            <th key={col}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td>{row.name ?? "-"}</td>
                            <td>{row.equation ?? "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function MathTables() {
    return (
        <div className="container">
            <style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Chakra+Petch:wght@300;500;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.pt-wrap {
  font-family: 'Space Mono', monospace;
  background: #03030a;
  min-height: 100vh;
  color: #eee;
  padding: 16px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-bg {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .75);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fi .18s ease;
}

.modal {
  background: #090912;
  border-radius: 14px;
  padding: 28px 32px;
  width: 360px;
  max-width: 95vw;
  position: relative;
  animation: su .22s cubic-bezier(.22, .68, 0, 1.2);
}

@keyframes fi {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes su {
  from { transform: translateY(18px) scale(.97); opacity: 0; }
  to { transform: none; opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: .6; }
  50% { opacity: 1; }
}

.bar-track {
  height: 4px;
  background: #111128;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 3px;
}

.bar-fill {
  height: 4px;
  border-radius: 2px;
  transition: width .7s cubic-bezier(.22, .68, 0, 1.2);
}

@keyframes pop {
  from { opacity: 0; transform: scale(.7); }
  to { opacity: 1; transform: none; }
}

/* Physics table styles - adapted from chem-table */
.phy-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: 'Space Mono', monospace;
}

.phy-table th,
.phy-table td {
  padding: 6px 4px;
  border-bottom: 1px solid #111;
  font-size: 11px;
  color: #bbb;
}

.phy-table th {
  text-align: left;
  border-bottom: 1px solid #222;
  color: #888;
  text-transform: uppercase;
  font-size: 9px;
}

.phy-table th:first-child,
.phy-table td:first-child {
  width: 70%;
}

.phy-table th:last-child,
.phy-table td:last-child {
  width: 30%;
  text-align: right;
}

@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');

.pt-wrap {
  font-family: 'DM Mono', monospace;
  background: #0c0c1a;
  color: #eee;
  padding: 20px;
}

.chem-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.chem-table th, .chem-table td {
  padding: 6px 4px;
  font-size: 9px;
  text-align: left;
  border-bottom: 1px solid #111;
  color: #bbb;
}

.chem-table th {
  color: #888;
  text-transform: uppercase;
  border-bottom: 1px solid #222;
  font-weight: 500;
}

.modal-bg {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #12122b;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 0 40px #000;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 18px;
  cursor: pointer;
}

.bar-track {
  height: 5px;
  width: 100%;
  background: #1a1a2e;
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #3bc9c9;
  border-radius: 3px;
  transition: width 0.3s ease;
}
            `}</style>

            <PhyConstTable data={MATH_CONSTANTS} />
            <PhyFormulaTable data={MATH_FORMULAE} />
        </div>
    );
}
