export interface ProductFamilyEn {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  menuDescription: string;
  pageDescription: string;
  image: string;
  accent: string;
  items: string[];
}

export const productFamiliesEn: ProductFamilyEn[] = [
  {
    slug: 'paint',
    title: 'Paint',
    shortTitle: 'Paint',
    href: '/en/product-line/paint',
    menuDescription: 'Spray guns, consumables, and systems for paint and finishing workflows.',
    pageDescription:
      'Solutions for automotive painting and refinishing with equipment, consumables, and systems designed to improve finish quality, productivity, and process consistency.',
    image: '/images/category-pistolas.webp',
    accent: 'from-sky-500/18 to-cyan-500/8',
    items: [
      'Spray guns',
      'Respirators and RPS cups',
      'Sanding system',
      'Polishing system',
      'Consumables'
    ]
  },
  {
    slug: 'booths-and-preparation',
    title: 'Booths & Preparation',
    shortTitle: 'Booths & Prep',
    href: '/en/product-line/booths-and-preparation',
    menuDescription: 'Paint booths, mixing rooms, and prep areas for refinishing operations.',
    pageDescription:
      'Equipment for paint and preparation areas with booth solutions, mixing rooms, and work zones focused on process control and operational efficiency.',
    image: '/images/cabinas-preparacion.webp',
    accent: 'from-blue-500/16 to-slate-500/8',
    items: [
      'USI booths',
      'Millibar booths',
      'Mixing rooms',
      'Prep zones',
      'Accessories'
    ]
  },
  {
    slug: 'welding-and-straightening',
    title: 'Welding & Straightening',
    shortTitle: 'Welding',
    href: '/en/product-line/welding-and-straightening',
    menuDescription: 'Welders, benches, and solutions for structural and body repair.',
    pageDescription:
      'Repair and straightening technology with welding equipment, benches, and specialized solutions for body and structural work.',
    image: '/images/category-soldadoras.webp',
    accent: 'from-amber-500/16 to-orange-500/8',
    items: ['Welders', 'Straightening bench', 'Car-O-Liner', 'Josam']
  },
  {
    slug: 'mechanics-and-air',
    title: 'Mechanics & Air',
    shortTitle: 'Mechanics & Air',
    href: '/en/product-line/mechanics-and-air',
    menuDescription: 'Mechanical tools, compressed air, infrared, and supporting equipment.',
    pageDescription:
      'Support lines for workshop operations with solutions for mechanics, compressed air, drying, refinishing equipment, and PPG products.',
    image: '/images/mecanica-aire.webp',
    accent: 'from-cyan-500/16 to-slate-500/8',
    items: [
      'Mechanical equipment',
      'Compressed air',
      'Infrared lamps',
      'Additional refinishing equipment',
      'PPG paint and products'
    ]
  }
];
