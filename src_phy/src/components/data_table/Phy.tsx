const PHYS_CONSTANTS: PhysConstant[] = [
    {
        constants: [
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
        ],
    },
];

const PHYS_FORMULAE: PhysFormulae = [
    {
        formulas: [
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
                equation: "N = N0 e^{-λt}",
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
        ],
    },
];
