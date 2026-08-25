/**
 * Single source of truth for banana fiber product + technical data.
 *
 * Technical values follow EcoFiber BD Technical Data Sheet
 * EFBD-TDS-BF-001, Rev. 01 (16 June 2026) — Natural Banana Pseudo-Stem
 * Fiber (Musa spp.). Values are typical/reference ranges compiled from
 * published textile-fiber literature, not batch-specific lab results.
 *
 * No prices are published on the site — all commercial terms are quoted
 * per enquiry via /quote.
 */

export const TDS = {
  docNo: 'EFBD-TDS-BF-001',
  revision: 'Rev. 01',
  issueDate: '16 June 2026',
  origin: 'Bangladesh',
}

/** Shown wherever reference values are displayed, so buyers know the basis. */
export const DATA_SOURCE_NOTE =
  'Values shown are typical/reference properties for banana pseudo-stem fiber, compiled from published textile-fiber research. They represent expected ranges for this fiber type, not batch-specific lab results. Batch-specific Certificates of Analysis (COA) can be issued once a shipment or sample lot has been tested — in-house or via a third-party lab (SGS, Intertek, Bureau Veritas, or a local textile testing institute) — and we recommend this for first orders or contract-critical specifications.'

export const PHYSICAL_PROPERTIES = [
  ['Fiber diameter', '80 – 250 µm'],
  ['Fiber length (extracted strand)', '36 inches (~914 mm)'],
  ['Linear density / fineness', '6.8 – 66.3 tex'],
  ['Density', '1.2 – 1.35 g/cm³'],
  ['Moisture content', '10 – 13%'],
  ['Moisture regain', '~10 – 13%'],
  ['Color', 'Off-white to yellowish-brown'],
  ['Luster', 'Silky sheen'],
]

export const MECHANICAL_PROPERTIES = [
  ['Tensile strength', '500 – 900 MPa'],
  ["Young's modulus", '8 – 32 GPa'],
  ['Elongation at break', '1.0 – 3.5%'],
]

export const CHEMICAL_COMPOSITION = [
  ['Cellulose', '60 – 65%'],
  ['Hemicellulose', '18 – 19%'],
  ['Lignin', '5 – 10%'],
  ['Pectin', '3 – 5%'],
  ['Ash content', '1 – 5%'],
  ['Wax content', '< 1%'],
]

export const AVAILABLE_FORMS = [
  'Raw fiber strands (undyed, natural color) — for handicraft, cordage, and rope',
  'Combed fiber — for spinning and blended-yarn textile use',
  'Chopped/short fiber (custom cut length) — for paper pulp and composite reinforcement',
  'Fiber tow/bundle, coil, or baled form — for bulk export',
]

export const APPLICATIONS = [
  'Natural fiber textiles, apparel blends, and home furnishings',
  'Rope, twine, and cordage',
  'Handicrafts, bags, and eco-friendly packaging',
  'Paper and pulp manufacturing',
  'Reinforcement fiber for natural-fiber composites (automotive, panels, molded parts)',
]

export const QUALITY_STATEMENT =
  'EcoFiber BD sources fiber from multiple regional extraction partners. Natural variation in color, diameter, and strength between lots should be expected, consistent with natural fiber norms. We are actively building standardized in-house quality control and welcome buyer-specified testing, third-party inspection, or pre-shipment sampling for any order.'

export const STORAGE_HANDLING = [
  'Store in a cool, dry place away from direct moisture and sunlight',
  'Keep bales off the ground on pallets to prevent moisture uptake',
  'Natural fiber — avoid prolonged exposure to high humidity to prevent mold',
]

/** Commercial grades. Lengths are EcoFiber BD sorting grades; technical
 *  properties above apply to all grades. */
export const PRODUCTS = [
  {
    id: 1,
    name: 'Grade A Premium Banana Fiber',
    grade: 'Grade A',
    accent: '#39962c',
    img: '/Images/Banana_fiber_Grade A.jpg',
    fiber_length_cm: '90–120',
    moisture_content_percent: '10–13',
    description:
      'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production. Mechanically extracted from the banana pseudo-stem, then washed and sun-dried to preserve its natural silky sheen and strength.',
    applications: [
      'Fine Textiles & "Banana Silk"',
      'Sarees & Blended Garments',
      'High-Quality Paper',
      'Currency & Archival Paper',
      'Tea Bag Production',
    ],
  },
  {
    id: 2,
    name: 'Grade B Standard Banana Fiber',
    grade: 'Grade B',
    accent: '#8dc63f',
    img: '/Images/Banana_fiber_Grade B.jpeg',
    fiber_length_cm: '60–90',
    moisture_content_percent: '10–13',
    description:
      'Mid-grade fiber for home furnishings, handicrafts, blended textiles, and general manufacturing. An excellent balance of strength and workability.',
    applications: [
      'Curtains & Table Mats',
      'Cushion Covers & Upholstery',
      'Baskets & Bags',
      'Hats & Carpets',
      'Decorative Wall Hangings',
    ],
  },
  {
    id: 3,
    name: 'Grade C Industrial Banana Fiber',
    grade: 'Grade C',
    accent: '#37593b',
    img: '/Images/Banana_fiber_Grade C.jpeg',
    fiber_length_cm: '30–60',
    description:
      'Coarser industrial-grade fiber best suited for ropes, cordage, paper pulp, and biocomposite reinforcement.',
    moisture_content_percent: '10–13',
    applications: [
      'Rope, Twine & Cordage',
      'Paper & Pulp Manufacturing',
      'Biocomposite Panels',
      'Automotive Reinforcement Fiber',
      'Construction Materials',
    ],
  },
]
