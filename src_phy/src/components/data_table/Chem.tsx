import { useState } from "react";

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Chakra+Petch:wght@300;500;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
.pt-wrap{font-family:'Space Mono',monospace;background:#03030a;min-height:100vh;color:#eee;padding:16px;overflow-x:auto;display:flex;flex-direction:column;align-items:center;}
.el{cursor:pointer;border-radius:3px;transition:transform .13s ease,box-shadow .13s ease,opacity .15s ease,background .13s ease;position:relative;user-select:none;}
.el:hover{transform:scale(1.18);z-index:20;}
.el.dim{opacity:.15;pointer-events:none;}
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:100;display:flex;align-items:center;justify-content:center;animation:fi .18s ease;}
.modal{background:#090912;border-radius:14px;padding:28px 32px;width:360px;max-width:95vw;position:relative;animation:su .22s cubic-bezier(.22,.68,0,1.2);}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes su{from{transform:translateY(18px) scale(.97);opacity:0}to{transform:none;opacity:1}}
@keyframes pulse{0%,100%{opacity:.6}50%{opacity:1}}
.bar-track{height:4px;background:#111128;border-radius:2px;overflow:hidden;margin-top:3px;}
.bar-fill{height:4px;border-radius:2px;transition:width .7s cubic-bezier(.22,.68,0,1.2);}
.chip{cursor:pointer;border-radius:4px;padding:3px 8px;font-size:9px;letter-spacing:.8px;text-transform:uppercase;transition:opacity .15s,transform .1s;font-family:'Space Mono',monospace;white-space:nowrap;}
.chip:hover{transform:scale(1.05);}
.close-btn{position:absolute;top:14px;right:16px;background:none;border:none;color:#555;font-size:18px;cursor:pointer;transition:color .15s;font-family:inherit;line-height:1;}
.close-btn:hover{color:#eee;}
.el-anim{animation:pop .4s cubic-bezier(.22,.68,0,1.2) both;}
@keyframes pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}
.chem-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.chem-table th,
.chem-table td {
    padding: 6px 4px;
    border-bottom: 1px solid #111;
    font-size: 11px;
}

.chem-table th {
    text-align: left;
    border-bottom: 1px solid #222;
    color: #888;
    text-transform: uppercase;
    font-size: 9px;
}

.chem-table th:first-child,
.chem-table td:first-child {
    width: 70%;
}

.chem-table th:last-child,
.chem-table td:last-child {
    width: 30%;
    text-align: right;
}
`;

const CATS = {
    alkali: { c: "#FF6B6B", g: "rgba(255,107,107,.5)", l: "Alkali Metal" },
    alkaline: { c: "#FF9A3C", g: "rgba(255,154,60,.5)", l: "Alkaline Earth" },
    transition: {
        c: "#3BC9C9",
        g: "rgba(59,201,201,.5)",
        l: "Transition Metal",
    },
    "post-tr": {
        c: "#B197FC",
        g: "rgba(177,151,252,.5)",
        l: "Post-Transition",
    },
    metalloid: { c: "#51CF66", g: "rgba(81,207,102,.5)", l: "Metalloid" },
    nonmetal: { c: "#C8E84B", g: "rgba(200,232,75,.5)", l: "Nonmetal" },
    halogen: { c: "#F783AC", g: "rgba(247,131,172,.5)", l: "Halogen" },
    noble: { c: "#74C0FC", g: "rgba(116,192,252,.5)", l: "Noble Gas" },
    lanthanide: { c: "#DA77F2", g: "rgba(218,119,242,.4)", l: "Lanthanide" },
    actinide: { c: "#FFA8A8", g: "rgba(255,168,168,.4)", l: "Actinide" },
};

const EL = [
    {
        z: 1,
        sym: "H",
        name: "Hydrogen",
        mass: 1.01,
        row: 1,
        col: 1,
        cat: "nonmetal",
        mp: -259.2,
        bp: -252.9,
        ie1: 1312,
        ea: -73,
        en: 2.2,
        ar: 32,
    },
    {
        z: 2,
        sym: "He",
        name: "Helium",
        mass: 4.0,
        row: 1,
        col: 18,
        cat: "noble",
        mp: -268.9,
        bp: null,
        ie1: 2372,
        ea: 0,
        en: null,
        ar: 37,
    },
    {
        z: 3,
        sym: "Li",
        name: "Lithium",
        mass: 6.94,
        row: 2,
        col: 1,
        cat: "alkali",
        mp: 180.5,
        bp: 1342,
        ie1: 520,
        ea: -60,
        en: 1.0,
        ar: 130,
    },
    {
        z: 4,
        sym: "Be",
        name: "Beryllium",
        mass: 9.01,
        row: 2,
        col: 2,
        cat: "alkaline",
        mp: 1287,
        bp: 2468,
        ie1: 900,
        ea: -27,
        en: 1.6,
        ar: 99,
    },
    {
        z: 5,
        sym: "B",
        name: "Boron",
        mass: 10.81,
        row: 2,
        col: 13,
        cat: "metalloid",
        mp: 2077,
        bp: 4000,
        ie1: 801,
        ea: null,
        en: 2.0,
        ar: 84,
    },
    {
        z: 6,
        sym: "C",
        name: "Carbon",
        mass: 12.01,
        row: 2,
        col: 14,
        cat: "nonmetal",
        mp: 3500,
        bp: 4827,
        ie1: 1086,
        ea: -122,
        en: 2.6,
        ar: 75,
    },
    {
        z: 7,
        sym: "N",
        name: "Nitrogen",
        mass: 14.01,
        row: 2,
        col: 15,
        cat: "nonmetal",
        mp: -210,
        bp: -195.8,
        ie1: 1402,
        ea: 0,
        en: 3.0,
        ar: 71,
    },
    {
        z: 8,
        sym: "O",
        name: "Oxygen",
        mass: 16.0,
        row: 2,
        col: 16,
        cat: "nonmetal",
        mp: -218.8,
        bp: -183,
        ie1: 1314,
        ea: -141,
        en: 3.4,
        ar: 64,
    },
    {
        z: 9,
        sym: "F",
        name: "Fluorine",
        mass: 19.0,
        row: 2,
        col: 17,
        cat: "halogen",
        mp: -219.7,
        bp: -188.1,
        ie1: 1681,
        ea: -328,
        en: 4.0,
        ar: 60,
    },
    {
        z: 10,
        sym: "Ne",
        name: "Neon",
        mass: 20.18,
        row: 2,
        col: 18,
        cat: "noble",
        mp: -248.6,
        bp: -246,
        ie1: 2081,
        ea: 0,
        en: null,
        ar: 62,
    },
    {
        z: 11,
        sym: "Na",
        name: "Sodium",
        mass: 22.99,
        row: 3,
        col: 1,
        cat: "alkali",
        mp: 97.79,
        bp: 882.9,
        ie1: 496,
        ea: -53,
        en: 0.9,
        ar: 160,
    },
    {
        z: 12,
        sym: "Mg",
        name: "Magnesium",
        mass: 24.31,
        row: 3,
        col: 2,
        cat: "alkaline",
        mp: 650,
        bp: 1090,
        ie1: 738,
        ea: 0,
        en: 1.3,
        ar: 140,
    },
    {
        z: 13,
        sym: "Al",
        name: "Aluminium",
        mass: 26.98,
        row: 3,
        col: 13,
        cat: "post-tr",
        mp: 660.3,
        bp: 2519,
        ie1: 578,
        ea: -42,
        en: 1.6,
        ar: 124,
    },
    {
        z: 14,
        sym: "Si",
        name: "Silicon",
        mass: 28.09,
        row: 3,
        col: 14,
        cat: "metalloid",
        mp: 1414,
        bp: 3265,
        ie1: 787,
        ea: -134,
        en: 1.9,
        ar: 114,
    },
    {
        z: 15,
        sym: "P",
        name: "Phosphorus",
        mass: 30.97,
        row: 3,
        col: 15,
        cat: "nonmetal",
        mp: 44.15,
        bp: 280.5,
        ie1: 1012,
        ea: -72,
        en: 2.2,
        ar: 109,
    },
    {
        z: 16,
        sym: "S",
        name: "Sulfur",
        mass: 32.07,
        row: 3,
        col: 16,
        cat: "nonmetal",
        mp: 115.2,
        bp: 444.6,
        ie1: 1000,
        ea: -200,
        en: 2.6,
        ar: 104,
    },
    {
        z: 17,
        sym: "Cl",
        name: "Chlorine",
        mass: 35.45,
        row: 3,
        col: 17,
        cat: "halogen",
        mp: -101.5,
        bp: -34.04,
        ie1: 1251,
        ea: -349,
        en: 3.2,
        ar: 100,
    },
    {
        z: 18,
        sym: "Ar",
        name: "Argon",
        mass: 39.95,
        row: 3,
        col: 18,
        cat: "noble",
        mp: -189.3,
        bp: -185.8,
        ie1: 1520,
        ea: 0,
        en: null,
        ar: 101,
    },
    {
        z: 19,
        sym: "K",
        name: "Potassium",
        mass: 39.1,
        row: 4,
        col: 1,
        cat: "alkali",
        mp: 63.38,
        bp: 758.8,
        ie1: 419,
        ea: -48,
        en: 0.8,
        ar: 200,
    },
    {
        z: 20,
        sym: "Ca",
        name: "Calcium",
        mass: 40.08,
        row: 4,
        col: 2,
        cat: "alkaline",
        mp: 842,
        bp: 1484,
        ie1: 590,
        ea: -2,
        en: 1.0,
        ar: 174,
    },
    {
        z: 21,
        sym: "Sc",
        name: "Scandium",
        mass: 44.96,
        row: 4,
        col: 3,
        cat: "transition",
        mp: 1541,
        bp: 2836,
        ie1: 633,
        ea: -18,
        en: 1.4,
        ar: 159,
    },
    {
        z: 22,
        sym: "Ti",
        name: "Titanium",
        mass: 47.87,
        row: 4,
        col: 4,
        cat: "transition",
        mp: 1670,
        bp: 3287,
        ie1: 659,
        ea: -8,
        en: 1.5,
        ar: 148,
    },
    {
        z: 23,
        sym: "V",
        name: "Vanadium",
        mass: 50.94,
        row: 4,
        col: 5,
        cat: "transition",
        mp: 1910,
        bp: 3407,
        ie1: 651,
        ea: -51,
        en: 1.6,
        ar: 144,
    },
    {
        z: 24,
        sym: "Cr",
        name: "Chromium",
        mass: 52.0,
        row: 4,
        col: 6,
        cat: "transition",
        mp: 1907,
        bp: 2671,
        ie1: 653,
        ea: -64,
        en: 1.7,
        ar: 130,
    },
    {
        z: 25,
        sym: "Mn",
        name: "Manganese",
        mass: 54.94,
        row: 4,
        col: 7,
        cat: "transition",
        mp: 1246,
        bp: 2061,
        ie1: 717,
        ea: 0,
        en: 1.6,
        ar: 129,
    },
    {
        z: 26,
        sym: "Fe",
        name: "Iron",
        mass: 55.85,
        row: 4,
        col: 8,
        cat: "transition",
        mp: 1538,
        bp: 2861,
        ie1: 762,
        ea: -15,
        en: 1.8,
        ar: 124,
    },
    {
        z: 27,
        sym: "Co",
        name: "Cobalt",
        mass: 58.93,
        row: 4,
        col: 9,
        cat: "transition",
        mp: 1495,
        bp: 2927,
        ie1: 760,
        ea: -64,
        en: 1.9,
        ar: 118,
    },
    {
        z: 28,
        sym: "Ni",
        name: "Nickel",
        mass: 58.69,
        row: 4,
        col: 10,
        cat: "transition",
        mp: 1455,
        bp: 2913,
        ie1: 737,
        ea: -112,
        en: 1.9,
        ar: 117,
    },
    {
        z: 29,
        sym: "Cu",
        name: "Copper",
        mass: 63.55,
        row: 4,
        col: 11,
        cat: "transition",
        mp: 1085,
        bp: 2560,
        ie1: 745,
        ea: -119,
        en: 1.9,
        ar: 122,
    },
    {
        z: 30,
        sym: "Zn",
        name: "Zinc",
        mass: 65.38,
        row: 4,
        col: 12,
        cat: "transition",
        mp: 419.5,
        bp: 907,
        ie1: 906,
        ea: 0,
        en: 1.6,
        ar: 120,
    },
    {
        z: 31,
        sym: "Ga",
        name: "Gallium",
        mass: 69.72,
        row: 4,
        col: 13,
        cat: "post-tr",
        mp: 29.77,
        bp: 2229,
        ie1: 579,
        ea: -41,
        en: 1.8,
        ar: 123,
    },
    {
        z: 32,
        sym: "Ge",
        name: "Germanium",
        mass: 72.63,
        row: 4,
        col: 14,
        cat: "metalloid",
        mp: 938.2,
        bp: 2833,
        ie1: 762,
        ea: -119,
        en: 2.0,
        ar: 120,
    },
    {
        z: 33,
        sym: "As",
        name: "Arsenic",
        mass: 74.92,
        row: 4,
        col: 15,
        cat: "metalloid",
        mp: 816.8,
        bp: 613,
        ie1: 944,
        ea: -78,
        en: 2.2,
        ar: 120,
    },
    {
        z: 34,
        sym: "Se",
        name: "Selenium",
        mass: 78.96,
        row: 4,
        col: 16,
        cat: "nonmetal",
        mp: 220.8,
        bp: 684.8,
        ie1: 941,
        ea: -195,
        en: 2.6,
        ar: 118,
    },
    {
        z: 35,
        sym: "Br",
        name: "Bromine",
        mass: 79.9,
        row: 4,
        col: 17,
        cat: "halogen",
        mp: -7.05,
        bp: 58.78,
        ie1: 1140,
        ea: -325,
        en: 3.0,
        ar: 117,
    },
    {
        z: 36,
        sym: "Kr",
        name: "Krypton",
        mass: 83.8,
        row: 4,
        col: 18,
        cat: "noble",
        mp: -157.4,
        bp: -153.4,
        ie1: 1351,
        ea: 0,
        en: null,
        ar: 116,
    },
    {
        z: 37,
        sym: "Rb",
        name: "Rubidium",
        mass: 85.47,
        row: 5,
        col: 1,
        cat: "alkali",
        mp: 39.3,
        bp: 687.8,
        ie1: 403,
        ea: -47,
        en: 0.8,
        ar: 215,
    },
    {
        z: 38,
        sym: "Sr",
        name: "Strontium",
        mass: 87.62,
        row: 5,
        col: 2,
        cat: "alkaline",
        mp: 768.8,
        bp: 1377,
        ie1: 549,
        ea: -5,
        en: 1.0,
        ar: 190,
    },
    {
        z: 39,
        sym: "Y",
        name: "Yttrium",
        mass: 88.91,
        row: 5,
        col: 3,
        cat: "transition",
        mp: 1522,
        bp: 3345,
        ie1: 600,
        ea: -30,
        en: 1.2,
        ar: 176,
    },
    {
        z: 40,
        sym: "Zr",
        name: "Zirconium",
        mass: 91.22,
        row: 5,
        col: 4,
        cat: "transition",
        mp: 1854,
        bp: 4406,
        ie1: 640,
        ea: -41,
        en: 1.3,
        ar: 164,
    },
    {
        z: 41,
        sym: "Nb",
        name: "Niobium",
        mass: 92.91,
        row: 5,
        col: 5,
        cat: "transition",
        mp: 2477,
        bp: 4741,
        ie1: 652,
        ea: -88,
        en: 1.6,
        ar: 156,
    },
    {
        z: 42,
        sym: "Mo",
        name: "Molybdenum",
        mass: 95.96,
        row: 5,
        col: 6,
        cat: "transition",
        mp: 2622,
        bp: 4639,
        ie1: 684,
        ea: -72,
        en: 2.2,
        ar: 146,
    },
    {
        z: 43,
        sym: "Tc",
        name: "Technetium",
        mass: 98,
        row: 5,
        col: 7,
        cat: "transition",
        mp: 2157,
        bp: 4262,
        ie1: 702,
        ea: -53,
        en: 2.1,
        ar: 138,
    },
    {
        z: 44,
        sym: "Ru",
        name: "Ruthenium",
        mass: 101.07,
        row: 5,
        col: 8,
        cat: "transition",
        mp: 2333,
        bp: 4147,
        ie1: 710,
        ea: -101,
        en: 2.2,
        ar: 136,
    },
    {
        z: 45,
        sym: "Rh",
        name: "Rhodium",
        mass: 102.91,
        row: 5,
        col: 9,
        cat: "transition",
        mp: 1963,
        bp: 3695,
        ie1: 720,
        ea: -110,
        en: 2.3,
        ar: 134,
    },
    {
        z: 46,
        sym: "Pd",
        name: "Palladium",
        mass: 106.42,
        row: 5,
        col: 10,
        cat: "transition",
        mp: 1555,
        bp: 2963,
        ie1: 804,
        ea: -54,
        en: 2.2,
        ar: 130,
    },
    {
        z: 47,
        sym: "Ag",
        name: "Silver",
        mass: 107.87,
        row: 5,
        col: 11,
        cat: "transition",
        mp: 961.8,
        bp: 2162,
        ie1: 731,
        ea: -126,
        en: 1.9,
        ar: 136,
    },
    {
        z: 48,
        sym: "Cd",
        name: "Cadmium",
        mass: 112.41,
        row: 5,
        col: 12,
        cat: "transition",
        mp: 321.1,
        bp: 766.8,
        ie1: 868,
        ea: 0,
        en: 1.7,
        ar: 140,
    },
    {
        z: 49,
        sym: "In",
        name: "Indium",
        mass: 114.82,
        row: 5,
        col: 13,
        cat: "post-tr",
        mp: 156.6,
        bp: 2027,
        ie1: 558,
        ea: -29,
        en: 1.8,
        ar: 142,
    },
    {
        z: 50,
        sym: "Sn",
        name: "Tin",
        mass: 118.71,
        row: 5,
        col: 14,
        cat: "post-tr",
        mp: 231.9,
        bp: 2586,
        ie1: 709,
        ea: -107,
        en: 2.0,
        ar: 140,
    },
    {
        z: 51,
        sym: "Sb",
        name: "Antimony",
        mass: 121.76,
        row: 5,
        col: 15,
        cat: "metalloid",
        mp: 630.6,
        bp: 1587,
        ie1: 831,
        ea: -101,
        en: 2.0,
        ar: 140,
    },
    {
        z: 52,
        sym: "Te",
        name: "Tellurium",
        mass: 127.6,
        row: 5,
        col: 16,
        cat: "metalloid",
        mp: 449.5,
        bp: 987.8,
        ie1: 869,
        ea: -190,
        en: 2.1,
        ar: 137,
    },
    {
        z: 53,
        sym: "I",
        name: "Iodine",
        mass: 126.9,
        row: 5,
        col: 17,
        cat: "halogen",
        mp: 113.7,
        bp: 184.4,
        ie1: 1008,
        ea: -295,
        en: 2.7,
        ar: 136,
    },
    {
        z: 54,
        sym: "Xe",
        name: "Xenon",
        mass: 131.29,
        row: 5,
        col: 18,
        cat: "noble",
        mp: -111.8,
        bp: -108.1,
        ie1: 1170,
        ea: 0,
        en: null,
        ar: 136,
    },
    {
        z: 55,
        sym: "Cs",
        name: "Caesium",
        mass: 132.91,
        row: 6,
        col: 1,
        cat: "alkali",
        mp: 28.44,
        bp: 670.8,
        ie1: 376,
        ea: -46,
        en: 0.8,
        ar: 238,
    },
    {
        z: 56,
        sym: "Ba",
        name: "Barium",
        mass: 137.33,
        row: 6,
        col: 2,
        cat: "alkaline",
        mp: 725,
        bp: 1845,
        ie1: 503,
        ea: -14,
        en: 0.9,
        ar: 206,
    },
    {
        z: 57,
        sym: "La",
        name: "Lanthanum",
        mass: 138.91,
        row: 6,
        col: 3,
        cat: "lanthanide",
        mp: 920,
        bp: 3464,
        ie1: 538,
        ea: -45,
        en: 1.1,
        ar: 194,
    },
    {
        z: 72,
        sym: "Hf",
        name: "Hafnium",
        mass: 178.49,
        row: 6,
        col: 4,
        cat: "transition",
        mp: 2233,
        bp: 4600,
        ie1: 659,
        ea: -1,
        en: 1.3,
        ar: 164,
    },
    {
        z: 73,
        sym: "Ta",
        name: "Tantalum",
        mass: 180.95,
        row: 6,
        col: 5,
        cat: "transition",
        mp: 3017,
        bp: 5455,
        ie1: 728,
        ea: -31,
        en: 1.5,
        ar: 158,
    },
    {
        z: 74,
        sym: "W",
        name: "Tungsten",
        mass: 183.84,
        row: 6,
        col: 6,
        cat: "transition",
        mp: 3414,
        bp: 5555,
        ie1: 759,
        ea: -79,
        en: 1.7,
        ar: 150,
    },
    {
        z: 75,
        sym: "Re",
        name: "Rhenium",
        mass: 186.21,
        row: 6,
        col: 7,
        cat: "transition",
        mp: 3453,
        bp: 5900,
        ie1: 756,
        ea: -14,
        en: 1.9,
        ar: 141,
    },
    {
        z: 76,
        sym: "Os",
        name: "Osmium",
        mass: 190.23,
        row: 6,
        col: 8,
        cat: "transition",
        mp: 3033,
        bp: 5008,
        ie1: 814,
        ea: -106,
        en: 2.2,
        ar: 136,
    },
    {
        z: 77,
        sym: "Ir",
        name: "Iridium",
        mass: 192.22,
        row: 6,
        col: 9,
        cat: "transition",
        mp: 2446,
        bp: 4428,
        ie1: 865,
        ea: -151,
        en: 2.2,
        ar: 132,
    },
    {
        z: 78,
        sym: "Pt",
        name: "Platinum",
        mass: 195.08,
        row: 6,
        col: 10,
        cat: "transition",
        mp: 1768,
        bp: 3825,
        ie1: 864,
        ea: -205,
        en: 2.2,
        ar: 130,
    },
    {
        z: 79,
        sym: "Au",
        name: "Gold",
        mass: 196.97,
        row: 6,
        col: 11,
        cat: "transition",
        mp: 1064,
        bp: 2836,
        ie1: 890,
        ea: -223,
        en: 2.4,
        ar: 130,
    },
    {
        z: 80,
        sym: "Hg",
        name: "Mercury",
        mass: 200.59,
        row: 6,
        col: 12,
        cat: "transition",
        mp: -38.83,
        bp: 356.6,
        ie1: 1007,
        ea: 0,
        en: 1.9,
        ar: 132,
    },
    {
        z: 81,
        sym: "Tl",
        name: "Thallium",
        mass: 204.38,
        row: 6,
        col: 13,
        cat: "post-tr",
        mp: 303.8,
        bp: 1473,
        ie1: 589,
        ea: -36,
        en: 1.8,
        ar: 144,
    },
    {
        z: 82,
        sym: "Pb",
        name: "Lead",
        mass: 207.2,
        row: 6,
        col: 14,
        cat: "post-tr",
        mp: 327.5,
        bp: 1749,
        ie1: 716,
        ea: -35,
        en: 1.8,
        ar: 145,
    },
    {
        z: 83,
        sym: "Bi",
        name: "Bismuth",
        mass: 208.98,
        row: 6,
        col: 15,
        cat: "post-tr",
        mp: 271.4,
        bp: 1564,
        ie1: 703,
        ea: -91,
        en: 1.9,
        ar: 150,
    },
    {
        z: 84,
        sym: "Po",
        name: "Polonium",
        mass: 209,
        row: 6,
        col: 16,
        cat: "metalloid",
        mp: 253.8,
        bp: 962,
        ie1: 812,
        ea: -183,
        en: 2.0,
        ar: 142,
    },
    {
        z: 85,
        sym: "At",
        name: "Astatine",
        mass: 210,
        row: 6,
        col: 17,
        cat: "halogen",
        mp: 301.8,
        bp: 336.8,
        ie1: 869,
        ea: -270,
        en: 2.2,
        ar: 148,
    },
    {
        z: 86,
        sym: "Rn",
        name: "Radon",
        mass: 222,
        row: 6,
        col: 18,
        cat: "noble",
        mp: -71.15,
        bp: -61.85,
        ie1: 1037,
        ea: 0,
        en: null,
        ar: 146,
    },
    {
        z: 87,
        sym: "Fr",
        name: "Francium",
        mass: 223,
        row: 7,
        col: 1,
        cat: "alkali",
        mp: 27,
        bp: 676.8,
        ie1: 393,
        ea: -47,
        en: 0.7,
        ar: 242,
    },
    {
        z: 88,
        sym: "Ra",
        name: "Radium",
        mass: 226,
        row: 7,
        col: 2,
        cat: "alkaline",
        mp: 699.8,
        bp: 1140,
        ie1: 509,
        ea: -10,
        en: 0.9,
        ar: 211,
    },
    {
        z: 89,
        sym: "Ac",
        name: "Actinium",
        mass: 227,
        row: 7,
        col: 3,
        cat: "actinide",
        mp: 1050,
        bp: 3200,
        ie1: 499,
        ea: -34,
        en: 1.1,
        ar: 201,
    },
    {
        z: 104,
        sym: "Rf",
        name: "Rutherfordium",
        mass: 267,
        row: 7,
        col: 4,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 105,
        sym: "Db",
        name: "Dubnium",
        mass: 268,
        row: 7,
        col: 5,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 106,
        sym: "Sg",
        name: "Seaborgium",
        mass: 269,
        row: 7,
        col: 6,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 107,
        sym: "Bh",
        name: "Bohrium",
        mass: 270,
        row: 7,
        col: 7,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 108,
        sym: "Hs",
        name: "Hassium",
        mass: 269,
        row: 7,
        col: 8,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 109,
        sym: "Mt",
        name: "Meitnerium",
        mass: 278,
        row: 7,
        col: 9,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 110,
        sym: "Ds",
        name: "Darmstadtium",
        mass: 281,
        row: 7,
        col: 10,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 111,
        sym: "Rg",
        name: "Roentgenium",
        mass: 281,
        row: 7,
        col: 11,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 112,
        sym: "Cn",
        name: "Copernicium",
        mass: 285,
        row: 7,
        col: 12,
        cat: "transition",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 113,
        sym: "Nh",
        name: "Nihonium",
        mass: 286,
        row: 7,
        col: 13,
        cat: "post-tr",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 114,
        sym: "Fl",
        name: "Flerovium",
        mass: 289,
        row: 7,
        col: 14,
        cat: "post-tr",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 115,
        sym: "Mc",
        name: "Moscovium",
        mass: 288,
        row: 7,
        col: 15,
        cat: "post-tr",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 116,
        sym: "Lv",
        name: "Livermorium",
        mass: 293,
        row: 7,
        col: 16,
        cat: "post-tr",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 117,
        sym: "Ts",
        name: "Tennessine",
        mass: 294,
        row: 7,
        col: 17,
        cat: "halogen",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    {
        z: 118,
        sym: "Og",
        name: "Oganesson",
        mass: 294,
        row: 7,
        col: 18,
        cat: "noble",
        mp: null,
        bp: null,
        ie1: null,
        ea: null,
        en: null,
        ar: null,
    },
    // Lanthanides row 8
    {
        z: 58,
        sym: "Ce",
        name: "Cerium",
        mass: 140.12,
        row: 8,
        col: 4,
        cat: "lanthanide",
        mp: 795,
        bp: 3433,
        ie1: 534,
        ea: -63,
        en: 1.1,
        ar: 184,
    },
    {
        z: 59,
        sym: "Pr",
        name: "Praseodymium",
        mass: 140.91,
        row: 8,
        col: 5,
        cat: "lanthanide",
        mp: 935,
        bp: 3510,
        ie1: 528,
        ea: -93,
        en: 1.1,
        ar: 190,
    },
    {
        z: 60,
        sym: "Nd",
        name: "Neodymium",
        mass: 144.24,
        row: 8,
        col: 6,
        cat: "lanthanide",
        mp: 1024,
        bp: 3074,
        ie1: 533,
        ea: -185,
        en: 1.1,
        ar: 188,
    },
    {
        z: 61,
        sym: "Pm",
        name: "Promethium",
        mass: 145,
        row: 8,
        col: 7,
        cat: "lanthanide",
        mp: 1042,
        bp: 2730,
        ie1: 539,
        ea: null,
        en: 1.2,
        ar: 186,
    },
    {
        z: 62,
        sym: "Sm",
        name: "Samarium",
        mass: 150.36,
        row: 8,
        col: 8,
        cat: "lanthanide",
        mp: 1072,
        bp: 1791,
        ie1: 545,
        ea: null,
        en: 1.2,
        ar: 185,
    },
    {
        z: 63,
        sym: "Eu",
        name: "Europium",
        mass: 151.96,
        row: 8,
        col: 9,
        cat: "lanthanide",
        mp: 826,
        bp: 1596,
        ie1: 547,
        ea: -83,
        en: 1.2,
        ar: 183,
    },
    {
        z: 64,
        sym: "Gd",
        name: "Gadolinium",
        mass: 157.25,
        row: 8,
        col: 10,
        cat: "lanthanide",
        mp: 1313,
        bp: 3273,
        ie1: 593,
        ea: null,
        en: 1.2,
        ar: 182,
    },
    {
        z: 65,
        sym: "Tb",
        name: "Terbium",
        mass: 158.93,
        row: 8,
        col: 11,
        cat: "lanthanide",
        mp: 1360,
        bp: 3230,
        ie1: 566,
        ea: -112,
        en: 1.2,
        ar: 181,
    },
    {
        z: 66,
        sym: "Dy",
        name: "Dysprosium",
        mass: 162.5,
        row: 8,
        col: 12,
        cat: "lanthanide",
        mp: 1410,
        bp: 2567,
        ie1: 573,
        ea: null,
        en: 1.3,
        ar: 180,
    },
    {
        z: 67,
        sym: "Ho",
        name: "Holmium",
        mass: 164.93,
        row: 8,
        col: 13,
        cat: "lanthanide",
        mp: 1472,
        bp: 2694,
        ie1: 581,
        ea: null,
        en: 1.3,
        ar: 179,
    },
    {
        z: 68,
        sym: "Er",
        name: "Erbium",
        mass: 167.26,
        row: 8,
        col: 14,
        cat: "lanthanide",
        mp: 1529,
        bp: 2900,
        ie1: 589,
        ea: null,
        en: 1.3,
        ar: 177,
    },
    {
        z: 69,
        sym: "Tm",
        name: "Thulium",
        mass: 168.93,
        row: 8,
        col: 15,
        cat: "lanthanide",
        mp: 1545,
        bp: 1950,
        ie1: 597,
        ea: -99,
        en: 1.3,
        ar: 177,
    },
    {
        z: 70,
        sym: "Yb",
        name: "Ytterbium",
        mass: 173.05,
        row: 8,
        col: 16,
        cat: "lanthanide",
        mp: 824,
        bp: 1194,
        ie1: 603,
        ea: 2,
        en: 1.0,
        ar: 178,
    },
    {
        z: 71,
        sym: "Lu",
        name: "Lutetium",
        mass: 174.97,
        row: 8,
        col: 17,
        cat: "lanthanide",
        mp: 1663,
        bp: 3402,
        ie1: 524,
        ea: -33,
        en: 1.3,
        ar: 174,
    },
    // Actinides row 9
    {
        z: 90,
        sym: "Th",
        name: "Thorium",
        mass: 232.04,
        row: 9,
        col: 4,
        cat: "actinide",
        mp: 1750,
        bp: 4788,
        ie1: 609,
        ea: null,
        en: 1.3,
        ar: 190,
    },
    {
        z: 91,
        sym: "Pa",
        name: "Protactinium",
        mass: 231.04,
        row: 9,
        col: 5,
        cat: "actinide",
        mp: 1572,
        bp: 4000,
        ie1: 568,
        ea: null,
        en: 1.5,
        ar: 184,
    },
    {
        z: 92,
        sym: "U",
        name: "Uranium",
        mass: 238.03,
        row: 9,
        col: 6,
        cat: "actinide",
        mp: 1135,
        bp: 3818,
        ie1: 598,
        ea: null,
        en: 1.7,
        ar: 183,
    },
    {
        z: 93,
        sym: "Np",
        name: "Neptunium",
        mass: 237,
        row: 9,
        col: 7,
        cat: "actinide",
        mp: 637,
        bp: 3900,
        ie1: 605,
        ea: null,
        en: 1.3,
        ar: 180,
    },
    {
        z: 94,
        sym: "Pu",
        name: "Plutonium",
        mass: 244,
        row: 9,
        col: 8,
        cat: "actinide",
        mp: 640,
        bp: 3230,
        ie1: 581,
        ea: null,
        en: 1.3,
        ar: 180,
    },
    {
        z: 95,
        sym: "Am",
        name: "Americium",
        mass: 243,
        row: 9,
        col: 9,
        cat: "actinide",
        mp: 1176,
        bp: 2067,
        ie1: 576,
        ea: null,
        en: 1.3,
        ar: 173,
    },
    {
        z: 96,
        sym: "Cm",
        name: "Curium",
        mass: 247,
        row: 9,
        col: 10,
        cat: "actinide",
        mp: 1340,
        bp: 3110,
        ie1: 578,
        ea: null,
        en: 1.3,
        ar: 168,
    },
    {
        z: 97,
        sym: "Bk",
        name: "Berkelium",
        mass: 247,
        row: 9,
        col: 11,
        cat: "actinide",
        mp: 986,
        bp: 2623,
        ie1: 598,
        ea: null,
        en: null,
        ar: 168,
    },
    {
        z: 98,
        sym: "Cf",
        name: "Californium",
        mass: 251,
        row: 9,
        col: 12,
        cat: "actinide",
        mp: 900,
        bp: null,
        ie1: 606,
        ea: null,
        en: null,
        ar: 168,
    },
    {
        z: 99,
        sym: "Es",
        name: "Einsteinium",
        mass: 252,
        row: 9,
        col: 13,
        cat: "actinide",
        mp: 860,
        bp: null,
        ie1: 619,
        ea: null,
        en: null,
        ar: 165,
    },
    {
        z: 100,
        sym: "Fm",
        name: "Fermium",
        mass: 257,
        row: 9,
        col: 14,
        cat: "actinide",
        mp: null,
        bp: null,
        ie1: 627,
        ea: null,
        en: null,
        ar: 167,
    },
    {
        z: 101,
        sym: "Md",
        name: "Mendelevium",
        mass: 258,
        row: 9,
        col: 15,
        cat: "actinide",
        mp: 827,
        bp: null,
        ie1: 635,
        ea: null,
        en: null,
        ar: 173,
    },
    {
        z: 102,
        sym: "No",
        name: "Nobelium",
        mass: 259,
        row: 9,
        col: 16,
        cat: "actinide",
        mp: null,
        bp: null,
        ie1: 642,
        ea: null,
        en: null,
        ar: 176,
    },
    {
        z: 103,
        sym: "Lr",
        name: "Lawrencium",
        mass: 262,
        row: 9,
        col: 17,
        cat: "actinide",
        mp: null,
        bp: null,
        ie1: 473,
        ea: null,
        en: null,
        ar: 161,
    },
];

const CW = 44,
    CH = 50,
    GAP = 2;
const fmt = (v, u = "") => (v === null || v === undefined ? "—" : `${v}${u}`);

function DataBar({ label, value, max, unit, color }) {
    const pct =
        value != null && max ? Math.min(100, (Math.abs(value) / max) * 100) : 0;
    return (
        <div style={{ marginBottom: 10 }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 3,
                }}
            >
                <span
                    style={{
                        fontSize: 9,
                        color: "#555",
                        textTransform: "uppercase",
                        letterSpacing: ".6px",
                    }}
                >
                    {label}
                </span>
                <span style={{ fontSize: 11, color: "#bbb" }}>
                    {fmt(value, unit)}
                </span>
            </div>
            <div className="bar-track">
                <div
                    className="bar-fill"
                    style={{ width: `${pct}%`, background: color }}
                />
            </div>
        </div>
    );
}

function Modal({ el, onClose }) {
    const cat = CATS[el.cat];
    const c = cat.c;
    return (
        <div className="modal-bg" onClick={onClose}>
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
                style={{
                    border: `1px solid ${c}33`,
                    boxShadow: `0 0 40px ${cat.g}, 0 0 0 1px ${c}22`,
                }}
            >
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        marginBottom: 20,
                    }}
                >
                    <div
                        style={{
                            width: 72,
                            height: 80,
                            background: `${c}14`,
                            border: `2px solid ${c}55`,
                            borderRadius: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: `0 0 18px ${cat.g}`,
                        }}
                    >
                        <span style={{ fontSize: 9, color: c, opacity: 0.7 }}>
                            {el.z}
                        </span>
                        <span
                            style={{
                                fontSize: 28,
                                fontWeight: 700,
                                color: c,
                                fontFamily: "'Chakra Petch'",
                                lineHeight: 1.1,
                            }}
                        >
                            {el.sym}
                        </span>
                        <span style={{ fontSize: 7.5, color: "#666" }}>
                            {el.mass}
                        </span>
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: 20,
                                fontWeight: 700,
                                color: "#eee",
                                fontFamily: "'Chakra Petch'",
                                lineHeight: 1.2,
                            }}
                        >
                            {el.name}
                        </div>
                        <div style={{ marginTop: 5 }}>
                            <span
                                style={{
                                    background: `${c}22`,
                                    border: `1px solid ${c}55`,
                                    color: c,
                                    borderRadius: 4,
                                    padding: "2px 8px",
                                    fontSize: 9,
                                    textTransform: "uppercase",
                                    letterSpacing: ".7px",
                                }}
                            >
                                {cat.l}
                            </span>
                        </div>
                        <div
                            style={{
                                marginTop: 8,
                                fontSize: 10,
                                color: "#555",
                                lineHeight: 1.7,
                            }}
                        >
                            <span>
                                Period {el.row > 7 ? "f-block" : el.row}
                            </span>
                            {el.col && <span> · Group {el.col}</span>}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        background: `linear-gradient(90deg,transparent,${c}44,transparent)`,
                        marginBottom: 18,
                    }}
                />

                {/* Data bars */}
                <DataBar
                    label="1st Ionisation Energy"
                    value={el.ie1}
                    max={2372}
                    unit=" kJ mol⁻¹"
                    color={c}
                />
                <DataBar
                    label="Electronegativity (Pauling)"
                    value={el.en}
                    max={4.0}
                    unit=""
                    color={c}
                />
                <DataBar
                    label="Atomic Radius"
                    value={el.ar}
                    max={242}
                    unit=" pm"
                    color={c}
                />
                <DataBar
                    label="Electron Affinity"
                    value={el.ea != null ? Math.abs(el.ea) : null}
                    max={349}
                    unit={
                        el.ea != null
                            ? el.ea < 0
                                ? " kJ mol⁻¹"
                                : " kJ mol⁻¹"
                            : ""
                    }
                    color={c}
                />

                {/* Temp row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 10,
                        marginTop: 4,
                    }}
                >
                    {[
                        ["Melting Point", el.mp, " °C"],
                        ["Boiling Point", el.bp, " °C"],
                    ].map(([l, v, u]) => (
                        <div
                            key={l}
                            style={{
                                background: "#0d0d1f",
                                borderRadius: 6,
                                padding: "9px 12px",
                                border: `1px solid ${c}1a`,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 8.5,
                                    color: "#444",
                                    textTransform: "uppercase",
                                    letterSpacing: ".6px",
                                    marginBottom: 4,
                                }}
                            >
                                {l}
                            </div>
                            <div
                                style={{
                                    fontSize: 14,
                                    color: v != null ? "#ddd" : "#333",
                                    fontWeight: v != null ? 700 : 400,
                                }}
                            >
                                {fmt(v, u)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: 16,
                        fontSize: 8.5,
                        color: "#2a2a45",
                        textAlign: "right",
                        letterSpacing: ".4px",
                    }}
                >
                    Chemistry data
                </div>
            </div>
        </div>
    );
}

function ElCell({ el, onClick, filterCat }) {
    const [hov, setHov] = useState(false);
    const cat = CATS[el.cat];
    const dimmed = filterCat && filterCat !== el.cat;
    const delay = `${el.z * 4}ms`;

    return (
        <div
            className={`el el-anim${dimmed ? " dim" : ""}`}
            style={{
                width: CW,
                height: CH,
                animationDelay: delay,
                background: hov ? `${cat.c}1a` : "#0c0c1a",
                border: `1px solid ${hov ? cat.c : "#ffffff0d"}`,
                boxShadow: hov
                    ? `0 0 14px ${cat.g}, inset 0 0 6px ${cat.c}0a`
                    : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px 1px",
            }}
            onClick={() => onClick(el)}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            title={`${el.name} — click for details`}
        >
            <span
                style={{
                    fontSize: 7,
                    color: "#3a3a5c",
                    alignSelf: "flex-start",
                    paddingLeft: 3,
                    lineHeight: 1,
                    fontFamily: "'Space Mono'",
                }}
            >
                {el.z}
            </span>
            <span
                style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: hov ? cat.c : `${cat.c}cc`,
                    fontFamily: "'Chakra Petch'",
                    lineHeight: 1.15,
                    letterSpacing: "-.3px",
                }}
            >
                {el.sym}
            </span>
            <span
                style={{
                    fontSize: 6.5,
                    color: "#2e2e4a",
                    lineHeight: 1.3,
                    fontFamily: "'Space Mono'",
                }}
            >
                {el.mass}
            </span>
        </div>
    );
}

const MAIN = EL.filter((e) => e.row <= 7);
const FBLOCK = EL.filter((e) => e.row >= 8);

// ======================================
// EXTENDED CHEMISTRY DATA BOOKLET TABLES
// ======================================

const CHEM_EXTENDED = {
    formationEnthalpies: [
        { species: "H2O(l)", val: -286 },
        { species: "H2O(g)", val: -242 },
        { species: "CO2(g)", val: -394 },
        { species: "CO(g)", val: -111 },
        { species: "CH4(g)", val: -75 },
        { species: "NH3(g)", val: -46 },
        { species: "NO(g)", val: 90 },
        { species: "NO2(g)", val: 33 },
        { species: "SO2(g)", val: -297 },
        { species: "HCl(g)", val: -92 },
    ],

    entropyValues: [
        { species: "H2(g)", val: 131 },
        { species: "O2(g)", val: 205 },
        { species: "N2(g)", val: 192 },
        { species: "H2O(l)", val: 70 },
        { species: "H2O(g)", val: 189 },
        { species: "CO2(g)", val: 214 },
        { species: "CH4(g)", val: 186 },
        { species: "NH3(g)", val: 193 },
        { species: "SO2(g)", val: 248 },
    ],

    combustionEnthalpies: [
        { compound: "H2", val: -286 },
        { compound: "C (graphite)", val: -394 },
        { compound: "CO", val: -283 },
        { compound: "CH4", val: -891 },
        { compound: "C2H6", val: -1560 },
        { compound: "C3H8", val: -2220 },
        { compound: "C4H10", val: -2877 },
        { compound: "C2H4", val: -1411 },
        { compound: "C2H2", val: -1300 },
        { compound: "C6H6", val: -3267 },
    ],

    gibbsFormation: [
        { species: "H2O(l)", val: -237 },
        { species: "CO2(g)", val: -394 },
        { species: "CO(g)", val: -137 },
        { species: "CH4(g)", val: -51 },
        { species: "NH3(g)", val: -16 },
        { species: "NO(g)", val: 87 },
    ],

    pKa: [
        { acid: "HCl", val: -6 },
        { acid: "H2SO4 (1st)", val: -3 },
        { acid: "HNO3", val: -1.4 },
        { acid: "CH3COOH", val: 4.76 },
        { acid: "H2CO3", val: 6.3 },
        { acid: "H2PO4-", val: 7.2 },
        { acid: "NH4+", val: 9.25 },
        { acid: "HCO3-", val: 10.3 },
    ],

    IR: [
        { group: "O-H (alcohol)", range: "3200–3600" },
        { group: "O-H (carboxylic)", range: "2500–3300" },
        { group: "N-H", range: "3300–3500" },
        { group: "C-H (alkane)", range: "2850–2960" },
        { group: "C-H (alkene)", range: "3020–3100" },
        { group: "C-H (aldehyde)", range: "2720–2820" },
        { group: "C=O", range: "1680–1750" },
        { group: "C=C", range: "1620–1680" },
        { group: "C-O", range: "1000–1300" },
    ],

    HNMR: [
        { proton: "Alkane (R-CH3)", range: "0.8 – 1.0" },
        { proton: "Alkane (R-CH2)", range: "1.2 – 1.5" },
        { proton: "Allylic", range: "1.6 – 2.0" },
        { proton: "Next to C=O", range: "2.0 – 2.5" },
        { proton: "Alkyl halide", range: "2.5 – 4.0" },
        { proton: "O-CH", range: "3.3 – 4.0" },
        { proton: "Alkene", range: "4.5 – 6.5" },
        { proton: "Aromatic", range: "6.0 – 8.5" },
        { proton: "Aldehyde", range: "9.5 – 10.5" },
        { proton: "Carboxylic acid", range: "10 – 13" },
    ],

    CNMR: [
        { carbon: "Alkane C", range: "0 – 50" },
        { carbon: "C-O", range: "50 – 90" },
        { carbon: "Alkyne", range: "70 – 90" },
        { carbon: "Alkene", range: "100 – 150" },
        { carbon: "Aromatic", range: "110 – 160" },
        { carbon: "Carbonyl", range: "160 – 220" },
    ],

    functionalGroups: [
        { name: "Alcohol", formula: "R-OH" },
        { name: "Aldehyde", formula: "R-CHO" },
        { name: "Ketone", formula: "R-CO-R" },
        { name: "Carboxylic Acid", formula: "R-COOH" },
        { name: "Ester", formula: "R-COO-R" },
        { name: "Amine", formula: "R-NH2" },
        { name: "Amide", formula: "R-CONH2" },
        { name: "Ether", formula: "R-O-R" },
        { name: "Nitrile", formula: "R-C≡N" },
        { name: "Halogenoalkane", formula: "R-X" },
    ],
};

function ChemTables({ data }) {
    return (
        <div style={{ marginTop: 40 }}>
            {Object.entries(data).map(([sectionName, rows]) => (
                <div key={sectionName} style={{ marginBottom: 32 }}>
                    <h2
                        style={{
                            fontFamily: "'Chakra Petch'",
                            fontSize: 14,
                            marginBottom: 10,
                            color: "#eee",
                            letterSpacing: "1px",
                        }}
                    >
                        {formatTitle(sectionName)}
                    </h2>

                    <table className="chem-table">
                        <thead>
                            <tr>
                                {Object.keys(rows[0]).map((col) => (
                                    <th
                                        key={col}
                                        style={{
                                            textAlign: "left",
                                            borderBottom: "1px solid #222",
                                            padding: "6px 4px",
                                            color: "#888",
                                            textTransform: "uppercase",
                                            fontSize: 9,
                                        }}
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i}>
                                    {Object.values(row).map((cell, j) => (
                                        <td
                                            key={j}
                                            style={{
                                                padding: "6px 4px",
                                                borderBottom: "1px solid #111",
                                                color: "#bbb",
                                            }}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

function formatTitle(name) {
    return name
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase());
}

export default function PeriodicTable() {
    const [selected, setSelected] = useState(null);
    const [filterCat, setFilterCat] = useState(null);

    const toggleFilter = (cat) =>
        setFilterCat((prev) => (prev === cat ? null : cat));

    return (
        <div className="pt-wrap">
            <style>{STYLE}</style>

            {/* Header */}
            <div style={{ marginBottom: 14 }}>
                <h1
                    style={{
                        fontFamily: "'Chakra Petch'",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#eee",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: 3,
                    }}
                >
                    Chemistry data
                </h1>
                <p
                    style={{
                        fontSize: 9,
                        color: "#2e2e4a",
                        letterSpacing: ".5px",
                    }}
                >
                    Click any element for details · Filter by category below
                </p>
            </div>

            {/* Legend */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                    marginBottom: 14,
                }}
            >
                {Object.entries(CATS).map(([key, { c, l }]) => (
                    <div
                        key={key}
                        className="chip"
                        onClick={() => toggleFilter(key)}
                        style={{
                            background: filterCat === key ? `${c}33` : `${c}10`,
                            border: `1px solid ${filterCat === key ? c : c + "44"}`,
                            color: filterCat === key ? c : c + "99",
                            opacity: filterCat && filterCat !== key ? 0.4 : 1,
                        }}
                    >
                        {l}
                    </div>
                ))}
                {filterCat && (
                    <div
                        className="chip"
                        onClick={() => setFilterCat(null)}
                        style={{
                            background: "#ffffff0a",
                            border: "1px solid #ffffff22",
                            color: "#888",
                        }}
                    >
                        ✕ clear
                    </div>
                )}
            </div>

            {/* Main grid */}
            <div
                style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: `repeat(18, ${CW}px)`,
                    gridTemplateRows: `repeat(7, ${CH}px)`,
                    gap: GAP,
                }}
            >
                {MAIN.map((el) => (
                    <div
                        key={el.z}
                        style={{ gridColumn: el.col, gridRow: el.row }}
                    >
                        <ElCell
                            el={el}
                            onClick={setSelected}
                            filterCat={filterCat}
                        />
                    </div>
                ))}

                {/* La/Ac markers at row 6-7 col 3 */}
                {[
                    { row: 6, label: "La–Lu" },
                    { row: 7, label: "Ac–Lr" },
                ].map(({ row, label }) =>
                    !MAIN.some(
                        (e) =>
                            e.row === row &&
                            e.col === 3 &&
                            e.cat !== "lanthanide" &&
                            e.cat !== "actinide",
                    ) ? null : (
                        <div
                            key={label}
                            style={{
                                gridColumn: 3,
                                gridRow: row,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 8,
                                color:
                                    row === 6
                                        ? CATS.lanthanide.c + "88"
                                        : CATS.actinide.c + "88",
                                fontFamily: "'Space Mono'",
                            }}
                        />
                    ),
                )}
            </div>

            {/* F-block separator */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    margin: "10px 0 6px",
                    paddingLeft: 3 * (CW + GAP),
                }}
            >
                <div style={{ height: 1, width: 30, background: "#1a1a30" }} />
                <span
                    style={{
                        fontSize: 8,
                        color: "#22223a",
                        letterSpacing: ".5px",
                        textTransform: "uppercase",
                    }}
                >
                    f-block
                </span>
                <div style={{ height: 1, flex: 1, background: "#1a1a30" }} />
            </div>

            {/* F-block grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(14, ${CW}px)`,
                    gridTemplateRows: `repeat(2, ${CH}px)`,
                    gap: GAP,
                    paddingLeft: 3 * (CW + GAP),
                }}
            >
                {FBLOCK.map((el) => (
                    <div
                        key={el.z}
                        style={{ gridColumn: el.col - 3, gridRow: el.row - 7 }}
                    >
                        <ElCell
                            el={el}
                            onClick={setSelected}
                            filterCat={filterCat}
                        />
                    </div>
                ))}
            </div>

            {/* Row labels for f-block */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                }}
            ></div>

            {/* Modal */}
            {selected && (
                <Modal el={selected} onClose={() => setSelected(null)} />
            )}
            <ChemTables data={CHEM_EXTENDED} />
        </div>
    );
}
// I like feet
