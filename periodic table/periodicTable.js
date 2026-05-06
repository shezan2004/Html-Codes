const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', period: 1, group: 1, block: 's' },
  { number: 2, symbol: 'He', name: 'Helium', period: 1, group: 18, block: 's' },
  { number: 3, symbol: 'Li', name: 'Lithium', period: 2, group: 1, block: 's' },
  { number: 4, symbol: 'Be', name: 'Beryllium', period: 2, group: 2, block: 's' },
  { number: 5, symbol: 'B', name: 'Boron', period: 2, group: 13, block: 'p' },
  { number: 6, symbol: 'C', name: 'Carbon', period: 2, group: 14, block: 'p' },
  { number: 7, symbol: 'N', name: 'Nitrogen', period: 2, group: 15, block: 'p' },
  { number: 8, symbol: 'O', name: 'Oxygen', period: 2, group: 16, block: 'p' },
  { number: 9, symbol: 'F', name: 'Fluorine', period: 2, group: 17, block: 'p' },
  { number: 10, symbol: 'Ne', name: 'Neon', period: 2, group: 18, block: 'p' },
  { number: 11, symbol: 'Na', name: 'Sodium', period: 3, group: 1, block: 's' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', period: 3, group: 2, block: 's' },
  { number: 13, symbol: 'Al', name: 'Aluminum', period: 3, group: 13, block: 'p' },
  { number: 14, symbol: 'Si', name: 'Silicon', period: 3, group: 14, block: 'p' },
  { number: 15, symbol: 'P', name: 'Phosphorus', period: 3, group: 15, block: 'p' },
  { number: 16, symbol: 'S', name: 'Sulfur', period: 3, group: 16, block: 'p' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', period: 3, group: 17, block: 'p' },
  { number: 18, symbol: 'Ar', name: 'Argon', period: 3, group: 18, block: 'p' },
  { number: 19, symbol: 'K', name: 'Potassium', period: 4, group: 1, block: 's' },
  { number: 20, symbol: 'Ca', name: 'Calcium', period: 4, group: 2, block: 's' },
  { number: 21, symbol: 'Sc', name: 'Scandium', period: 4, group: 3, block: 'd' },
  { number: 22, symbol: 'Ti', name: 'Titanium', period: 4, group: 4, block: 'd' },
  { number: 23, symbol: 'V', name: 'Vanadium', period: 4, group: 5, block: 'd' },
  { number: 24, symbol: 'Cr', name: 'Chromium', period: 4, group: 6, block: 'd' },
  { number: 25, symbol: 'Mn', name: 'Manganese', period: 4, group: 7, block: 'd' },
  { number: 26, symbol: 'Fe', name: 'Iron', period: 4, group: 8, block: 'd' },
  { number: 27, symbol: 'Co', name: 'Cobalt', period: 4, group: 9, block: 'd' },
  { number: 28, symbol: 'Ni', name: 'Nickel', period: 4, group: 10, block: 'd' },
  { number: 29, symbol: 'Cu', name: 'Copper', period: 4, group: 11, block: 'd' },
  { number: 30, symbol: 'Zn', name: 'Zinc', period: 4, group: 12, block: 'd' },
  { number: 31, symbol: 'Ga', name: 'Gallium', period: 4, group: 13, block: 'p' },
  { number: 32, symbol: 'Ge', name: 'Germanium', period: 4, group: 14, block: 'p' },
  { number: 33, symbol: 'As', name: 'Arsenic', period: 4, group: 15, block: 'p' },
  { number: 34, symbol: 'Se', name: 'Selenium', period: 4, group: 16, block: 'p' },
  { number: 35, symbol: 'Br', name: 'Bromine', period: 4, group: 17, block: 'p' },
  { number: 36, symbol: 'Kr', name: 'Krypton', period: 4, group: 18, block: 'p' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', period: 5, group: 1, block: 's' },
  { number: 38, symbol: 'Sr', name: 'Strontium', period: 5, group: 2, block: 's' },
  { number: 39, symbol: 'Y', name: 'Yttrium', period: 5, group: 3, block: 'd' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', period: 5, group: 4, block: 'd' },
  { number: 41, symbol: 'Nb', name: 'Niobium', period: 5, group: 5, block: 'd' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', period: 5, group: 6, block: 'd' },
  { number: 43, symbol: 'Tc', name: 'Technetium', period: 5, group: 7, block: 'd' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', period: 5, group: 8, block: 'd' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', period: 5, group: 9, block: 'd' },
  { number: 46, symbol: 'Pd', name: 'Palladium', period: 5, group: 10, block: 'd' },
  { number: 47, symbol: 'Ag', name: 'Silver', period: 5, group: 11, block: 'd' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', period: 5, group: 12, block: 'd' },
  { number: 49, symbol: 'In', name: 'Indium', period: 5, group: 13, block: 'p' },
  { number: 50, symbol: 'Sn', name: 'Tin', period: 5, group: 14, block: 'p' },
  { number: 51, symbol: 'Sb', name: 'Antimony', period: 5, group: 15, block: 'p' },
  { number: 52, symbol: 'Te', name: 'Tellurium', period: 5, group: 16, block: 'p' },
  { number: 53, symbol: 'I', name: 'Iodine', period: 5, group: 17, block: 'p' },
  { number: 54, symbol: 'Xe', name: 'Xenon', period: 5, group: 18, block: 'p' },
  { number: 55, symbol: 'Cs', name: 'Cesium', period: 6, group: 1, block: 's' },
  { number: 56, symbol: 'Ba', name: 'Barium', period: 6, group: 2, block: 's' },
  { number: 57, symbol: 'La', name: 'Lanthanum', period: 6, group: 3, block: 'd' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', period: 6, group: 4, block: 'd' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', period: 6, group: 5, block: 'd' },
  { number: 74, symbol: 'W', name: 'Tungsten', period: 6, group: 6, block: 'd' },
  { number: 75, symbol: 'Re', name: 'Rhenium', period: 6, group: 7, block: 'd' },
  { number: 76, symbol: 'Os', name: 'Osmium', period: 6, group: 8, block: 'd' },
  { number: 77, symbol: 'Ir', name: 'Iridium', period: 6, group: 9, block: 'd' },
  { number: 78, symbol: 'Pt', name: 'Platinum', period: 6, group: 10, block: 'd' },
  { number: 79, symbol: 'Au', name: 'Gold', period: 6, group: 11, block: 'd' },
  { number: 80, symbol: 'Hg', name: 'Mercury', period: 6, group: 12, block: 'd' },
  { number: 81, symbol: 'Tl', name: 'Thallium', period: 6, group: 13, block: 'p' },
  { number: 82, symbol: 'Pb', name: 'Lead', period: 6, group: 14, block: 'p' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', period: 6, group: 15, block: 'p' },
  { number: 84, symbol: 'Po', name: 'Polonium', period: 6, group: 16, block: 'p' },
  { number: 85, symbol: 'At', name: 'Astatine', period: 6, group: 17, block: 'p' },
  { number: 86, symbol: 'Rn', name: 'Radon', period: 6, group: 18, block: 'p' },
  { number: 87, symbol: 'Fr', name: 'Francium', period: 7, group: 1, block: 's' },
  { number: 88, symbol: 'Ra', name: 'Radium', period: 7, group: 2, block: 's' },
  { number: 89, symbol: 'Ac', name: 'Actinium', period: 7, group: 3, block: 'd' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', period: 7, group: 4, block: 'd' },
  { number: 105, symbol: 'Db', name: 'Dubnium', period: 7, group: 5, block: 'd' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', period: 7, group: 6, block: 'd' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', period: 7, group: 7, block: 'd' },
  { number: 108, symbol: 'Hs', name: 'Hassium', period: 7, group: 8, block: 'd' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', period: 7, group: 9, block: 'd' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', period: 7, group: 10, block: 'd' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', period: 7, group: 11, block: 'd' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', period: 7, group: 12, block: 'd' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', period: 7, group: 13, block: 'p' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', period: 7, group: 14, block: 'p' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', period: 7, group: 15, block: 'p' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', period: 7, group: 16, block: 'p' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', period: 7, group: 17, block: 'p' },
  { number: 118, symbol: 'Og', name: 'Oganesson', period: 7, group: 18, block: 'p' },
  { number: 58, symbol: 'Ce', name: 'Cerium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 61, symbol: 'Pm', name: 'Promethium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 62, symbol: 'Sm', name: 'Samarium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 63, symbol: 'Eu', name: 'Europium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 65, symbol: 'Tb', name: 'Terbium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 67, symbol: 'Ho', name: 'Holmium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 68, symbol: 'Er', name: 'Erbium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 69, symbol: 'Tm', name: 'Thulium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', period: 6, group: 3, block: 'f', series: 'Lanthanide' },
  { number: 90, symbol: 'Th', name: 'Thorium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 92, symbol: 'U', name: 'Uranium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 93, symbol: 'Np', name: 'Neptunium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 95, symbol: 'Am', name: 'Americium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 96, symbol: 'Cm', name: 'Curium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 98, symbol: 'Cf', name: 'Californium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 100, symbol: 'Fm', name: 'Fermium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 102, symbol: 'No', name: 'Nobelium', period: 7, group: 3, block: 'f', series: 'Actinide' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', period: 7, group: 3, block: 'f', series: 'Actinide' }
];

const legendOrder = [
  ['nonmetal', 'Nonmetal'],
  ['halogen', 'Halogen'],
  ['noble-gas', 'Noble Gas'],
  ['alkali-metal', 'Alkali Metal'],
  ['alkaline-earth-metal', 'Alkaline Earth'],
  ['transition-metal', 'Transition Metal'],
  ['post-transition-metal', 'Post-transition'],
  ['metalloid', 'Metalloid'],
  ['lanthanide', 'Lanthanide'],
  ['actinide', 'Actinide'],
  ['unknown', 'Unknown']
];

const categoryLabels = {
  'alkali-metal': 'Alkali Metal',
  'alkaline-earth-metal': 'Alkaline Earth',
  'transition-metal': 'Transition Metal',
  'post-transition-metal': 'Post-transition',
  metalloid: 'Metalloid',
  nonmetal: 'Nonmetal',
  halogen: 'Halogen',
  'noble-gas': 'Noble Gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
  unknown: 'Unknown'
};

const stateLabels = {
  solid: 'Solid',
  liquid: 'Liquid',
  gas: 'Gas',
  unknown: 'Unknown'
};

const stateByAtomic = {
  1: 'gas',
  2: 'gas',
  7: 'gas',
  8: 'gas',
  9: 'gas',
  10: 'gas',
  17: 'gas',
  18: 'gas',
  36: 'gas',
  54: 'gas',
  86: 'gas',
  118: 'gas',
  35: 'liquid',
  80: 'liquid'
};

const electronegativity = {
  1: '2.20',
  3: '0.98',
  4: '1.57',
  5: '2.04',
  6: '2.55',
  7: '3.04',
  8: '3.44',
  9: '3.98',
  11: '0.93',
  12: '1.31',
  13: '1.61',
  14: '1.90',
  15: '2.19',
  16: '2.58',
  17: '3.16',
  19: '0.82',
  20: '1.00',
  21: '1.36',
  22: '1.54',
  23: '1.63',
  24: '1.66',
  25: '1.55',
  26: '1.83',
  27: '1.88',
  28: '1.91',
  29: '1.90',
  30: '1.65',
  31: '1.81',
  32: '2.01',
  33: '2.18',
  34: '2.55',
  35: '2.96',
  37: '0.82',
  38: '0.95',
  39: '1.22',
  40: '1.33',
  41: '1.60',
  42: '2.16',
  44: '2.20',
  45: '2.28',
  46: '2.20',
  47: '1.93',
  48: '1.69',
  49: '1.78',
  50: '1.96',
  51: '2.05',
  52: '2.10',
  53: '2.66',
  55: '0.79',
  56: '0.89',
  57: '1.10',
  72: '1.30',
  73: '1.50',
  74: '2.36',
  75: '1.90',
  76: '2.20',
  77: '2.20',
  78: '2.28',
  79: '2.54',
  80: '2.00',
  81: '1.62',
  82: '2.33',
  83: '2.02',
  84: '2.00',
  85: '2.20'
};

const atomicMass = {
  1: '1.008',
  2: '4.003',
  3: '6.94',
  4: '9.012',
  5: '10.81',
  6: '12.011',
  7: '14.007',
  8: '15.999',
  9: '18.998',
  10: '20.180',
  11: '22.990',
  12: '24.305',
  13: '26.982',
  14: '28.085',
  15: '30.974',
  16: '32.06',
  17: '35.45',
  18: '39.948',
  19: '39.098',
  20: '40.078',
  21: '44.956',
  22: '47.867',
  23: '50.942',
  24: '51.996',
  25: '54.938',
  26: '55.845',
  27: '58.933',
  28: '58.693',
  29: '63.546',
  30: '65.38',
  31: '69.723',
  32: '72.630',
  33: '74.922',
  34: '78.971',
  35: '79.904',
  36: '83.798',
  37: '85.468',
  38: '87.62',
  39: '88.906',
  40: '91.224',
  41: '92.906',
  42: '95.95',
  43: '[98]',
  44: '101.07',
  45: '102.91',
  46: '106.42',
  47: '107.87',
  48: '112.41',
  49: '114.82',
  50: '118.71',
  51: '121.76',
  52: '127.60',
  53: '126.90',
  54: '131.29',
  55: '132.91',
  56: '137.33',
  57: '138.91',
  58: '140.12',
  59: '140.91',
  60: '144.24',
  61: '[145]',
  62: '150.36',
  63: '151.96',
  64: '157.25',
  65: '158.93',
  66: '162.50',
  67: '164.93',
  68: '167.26',
  69: '168.93',
  70: '173.05',
  71: '174.97',
  72: '178.49',
  73: '180.95',
  74: '183.84',
  75: '186.21',
  76: '190.23',
  77: '192.22',
  78: '195.08',
  79: '196.97',
  80: '200.59',
  81: '204.38',
  82: '207.2',
  83: '208.98',
  84: '[209]',
  85: '[210]',
  86: '[222]',
  87: '[223]',
  88: '[226]',
  89: '[227]',
  90: '[232]',
  91: '[231]',
  92: '238.03',
  93: '[237]',
  94: '[244]',
  95: '[243]',
  96: '[247]',
  97: '[247]',
  98: '[251]',
  99: '[252]',
  100: '[257]',
  101: '[258]',
  102: '[259]',
  103: '[266]',
  104: '[267]',
  105: '[268]',
  106: '[269]',
  107: '[270]',
  108: '[277]',
  109: '[278]',
  110: '[281]',
  111: '[282]',
  112: '[285]',
  113: '[286]',
  114: '[289]',
  115: '[290]',
  116: '[293]',
  117: '[294]',
  118: '[294]'
};

const baseOxidation = {
  'alkali-metal': '+1',
  'alkaline-earth-metal': '+2',
  'halogen': '-1, +1, +3, +5, +7',
  'noble-gas': '0',
  'lanthanide': '+3',
  'actinide': '+3, +4, +5, +6'
};

const categoryByAtomic = new Map([
  [1, 'nonmetal'],
  [2, 'noble-gas'],
  [3, 'alkali-metal'],
  [4, 'alkaline-earth-metal'],
  [5, 'metalloid'],
  [6, 'nonmetal'],
  [7, 'nonmetal'],
  [8, 'nonmetal'],
  [9, 'halogen'],
  [10, 'noble-gas'],
  [11, 'alkali-metal'],
  [12, 'alkaline-earth-metal'],
  [13, 'post-transition-metal'],
  [14, 'metalloid'],
  [15, 'nonmetal'],
  [16, 'nonmetal'],
  [17, 'halogen'],
  [18, 'noble-gas'],
  [19, 'alkali-metal'],
  [20, 'alkaline-earth-metal'],
  [21, 'transition-metal'],
  [22, 'transition-metal'],
  [23, 'transition-metal'],
  [24, 'transition-metal'],
  [25, 'transition-metal'],
  [26, 'transition-metal'],
  [27, 'transition-metal'],
  [28, 'transition-metal'],
  [29, 'transition-metal'],
  [30, 'transition-metal'],
  [31, 'post-transition-metal'],
  [32, 'metalloid'],
  [33, 'metalloid'],
  [34, 'nonmetal'],
  [35, 'halogen'],
  [36, 'noble-gas'],
  [37, 'alkali-metal'],
  [38, 'alkaline-earth-metal'],
  [39, 'transition-metal'],
  [40, 'transition-metal'],
  [41, 'transition-metal'],
  [42, 'transition-metal'],
  [43, 'transition-metal'],
  [44, 'transition-metal'],
  [45, 'transition-metal'],
  [46, 'transition-metal'],
  [47, 'transition-metal'],
  [48, 'transition-metal'],
  [49, 'post-transition-metal'],
  [50, 'post-transition-metal'],
  [51, 'metalloid'],
  [52, 'metalloid'],
  [53, 'halogen'],
  [54, 'noble-gas'],
  [55, 'alkali-metal'],
  [56, 'alkaline-earth-metal'],
  [57, 'lanthanide'],
  [58, 'lanthanide'],
  [59, 'lanthanide'],
  [60, 'lanthanide'],
  [61, 'lanthanide'],
  [62, 'lanthanide'],
  [63, 'lanthanide'],
  [64, 'lanthanide'],
  [65, 'lanthanide'],
  [66, 'lanthanide'],
  [67, 'lanthanide'],
  [68, 'lanthanide'],
  [69, 'lanthanide'],
  [70, 'lanthanide'],
  [71, 'lanthanide'],
  [72, 'transition-metal'],
  [73, 'transition-metal'],
  [74, 'transition-metal'],
  [75, 'transition-metal'],
  [76, 'transition-metal'],
  [77, 'transition-metal'],
  [78, 'transition-metal'],
  [79, 'transition-metal'],
  [80, 'transition-metal'],
  [81, 'post-transition-metal'],
  [82, 'post-transition-metal'],
  [83, 'post-transition-metal'],
  [84, 'metalloid'],
  [85, 'halogen'],
  [86, 'noble-gas'],
  [87, 'alkali-metal'],
  [88, 'alkaline-earth-metal'],
  [89, 'actinide'],
  [90, 'actinide'],
  [91, 'actinide'],
  [92, 'actinide'],
  [93, 'actinide'],
  [94, 'actinide'],
  [95, 'actinide'],
  [96, 'actinide'],
  [97, 'actinide'],
  [98, 'actinide'],
  [99, 'actinide'],
  [100, 'actinide'],
  [101, 'actinide'],
  [102, 'actinide'],
  [103, 'actinide'],
  [104, 'transition-metal'],
  [105, 'transition-metal'],
  [106, 'transition-metal'],
  [107, 'transition-metal'],
  [108, 'transition-metal'],
  [109, 'transition-metal'],
  [110, 'transition-metal'],
  [111, 'transition-metal'],
  [112, 'transition-metal'],
  [113, 'post-transition-metal'],
  [114, 'post-transition-metal'],
  [115, 'post-transition-metal'],
  [116, 'post-transition-metal'],
  [117, 'halogen'],
  [118, 'noble-gas']
]);

const categoryCounts = elements.reduce((counts, element) => {
  const category = getCategory(element);
  counts[category] = (counts[category] || 0) + 1;
  return counts;
}, {});

const els = {
  grid: document.getElementById('periodicGrid'),
  legend: document.getElementById('legend'),
  searchInput: document.getElementById('searchInput'),
  suggestions: document.getElementById('suggestions'),
  statusText: document.getElementById('statusText'),
  resultPills: document.getElementById('resultPills'),
  themeToggle: document.getElementById('themeToggle'),
  infoToggle: document.getElementById('infoToggle'),
  drawerClose: document.getElementById('drawerClose'),
  drawerCloseTop: document.getElementById('drawerCloseTop'),
  sidebarDrawer: document.getElementById('sidebarDrawer'),
  compareToggle: document.getElementById('compareToggle'),
  compareList: document.getElementById('compareList'),
  compareHint: document.getElementById('compareHint'),
  compareClear: document.getElementById('compareClear'),
  favoriteToggle: document.getElementById('favoriteToggle'),
  favoritesList: document.getElementById('favoritesList'),
  favoritesClear: document.getElementById('favoritesClear'),
  quizScore: document.getElementById('quizScore'),
  quizTimer: document.getElementById('quizTimer'),
  quizStreak: document.getElementById('quizStreak'),
  quizQuestion: document.getElementById('quizQuestion'),
  quizOptions: document.getElementById('quizOptions'),
  quizFeedback: document.getElementById('quizFeedback'),
  quizStart: document.getElementById('quizStart'),
  quizNext: document.getElementById('quizNext'),
  filterCategory: document.getElementById('filterCategory'),
  filterPeriod: document.getElementById('filterPeriod'),
  filterBlock: document.getElementById('filterBlock'),
  filterState: document.getElementById('filterState'),
  infoName: document.getElementById('infoName'),
  infoAtomic: document.getElementById('infoAtomic'),
  infoSymbol: document.getElementById('infoSymbol'),
  infoCategory: document.getElementById('infoCategory'),
  infoDescription: document.getElementById('infoDescription'),
  infoMass: document.getElementById('infoMass'),
  infoGroup: document.getElementById('infoGroup'),
  infoPeriod: document.getElementById('infoPeriod'),
  infoBlock: document.getElementById('infoBlock'),
  infoState: document.getElementById('infoState'),
  infoEN: document.getElementById('infoEN'),
  infoOx: document.getElementById('infoOx'),
  infoConfig: document.getElementById('infoConfig'),
  infoNote: document.getElementById('infoNote'),
  totalCount: document.getElementById('totalCount'),
  categoryCount: document.getElementById('categoryCount'),
  yearCount: document.getElementById('yearCount'),
  footerDate: document.getElementById('footerDate')
};

let activeAtomicNumber = 1;
let compareSelection = [];
let favoriteSelection = [];
let quizState = {
  active: false,
  question: null,
  score: 0,
  total: 0,
  streak: 0,
  timerSeconds: 15,
  timerRemaining: 15,
  timerId: null,
  canAdvance: false,
  answered: false
};
let currentFilters = {
  query: '',
  category: 'all',
  period: 'all',
  block: 'all',
  state: 'all'
};

function openDrawer() {
  document.body.classList.add('drawer-open');
  if (els.sidebarDrawer) {
    els.sidebarDrawer.setAttribute('aria-hidden', 'false');
  }
}

function loadFavorites() {
  try {
    const stored = localStorage.getItem('periodic-table-favorites');
    favoriteSelection = stored ? JSON.parse(stored) : [];
  } catch {
    favoriteSelection = [];
  }
}

function saveFavorites() {
  localStorage.setItem('periodic-table-favorites', JSON.stringify(favoriteSelection));
}

function updateFavoriteButtonState() {
  if (!els.favoriteToggle) {
    return;
  }

  const selected = favoriteSelection.includes(activeAtomicNumber);
  els.favoriteToggle.textContent = selected ? '★' : '☆';
  els.favoriteToggle.setAttribute('aria-label', selected ? 'Remove element from favorites' : 'Favorite element');
}

function updateQuizMeta() {
  if (els.quizTimer) {
    els.quizTimer.textContent = `Time: ${quizState.timerRemaining}s`;
  }

  if (els.quizStreak) {
    els.quizStreak.textContent = `Streak: ${quizState.streak}`;
  }
}

function updateQuizScore() {
  if (els.quizScore) {
    els.quizScore.textContent = `Score: ${quizState.score} / ${quizState.total}`;
  }
  updateQuizMeta();
}

function updateQuizNextState() {
  if (els.quizNext) {
    els.quizNext.disabled = !quizState.canAdvance;
  }
}

function clearQuizTimer() {
  if (quizState.timerId) {
    clearInterval(quizState.timerId);
    quizState.timerId = null;
  }
}

function startQuizTimer() {
  clearQuizTimer();
  quizState.timerRemaining = quizState.timerSeconds;
  updateQuizMeta();

  quizState.timerId = setInterval(() => {
    quizState.timerRemaining -= 1;
    updateQuizMeta();

    if (quizState.timerRemaining <= 0) {
      clearQuizTimer();
      handleQuizRetry('Time is up. Try the same question again.', true);
    }
  }, 1000);
}

function disableQuizButtons(disabled) {
  if (!els.quizOptions) {
    return;
  }

  els.quizOptions.querySelectorAll('.quiz-option').forEach((item) => {
    item.disabled = disabled;
  });
}

function highlightQuizAnswer(selected, isCorrect) {
  if (!els.quizOptions || !quizState.question) {
    return;
  }

  els.quizOptions.querySelectorAll('.quiz-option').forEach((item) => {
    const matchesAnswer = item.dataset.quizAnswer === quizState.question.answer;
    const matchesSelected = item.dataset.quizAnswer === selected;
    item.classList.toggle('correct', matchesAnswer);
    item.classList.toggle('wrong', !isCorrect && matchesSelected);
  });
}

function resetQuizOptions() {
  if (!els.quizOptions) {
    return;
  }

  els.quizOptions.querySelectorAll('.quiz-option').forEach((item) => {
    item.classList.remove('correct', 'wrong', 'retry');
    item.disabled = false;
  });
}

function handleQuizRetry(message, countAsAttempt = false) {
  quizState.streak = 0;
  if (countAsAttempt) {
    quizState.total += 1;
  }
  quizState.answered = false;
  quizState.canAdvance = false;
  updateQuizScore();

  if (els.quizFeedback) {
    els.quizFeedback.textContent = message;
  }

  highlightQuizAnswer('', false);
  disableQuizButtons(true);

  if (els.quizOptions) {
    els.quizOptions.querySelectorAll('.quiz-option').forEach((item) => {
      item.classList.add('retry');
    });
  }

  window.setTimeout(() => {
    if (!quizState.active || !quizState.question) {
      return;
    }

    resetQuizOptions();
    if (els.quizFeedback) {
      els.quizFeedback.textContent = 'Retry the same question.';
    }
    startQuizTimer();
    updateQuizNextState();
  }, 800);
}

function renderFavorites() {
  if (!els.favoritesList) {
    return;
  }

  if (favoriteSelection.length === 0) {
    els.favoritesList.innerHTML = '<p class="compare-hint">No favorites saved yet. Press F on an element to save it here.</p>';
    return;
  }

  els.favoritesList.innerHTML = favoriteSelection.map((atomicNumber) => {
    const element = elements.find((entry) => entry.number === atomicNumber);
    if (!element) {
      return '';
    }
    return `
      <article class="compare-item" data-atomic="${element.number}">
        <div class="compare-item-head">
          <strong>${element.name} (${element.symbol})</strong>
          <button type="button" data-remove-favorite="${element.number}" aria-label="Remove ${element.name} from favorites">×</button>
        </div>
        <dl>
          <div><dt>Atomic Number</dt><dd>${element.number}</dd></div>
          <div><dt>Category</dt><dd>${getCategoryLabel(getCategory(element))}</dd></div>
        </dl>
      </article>
    `;
  }).join('');
}

function toggleFavorite(number = activeAtomicNumber) {
  if (!number) {
    return;
  }

  if (favoriteSelection.includes(number)) {
    favoriteSelection = favoriteSelection.filter((entry) => entry !== number);
  } else {
    favoriteSelection = [...favoriteSelection, number];
  }

  saveFavorites();
  renderFavorites();
  updateFavoriteButtonState();
}

function generateQuizQuestion() {
  const pool = elements.filter((element) => !element.series);
  const element = pool[Math.floor(Math.random() * pool.length)];
  const promptType = Math.floor(Math.random() * 3);
  let prompt;
  let answer;
  let options;

  if (promptType === 0) {
    prompt = `Which element has atomic number ${element.number}?`;
    answer = element.name;
    options = [element.name];
  } else if (promptType === 1) {
    prompt = `What is the symbol for ${element.name}?`;
    answer = element.symbol;
    options = [element.symbol];
  } else {
    prompt = `Which category does ${element.name} belong to?`;
    answer = getCategoryLabel(getCategory(element));
    options = [answer];
  }

  const distractors = promptType === 2
    ? [...new Set(elements.map((item) => getCategoryLabel(getCategory(item))))].filter((value) => value !== answer)
    : (promptType === 0 ? pool.map((item) => item.name).filter((value) => value !== answer) : pool.map((item) => item.symbol).filter((value) => value !== answer));

  while (options.length < 4 && distractors.length) {
    const index = Math.floor(Math.random() * distractors.length);
    const choice = distractors.splice(index, 1)[0];
    if (!options.includes(choice)) {
      options.push(choice);
    }
  }

  options = options.sort(() => Math.random() - 0.5);
  quizState.question = { prompt, answer, options, element };
  quizState.answered = false;
  quizState.canAdvance = false;
  if (els.quizQuestion) {
    els.quizQuestion.textContent = prompt;
  }
  renderQuizOptions();
  updateQuizMeta();
  updateQuizNextState();
}

function renderQuizOptions() {
  if (!els.quizOptions || !quizState.question) {
    return;
  }

  els.quizOptions.innerHTML = quizState.question.options.map((option) => `
    <button class="quiz-option" type="button" data-quiz-answer="${option}">${option}</button>
  `).join('');

  els.quizOptions.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => submitQuizAnswer(button.dataset.quizAnswer, button));
  });
}

function submitQuizAnswer(selected, button) {
  if (!quizState.question || quizState.answered) {
    return;
  }

  quizState.answered = true;
  quizState.total += 1;
  clearQuizTimer();
  const correct = selected === quizState.question.answer;
  if (correct) {
    quizState.score += 1;
    quizState.streak += 1;
    quizState.canAdvance = true;
  } else {
    quizState.streak = 0;
    quizState.canAdvance = false;
  }

  updateQuizScore();
  if (els.quizFeedback) {
    els.quizFeedback.textContent = correct
      ? 'Correct. Moving to the next question...'
      : `Incorrect. Correct answer: ${quizState.question.answer}`;
  }

  if (button) {
    button.classList.add(correct ? 'correct' : 'wrong');
  }

  highlightQuizAnswer(selected, correct);

  const buttons = els.quizOptions ? els.quizOptions.querySelectorAll('.quiz-option') : [];
  buttons.forEach((item) => {
    item.disabled = true;
  });

  if (!correct) {
    handleQuizRetry(`Incorrect. Correct answer: ${quizState.question.answer}`);
    return;
  }

  updateQuizNextState();

  window.setTimeout(() => {
    if (quizState.active && quizState.canAdvance) {
      nextQuizQuestion();
    }
  }, 900);
}

function startQuiz() {
  quizState.active = true;
  quizState.score = 0;
  quizState.total = 0;
  quizState.streak = 0;
  quizState.timerRemaining = quizState.timerSeconds;
  quizState.canAdvance = false;
  quizState.answered = false;
  if (els.quizFeedback) {
    els.quizFeedback.textContent = 'Quiz started. Pick the best answer.';
  }
  generateQuizQuestion();
  updateQuizScore();
  startQuizTimer();
}

function nextQuizQuestion() {
  if (!quizState.active) {
    startQuiz();
    return;
  }
  if (!quizState.canAdvance) {
    return;
  }
  clearQuizTimer();
  generateQuizQuestion();
  startQuizTimer();
}

function closeDrawer() {
  document.body.classList.remove('drawer-open');
  if (els.sidebarDrawer) {
    els.sidebarDrawer.setAttribute('aria-hidden', 'true');
  }
}

function getCategory(element) {
  if (element.series) {
    return element.series === 'Lanthanide' ? 'lanthanide' : 'actinide';
  }
  return categoryByAtomic.get(element.number) || 'unknown';
}

function getState(element) {
  return stateByAtomic[element.number] || 'solid';
}

function getBlockLabel(block) {
  return `${block}-block`;
}

function getElectronegativity(number) {
  return electronegativity[number] || 'n/a';
}

function getAtomicMass(number) {
  return atomicMass[number] || (number >= 84 ? `[${number}]` : 'varies');
}

function getOxidationStates(element) {
  const category = getCategory(element);
  if (baseOxidation[category]) {
    return baseOxidation[category];
  }
  if (element.number === 1) {
    return '+1, -1';
  }
  if ([13].includes(element.group)) {
    return '+3';
  }
  if ([14].includes(element.group)) {
    return '-4, +2, +4';
  }
  if ([15].includes(element.group)) {
    return '-3, +3, +5';
  }
  if ([16].includes(element.group)) {
    return '-2, +4, +6';
  }
  if ([3,4,5,6,7,8,9,10,11,12].includes(element.group)) {
    return 'multiple';
  }
  return 'varies';
}

function buildElectronConfiguration(number) {
  const order = [
    [1, 's'], [2, 's'], [2, 'p'], [3, 's'], [3, 'p'], [4, 's'],
    [3, 'd'], [4, 'p'], [5, 's'], [4, 'd'], [5, 'p'], [6, 's'],
    [4, 'f'], [5, 'd'], [6, 'p'], [7, 's'], [5, 'f'], [6, 'd'], [7, 'p']
  ];
  const capacities = { s: 2, p: 6, d: 10, f: 14 };
  const exceptionMap = {
    24: { '4s': 1, '3d': 5 },
    29: { '4s': 1, '3d': 10 },
    41: { '5s': 1, '4d': 4 },
    42: { '5s': 1, '4d': 5 },
    44: { '5s': 1, '4d': 7 },
    45: { '5s': 1, '4d': 8 },
    46: { '5s': 0, '4d': 10 },
    47: { '5s': 1, '4d': 10 },
    57: { '5d': 1, '4f': 0 },
    58: { '4f': 1, '5d': 1, '6s': 2 },
    64: { '4f': 7, '5d': 1, '6s': 2 },
    78: { '5d': 9, '6s': 1 },
    79: { '5d': 10, '6s': 1 },
    89: { '6d': 1, '5f': 0 },
    90: { '6d': 2, '5f': 0, '7s': 2 }
  };

  const nobleGasThresholds = [
    { threshold: 86, symbol: 'Rn' },
    { threshold: 54, symbol: 'Xe' },
    { threshold: 36, symbol: 'Kr' },
    { threshold: 18, symbol: 'Ar' },
    { threshold: 10, symbol: 'Ne' },
    { threshold: 2, symbol: 'He' }
  ];

  function fillConfiguration(targetNumber) {
    const occupancy = {};
    let remaining = targetNumber;

    for (const [principal, subshell] of order) {
      const key = `${principal}${subshell}`;
      const cap = capacities[subshell];
      const fill = Math.min(remaining, cap);
      occupancy[key] = fill;
      remaining -= fill;
      if (remaining <= 0) {
        break;
      }
    }

    if (exceptionMap[targetNumber]) {
      Object.assign(occupancy, exceptionMap[targetNumber]);
    }

    return occupancy;
  }

  const occupancy = fillConfiguration(number);
  let remaining = number;

  const config = Object.entries(occupancy)
    .filter(([, value]) => value > 0)
    .map(([key, value]) => `${key}${value}`)
    .join(' ');

  const nobleGas = nobleGasThresholds.find(({ threshold }) => number > threshold);
  if (!nobleGas) {
    return config;
  }

  const nobleConfig = fillConfiguration(nobleGas.threshold);
  const shorthand = nobleGas.symbol;
  const nobleEntries = Object.entries(nobleConfig)
    .filter(([, value]) => value > 0)
    .map(([key, value]) => `${key}${value}`);
  const currentEntries = Object.entries(occupancy)
    .filter(([, value]) => value > 0)
    .map(([key, value]) => `${key}${value}`);
  const remainingConfig = currentEntries.slice(nobleEntries.length).join(' ');
  return `[${shorthand}]${remainingConfig ? ` ${remainingConfig}` : ''}`;
}

function getCategoryLabel(category) {
  return categoryLabels[category] || 'Unknown';
}

function getSeries(element) {
  return element.series || 'Main table';
}

function getVisibleCells() {
  return Array.from(document.querySelectorAll('.element:not(.hidden)'));
}

function updateCellTabStops() {
  const visibleCells = getVisibleCells();
  visibleCells.forEach((cell) => {
    cell.tabIndex = Number(cell.dataset.atomic) === activeAtomicNumber ? 0 : -1;
  });
}

function getCompareStats(element) {
  return {
    mass: getAtomicMass(element.number),
    block: getBlockLabel(element.block || 'f'),
    en: getElectronegativity(element.number),
    ox: getOxidationStates(element)
  };
}

function updateCompareButtonState() {
  if (!els.compareToggle) {
    return;
  }

  const selected = compareSelection.includes(activeAtomicNumber);
  els.compareToggle.textContent = selected ? 'Remove From Compare' : 'Add To Compare';
  els.compareToggle.setAttribute('aria-pressed', selected ? 'true' : 'false');
}

function renderCompare() {
  if (!els.compareList || !els.compareHint) {
    return;
  }

  if (compareSelection.length === 0) {
    els.compareHint.textContent = 'Add at least 2 elements to start comparing.';
    els.compareList.innerHTML = '';
    updateCompareButtonState();
    return;
  }

  if (compareSelection.length === 1) {
    els.compareHint.textContent = 'Add one more element for side-by-side comparison.';
  } else {
    els.compareHint.textContent = `Comparing ${compareSelection.length} elements.`;
  }

  els.compareList.innerHTML = compareSelection.map((atomicNumber) => {
    const element = elements.find((entry) => entry.number === atomicNumber);
    if (!element) {
      return '';
    }
    const stats = getCompareStats(element);
    return `
      <article class="compare-item" data-atomic="${element.number}">
        <div class="compare-item-head">
          <strong>${element.name} (${element.symbol})</strong>
          <button type="button" data-remove-atomic="${element.number}" aria-label="Remove ${element.name} from compare">×</button>
        </div>
        <dl>
          <div><dt>Atomic Mass</dt><dd>${stats.mass}</dd></div>
          <div><dt>Block</dt><dd>${stats.block}</dd></div>
          <div><dt>Electronegativity</dt><dd>${stats.en}</dd></div>
          <div><dt>Oxidation States</dt><dd>${stats.ox}</dd></div>
        </dl>
      </article>
    `;
  }).join('');

  updateCompareButtonState();
}

function toggleCompare(number = activeAtomicNumber) {
  if (!number) {
    return;
  }

  if (compareSelection.includes(number)) {
    compareSelection = compareSelection.filter((entry) => entry !== number);
    renderCompare();
    return;
  }

  if (compareSelection.length >= 3) {
    compareSelection = [...compareSelection.slice(1), number];
  } else {
    compareSelection = [...compareSelection, number];
  }
  renderCompare();
}

function moveGridFocus(currentCell, direction) {
  const row = Number(currentCell.dataset.row);
  const col = Number(currentCell.dataset.col);
  const cells = getVisibleCells().map((cell) => ({
    row: Number(cell.dataset.row),
    col: Number(cell.dataset.col),
    cell
  }));

  let next;
  if (direction === 'ArrowRight') {
    next = cells.filter((item) => item.row === row && item.col > col).sort((a, b) => a.col - b.col)[0];
  }
  if (direction === 'ArrowLeft') {
    const matches = cells.filter((item) => item.row === row && item.col < col).sort((a, b) => b.col - a.col);
    next = matches[0];
  }
  if (direction === 'ArrowDown') {
    next = cells.filter((item) => item.col === col && item.row > row).sort((a, b) => a.row - b.row)[0];
  }
  if (direction === 'ArrowUp') {
    const matches = cells.filter((item) => item.col === col && item.row < row).sort((a, b) => b.row - a.row);
    next = matches[0];
  }

  if (!next) {
    return;
  }

  const nextAtomic = Number(next.cell.dataset.atomic);
  activeAtomicNumber = nextAtomic;
  updateCellTabStops();
  next.cell.focus();
}

function createCell(element) {
  const category = getCategory(element);
  const card = document.createElement('button');
  card.type = 'button';
  card.className = `element ${category}`;
  card.dataset.atomic = String(element.number);
  card.dataset.category = category;
  card.dataset.period = String(element.period || '');
  card.dataset.block = element.block || '';
  card.dataset.state = getState(element);
  card.dataset.search = `${element.number} ${element.symbol} ${element.name} ${getCategoryLabel(category)} ${getSeries(element)}`.toLowerCase();

  const row = element.series ? (element.series === 'Lanthanide' ? 9 : 10) : element.period + 1;
  const column = element.series ? 4 + (element.number - (element.series === 'Lanthanide' ? 58 : 90)) : element.group + 1;

  card.style.gridRow = row;
  card.style.gridColumn = column;
  card.dataset.row = String(row);
  card.dataset.col = String(column);
  card.id = `element-${element.number}`;
  card.setAttribute('role', 'gridcell');
  card.tabIndex = -1;
  card.setAttribute('aria-selected', 'false');
  card.setAttribute('aria-label', `${element.name}, atomic number ${element.number}`);

  card.innerHTML = `
    <div class="number">${element.number}</div>
    <div class="symbol">${element.symbol}</div>
    <div class="name">${element.name}</div>
  `;

  card.addEventListener('click', () => selectElement(element.number, true));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectElement(element.number, true);
      return;
    }

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      moveGridFocus(card, event.key);
    }
  });
  return card;
}

function updateInfo(element) {
  const category = getCategory(element);
  const state = getState(element);
  const categoryLabel = getCategoryLabel(category);
  const noteMap = {
    'alkali-metal': 'Highly reactive metals that form strong ionic compounds.',
    'alkaline-earth-metal': 'Reactive but more stable than alkali metals.',
    'transition-metal': 'Strong, shiny metals commonly used in alloys and catalysts.',
    'post-transition-metal': 'Soft metals with mixed metallic and nonmetallic behavior.',
    metalloid: 'Semiconducting elements that sit along the staircase boundary.',
    nonmetal: 'Light elements that commonly form covalent bonds.',
    halogen: 'Very reactive nonmetals that readily form salts.',
    'noble-gas': 'Chemically stable gases with filled valence shells.',
    lanthanide: 'Rare-earth metal with useful magnetic and optical properties.',
    actinide: 'Radioactive series known for nuclear chemistry.',
    unknown: 'Synthetic or less commonly classified element.'
  };

  els.infoName.textContent = element.name;
  els.infoAtomic.textContent = element.number;
  els.infoSymbol.textContent = element.symbol;
  els.infoCategory.textContent = categoryLabel;
  els.infoDescription.textContent = `${element.name} is element ${element.number}. Click other tiles to inspect the rest of the table.`;
  els.infoMass.textContent = getAtomicMass(element.number);
  els.infoGroup.textContent = element.group || '—';
  els.infoPeriod.textContent = element.period || '—';
  els.infoBlock.textContent = getBlockLabel(element.block || 'f');
  els.infoState.textContent = stateLabels[state] || 'Unknown';
  els.infoEN.textContent = getElectronegativity(element.number);
  els.infoOx.textContent = getOxidationStates(element);
  els.infoConfig.textContent = buildElectronConfiguration(element.number);
  els.infoNote.textContent = noteMap[category] || noteMap.unknown;
}

function selectElement(number, animate = false) {
  activeAtomicNumber = number;
  document.querySelectorAll('.element').forEach((cell) => {
    const active = Number(cell.dataset.atomic) === number;
    cell.classList.toggle('active', active);
    cell.setAttribute('aria-selected', active ? 'true' : 'false');
    if (animate && active) {
      cell.classList.remove('pop');
      void cell.offsetWidth;
      cell.classList.add('pop');
    }
  });

  const element = elements.find((entry) => entry.number === number);
  if (element) {
    updateInfo(element);
    updateCellTabStops();
    updateCompareButtonState();
    updateFavoriteButtonState();
    if (els.grid) {
      els.grid.setAttribute('aria-activedescendant', `element-${number}`);
    }
    openDrawer();
  }
}

function applyFilters() {
  const query = currentFilters.query;
  const cells = document.querySelectorAll('.element');
  let visible = 0;
  const matches = [];

  cells.forEach((cell) => {
    const atomic = Number(cell.dataset.atomic);
    const category = cell.dataset.category;
    const period = cell.dataset.period;
    const block = cell.dataset.block;
    const state = cell.dataset.state;
    const element = elements.find((entry) => entry.number === atomic);
    const searchHit = !query || cell.dataset.search.includes(query);
    const categoryHit = currentFilters.category === 'all' || category === currentFilters.category;
    const periodHit = currentFilters.period === 'all' || period === currentFilters.period;
    const blockHit = currentFilters.block === 'all' || block === currentFilters.block;
    const stateHit = currentFilters.state === 'all' || state === currentFilters.state;
    const match = searchHit && categoryHit && periodHit && blockHit && stateHit;

    cell.classList.toggle('hidden', !match);
    cell.classList.toggle('match', searchHit && query.length > 0);

    if (match) {
      visible += 1;
    }

    if (searchHit && query.length > 0 && element) {
      matches.push(element);
    }
  });

  els.statusText.textContent = query || currentFilters.category !== 'all' || currentFilters.period !== 'all' || currentFilters.block !== 'all' || currentFilters.state !== 'all'
    ? `${visible} element${visible === 1 ? '' : 's'} shown`
    : 'Showing all 118 elements';

  els.resultPills.innerHTML = [
    currentFilters.category !== 'all' ? `<span>Category: ${currentFilters.category}</span>` : '',
    currentFilters.period !== 'all' ? `<span>Period: ${currentFilters.period}</span>` : '',
    currentFilters.block !== 'all' ? `<span>Block: ${currentFilters.block}</span>` : '',
    currentFilters.state !== 'all' ? `<span>State: ${stateLabels[currentFilters.state] || currentFilters.state}</span>` : ''
  ].filter(Boolean).join('');

  renderSuggestions(matches.slice(0, 6));

  const activeCell = document.querySelector(`.element[data-atomic="${activeAtomicNumber}"]`);
  if (activeCell && activeCell.classList.contains('hidden')) {
    const firstVisible = getVisibleCells()[0];
    if (firstVisible) {
      activeAtomicNumber = Number(firstVisible.dataset.atomic);
      const firstElement = elements.find((entry) => entry.number === activeAtomicNumber);
      if (firstElement) {
        selectElement(firstElement.number, false);
      }
    }
  }
  updateCellTabStops();
}

function renderSuggestions(matches) {
  if (!currentFilters.query || !matches.length) {
    els.suggestions.innerHTML = '';
    els.suggestions.classList.remove('visible');
    return;
  }

  els.suggestions.innerHTML = matches.map((element) => `
    <button class="suggestion-item" data-atomic="${element.number}" type="button" role="option" aria-selected="false">
      ${element.name} <small>${element.symbol} · #${element.number}</small>
    </button>
  `).join('');
  els.suggestions.classList.add('visible');

  els.suggestions.querySelectorAll('.suggestion-item').forEach((button) => {
    button.addEventListener('click', () => {
      const atomic = Number(button.dataset.atomic);
      const element = elements.find((entry) => entry.number === atomic);
      if (element) {
        els.searchInput.value = element.name;
        currentFilters.query = element.name.toLowerCase();
        applyFilters();
        selectElement(atomic, true);
      }
      els.suggestions.classList.remove('visible');
    });
  });
}

function buildLegend() {
  els.legend.innerHTML = legendOrder.map(([className, label]) => `
    <div class="legend-item">
      <span class="swatch ${className}"></span>
      <span>${label}</span>
    </div>
  `).join('');
}

function buildGrid() {
  for (let group = 1; group <= 18; group += 1) {
    const label = document.createElement('div');
    label.className = 'group-label';
    label.style.gridColumn = group + 1;
    label.style.gridRow = 1;
    label.textContent = group;
    els.grid.appendChild(label);
  }

  for (let period = 1; period <= 7; period += 1) {
    const label = document.createElement('div');
    label.className = 'period-label';
    label.style.gridColumn = 1;
    label.style.gridRow = period + 1;
    label.textContent = `P${period}`;
    els.grid.appendChild(label);
  }

  const lanthLabel = document.createElement('div');
  lanthLabel.className = 'fblock-label';
  lanthLabel.style.gridColumn = '1 / span 3';
  lanthLabel.style.gridRow = 9;
  lanthLabel.textContent = 'Lanthanides';
  els.grid.appendChild(lanthLabel);

  const actLabel = document.createElement('div');
  actLabel.className = 'fblock-label';
  actLabel.style.gridColumn = '1 / span 3';
  actLabel.style.gridRow = 10;
  actLabel.textContent = 'Actinides';
  els.grid.appendChild(actLabel);

  const mainOrder = elements.filter((element) => !element.series);
  const fBlockOrder = elements.filter((element) => element.series);

  mainOrder.forEach((element) => els.grid.appendChild(createCell(element)));
  fBlockOrder.forEach((element) => els.grid.appendChild(createCell(element)));
}

function updateStats() {
  els.totalCount.textContent = '118';
  els.categoryCount.textContent = `${new Set(elements.map((element) => getCategory(element))).size} categories`;
  els.yearCount.textContent = '1669 - 2016';
  els.footerDate.textContent = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function populateFilterOptions() {
  const categories = [...new Set(elements.map((element) => getCategory(element)))].sort();
  const periods = [...new Set(elements.map((element) => element.period).filter(Boolean))].sort((a, b) => a - b);
  const blocks = [...new Set(elements.map((element) => element.block).filter(Boolean))].sort();
  const states = ['solid', 'liquid', 'gas', 'unknown'];

  els.filterCategory.innerHTML += categories.map((category) => `<option value="${category}">${categoryLabels[category] || category}</option>`).join('');
  els.filterPeriod.innerHTML += periods.map((period) => `<option value="${period}">Period ${period}</option>`).join('');
  els.filterBlock.innerHTML += blocks.map((block) => `<option value="${block}">${block}-block</option>`).join('');
  els.filterState.innerHTML += states.map((state) => `<option value="${state}">${stateLabels[state]}</option>`).join('');
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('periodic-table-theme', theme);
  els.themeToggle.textContent = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
}

function initTheme() {
  const savedTheme = localStorage.getItem('periodic-table-theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));
}

function bindEvents() {
  els.searchInput.addEventListener('input', () => {
    currentFilters.query = els.searchInput.value.trim().toLowerCase();
    applyFilters();
  });

  [els.filterCategory, els.filterPeriod, els.filterBlock, els.filterState].forEach((input) => {
    input.addEventListener('change', () => {
      currentFilters.category = els.filterCategory.value;
      currentFilters.period = els.filterPeriod.value;
      currentFilters.block = els.filterBlock.value;
      currentFilters.state = els.filterState.value;
      applyFilters();
    });
  });

  els.themeToggle.addEventListener('click', () => {
    setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light');
  });

  if (els.infoToggle) {
    els.infoToggle.addEventListener('click', openDrawer);
  }

  if (els.drawerClose) {
    els.drawerClose.addEventListener('click', closeDrawer);
  }

  if (els.drawerCloseTop) {
    els.drawerCloseTop.addEventListener('click', closeDrawer);
  }

  if (els.compareToggle) {
    els.compareToggle.addEventListener('click', () => toggleCompare(activeAtomicNumber));
  }

  if (els.compareClear) {
    els.compareClear.addEventListener('click', () => {
      compareSelection = [];
      renderCompare();
    });
  }

  if (els.favoriteToggle) {
    els.favoriteToggle.addEventListener('click', () => toggleFavorite(activeAtomicNumber));
  }

  if (els.favoritesClear) {
    els.favoritesClear.addEventListener('click', () => {
      favoriteSelection = [];
      saveFavorites();
      renderFavorites();
      updateFavoriteButtonState();
    });
  }

  if (els.favoritesList) {
    els.favoritesList.addEventListener('click', (event) => {
      const removeButton = event.target.closest('[data-remove-favorite]');
      if (removeButton) {
        const atomic = Number(removeButton.getAttribute('data-remove-favorite'));
        favoriteSelection = favoriteSelection.filter((entry) => entry !== atomic);
        saveFavorites();
        renderFavorites();
        updateFavoriteButtonState();
      }
    });
  }

  if (els.quizStart) {
    els.quizStart.addEventListener('click', startQuiz);
  }

  if (els.quizNext) {
    els.quizNext.addEventListener('click', nextQuizQuestion);
  }

  if (els.compareList) {
    els.compareList.addEventListener('click', (event) => {
      const removeButton = event.target.closest('[data-remove-atomic]');
      if (removeButton) {
        const atomic = Number(removeButton.getAttribute('data-remove-atomic'));
        compareSelection = compareSelection.filter((entry) => entry !== atomic);
        renderCompare();
        return;
      }

      const compareItem = event.target.closest('.compare-item');
      if (compareItem) {
        const atomic = Number(compareItem.dataset.atomic);
        selectElement(atomic, true);
      }
    });
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-wrap')) {
      els.suggestions.classList.remove('visible');
    }

    if (event.target === document.body) {
      closeDrawer();
    }
  });

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const typingField = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    if (typingField && event.key !== '/') {
      return;
    }

    if (event.key === '/' && !typingField) {
      event.preventDefault();
      els.searchInput.focus();
      els.searchInput.select();
      return;
    }

    if (typingField) {
      return;
    }

    if (event.key === 'c' || event.key === 'C') {
      event.preventDefault();
      toggleCompare(activeAtomicNumber);
      return;
    }

    if (event.key === 'f' || event.key === 'F') {
      event.preventDefault();
      toggleFavorite(activeAtomicNumber);
      return;
    }

    if (event.key === 'Escape') {
      closeDrawer();
    }
  });
}

function init() {
  if (els.suggestions) {
    els.suggestions.setAttribute('role', 'listbox');
  }

  if (els.sidebarDrawer) {
    els.sidebarDrawer.setAttribute('aria-hidden', 'true');
  }

  loadFavorites();
  populateFilterOptions();
  buildGrid();
  buildLegend();
  renderCompare();
  renderFavorites();
  updateQuizScore();
  updateQuizNextState();
  updateStats();
  initTheme();
  bindEvents();
  selectElement(activeAtomicNumber);
  applyFilters();
  closeDrawer();
}

init();
