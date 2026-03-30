type PhysConstant = {
    name: string | null;
    symbol: string | null;
    value: number | null;
    units: string | null;
};
const PHYS_CONSTANTS: PhysConstant[] = [
    {
        name: "Speed of light",
        symbol: "c",
        value: 2.99792458e8,
        units: "m/s",
    },
    {
        name: "Planck constant",
        symbol: "h",
        value: 6.62607015e-34,
        units: "J·s",
    },
    {
        name: "Reduced Planck constant",
        symbol: "ħ",
        value: 1.054571817e-34,
        units: "J·s",
    },
    {
        name: "Gravitational constant",
        symbol: "G",
        value: 6.6743e-11,
        units: "m^3 kg^-1 s^-2",
    },
    {
        name: "Elementary charge",
        symbol: "e",
        value: 1.602176634e-19,
        units: "C",
    },
    {
        name: "Electron mass",
        symbol: "m_e",
        value: 9.10938356e-31,
        units: "kg",
    },
    {
        name: "Proton mass",
        symbol: "m_p",
        value: 1.6726219e-27,
        units: "kg",
    },
    {
        name: "Neutron mass",
        symbol: "m_n",
        value: 1.6749275e-27,
        units: "kg",
    },
    {
        name: "Boltzmann constant",
        symbol: "k_B",
        value: 1.380649e-23,
        units: "J/K",
    },
    {
        name: "Avogadro constant",
        symbol: "N_A",
        value: 6.02214076e23,
        units: "mol^-1",
    },
    {
        name: "Gas constant",
        symbol: "R",
        value: 8.314462618,
        units: "J mol^-1 K^-1",
    },
    {
        name: "Vacuum permittivity",
        symbol: "ε0",
        value: 8.8541878128e-12,
        units: "F/m",
    },
    {
        name: "Vacuum permeability",
        symbol: "μ0",
        value: 1.25663706212e-6,
        units: "N/A^2",
    },
    {
        name: "Coulomb constant",
        symbol: "k_e",
        value: 8.9875517923e9,
        units: "N m^2 C^-2",
    },
    {
        name: "Standard gravity",
        symbol: "g",
        value: 9.80665,
        units: "m/s^2",
    },
];

type PhysFormulae = {
    name: string | null;
    equation: string | null;
    topic: string | null;
};

const PHYS_FORMULAE: PhysFormulae[] = [
    { name: "Velocity", equation: "v = d/t", topic: "kinematics" },
    {
        name: "Average velocity",
        equation: "v = Δx/Δt",
        topic: "kinematics",
    },
    {
        name: "Acceleration",
        equation: "a = Δv/Δt",
        topic: "kinematics",
    },
    { name: "SUVAT 1", equation: "v = u + at", topic: "kinematics" },
    { name: "SUVAT 2", equation: "s = ut + ½at²", topic: "kinematics" },
    { name: "SUVAT 3", equation: "v² = u² + 2as", topic: "kinematics" },
    {
        name: "SUVAT 4",
        equation: "s = (u+v)/2 · t",
        topic: "kinematics",
    },

    {
        name: "Newton second law",
        equation: "F = ma",
        topic: "mechanics",
    },
    { name: "Weight", equation: "W = mg", topic: "mechanics" },
    { name: "Momentum", equation: "p = mv", topic: "mechanics" },
    { name: "Impulse", equation: "FΔt = Δp", topic: "mechanics" },
    { name: "Work", equation: "W = Fd cosθ", topic: "mechanics" },
    { name: "Power", equation: "P = W/t", topic: "mechanics" },
    { name: "Power velocity", equation: "P = Fv", topic: "mechanics" },
    {
        name: "Efficiency",
        equation: "η = useful output/input",
        topic: "mechanics",
    },

    { name: "Kinetic energy", equation: "E_k = ½mv²", topic: "energy" },
    {
        name: "Gravitational potential energy",
        equation: "E_p = mgh",
        topic: "energy",
    },
    {
        name: "Elastic potential energy",
        equation: "E = ½kx²",
        topic: "energy",
    },

    {
        name: "Gravitational force",
        equation: "F = GMm/r²",
        topic: "gravitation",
    },
    {
        name: "Gravitational field",
        equation: "g = GM/r²",
        topic: "gravitation",
    },
    {
        name: "Orbital velocity",
        equation: "v = √(GM/r)",
        topic: "gravitation",
    },
    {
        name: "Centripetal force",
        equation: "F = mv²/r",
        topic: "circular motion",
    },
    {
        name: "Angular velocity",
        equation: "v = ωr",
        topic: "circular motion",
    },
    {
        name: "Angular acceleration",
        equation: "a = v²/r",
        topic: "circular motion",
    },

    { name: "Wave speed", equation: "v = fλ", topic: "waves" },
    { name: "Period frequency", equation: "T = 1/f", topic: "waves" },
    { name: "Intensity", equation: "I = P/A", topic: "waves" },
    {
        name: "Inverse square law",
        equation: "I ∝ 1/r²",
        topic: "waves",
    },
    { name: "Standing wave", equation: "λ = 2L/n", topic: "waves" },

    {
        name: "Snell law",
        equation: "n1 sinθ1 = n2 sinθ2",
        topic: "optics",
    },
    { name: "Refractive index", equation: "n = c/v", topic: "optics" },
    {
        name: "Lens equation",
        equation: "1/f = 1/u + 1/v",
        topic: "optics",
    },
    { name: "Magnification", equation: "m = v/u", topic: "optics" },
    {
        name: "Diffraction grating",
        equation: "d sinθ = nλ",
        topic: "optics",
    },

    {
        name: "Electric current",
        equation: "I = Q/t",
        topic: "electricity",
    },
    {
        name: "Potential difference",
        equation: "V = W/Q",
        topic: "electricity",
    },
    { name: "Ohm law", equation: "V = IR", topic: "electricity" },
    {
        name: "Electrical power",
        equation: "P = VI",
        topic: "electricity",
    },
    {
        name: "Electrical power alt",
        equation: "P = I²R",
        topic: "electricity",
    },
    {
        name: "Electrical power alt2",
        equation: "P = V²/R",
        topic: "electricity",
    },

    { name: "Resistivity", equation: "R = ρL/A", topic: "electricity" },
    {
        name: "Series resistance",
        equation: "R_total = R1 + R2 + ...",
        topic: "electricity",
    },
    {
        name: "Parallel resistance",
        equation: "1/R = 1/R1 + 1/R2",
        topic: "electricity",
    },

    {
        name: "Coulomb law",
        equation: "F = kq1q2/r²",
        topic: "electric fields",
    },
    {
        name: "Electric field",
        equation: "E = F/q",
        topic: "electric fields",
    },
    {
        name: "Electric field point charge",
        equation: "E = kq/r²",
        topic: "electric fields",
    },
    {
        name: "Electric potential",
        equation: "V = kq/r",
        topic: "electric fields",
    },
    {
        name: "Parallel plate field",
        equation: "E = V/d",
        topic: "electric fields",
    },

    {
        name: "Capacitance",
        equation: "C = Q/V",
        topic: "electric fields",
    },
    {
        name: "Parallel plate capacitor",
        equation: "C = εA/d",
        topic: "electric fields",
    },
    {
        name: "Energy capacitor",
        equation: "E = ½CV²",
        topic: "electric fields",
    },

    {
        name: "Magnetic force charge",
        equation: "F = qvB sinθ",
        topic: "magnetism",
    },
    {
        name: "Magnetic force wire",
        equation: "F = BIL sinθ",
        topic: "magnetism",
    },
    {
        name: "Magnetic flux",
        equation: "Φ = BA cosθ",
        topic: "magnetism",
    },
    {
        name: "Biot savart",
        equation: "B = μ0I / 2πr",
        topic: "magnetism",
    },

    {
        name: "Faraday law",
        equation: "ε = - dΦ/dt",
        topic: "electromagnetic induction",
    },
    {
        name: "Transformer ratio",
        equation: "Vp/Vs = Np/Ns",
        topic: "electromagnetic induction",
    },

    { name: "Heat capacity", equation: "Q = mcΔT", topic: "thermal" },
    { name: "Latent heat", equation: "Q = mL", topic: "thermal" },
    { name: "Ideal gas law", equation: "PV = nRT", topic: "thermal" },
    {
        name: "Internal energy change",
        equation: "ΔU = Q - W",
        topic: "thermal",
    },
    {
        name: "Molecular kinetic energy",
        equation: "E = 3/2 kT",
        topic: "thermal",
    },

    {
        name: "Radioactive decay",
        equation: "N = N0 e^(-λt)",
        topic: "nuclear",
    },
    { name: "Activity", equation: "A = λN", topic: "nuclear" },
    { name: "Half life", equation: "T½ = ln2 / λ", topic: "nuclear" },
    { name: "Mass energy", equation: "E = mc²", topic: "nuclear" },
    { name: "Photon energy", equation: "E = hf", topic: "quantum" },
    {
        name: "Photon wavelength",
        equation: "λ = hc/E",
        topic: "quantum",
    },
];

function PhyConstTable({ data }: { data: PhysConstant[] }) {
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

function PhyFormulaTable({ data }: { data: PhysFormulae[] }) {
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

export default function PhyTables() {
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

            <PhyConstTable data={PHYS_CONSTANTS} />
            <PhyFormulaTable data={PHYS_FORMULAE} />
        </div>
    );
}
