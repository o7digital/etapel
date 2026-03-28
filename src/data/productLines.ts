export interface ProductFamily {
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

export const productFamilies: ProductFamily[] = [
  {
    slug: 'pintura',
    title: 'Pintura',
    shortTitle: 'Pintura',
    href: '/linea-de-producto/pintura',
    menuDescription: 'Pistolas, consumibles y sistemas para procesos de pintura y acabado.',
    pageDescription:
      'Soluciones para pintura automotriz y repintado con equipos, consumibles y sistemas diseñados para mejorar el acabado, la productividad y la consistencia del taller.',
    image: '/images/category-pistolas.jpg',
    accent: 'from-sky-500/18 to-cyan-500/8',
    items: [
      'Pistolas de pintura',
      'Mascarillas y vaso RPS',
      'Sistema de lijado',
      'Sistema de pulido',
      'Consumibles'
    ]
  },
  {
    slug: 'cabinas-y-preparacion',
    title: 'Cabinas y Preparación',
    shortTitle: 'Cabinas y Preparación',
    href: '/linea-de-producto/cabinas-y-preparacion',
    menuDescription: 'Cabinas, cuartos de mezclado y espacios de preparación para repintado.',
    pageDescription:
      'Equipamiento para áreas de pintura y preparación con soluciones de cabinas, cuartos de mezclado y zonas de trabajo orientadas a la eficiencia y al control del proceso.',
    image: '/images/cabinas-preparacion.png',
    accent: 'from-blue-500/16 to-slate-500/8',
    items: [
      'Cabinas USI',
      'Cabinas Millibar',
      'Cuartos de mezclado',
      'Zonas de preparación',
      'Complementos'
    ]
  },
  {
    slug: 'soldadura-y-enderezado',
    title: 'Soldadura y Enderezado',
    shortTitle: 'Soldadura y Enderezado',
    href: '/linea-de-producto/soldadura-y-enderezado',
    menuDescription: 'Soldadoras, bancos y soluciones para reparación estructural y de carrocería.',
    pageDescription:
      'Tecnología para reparación y enderezado con equipos de soldadura, bancos y soluciones especializadas para trabajos de carrocería y estructura.',
    image: '/images/category-soldadoras.jpg',
    accent: 'from-amber-500/16 to-orange-500/8',
    items: [
      'Soldadoras',
      'Banco de enderezado',
      'Car-O-Liner',
      'Josam'
    ]
  },
  {
    slug: 'mecanica-y-aire',
    title: 'Mecánica y Aire',
    shortTitle: 'Mecánica y Aire',
    href: '/linea-de-producto/mecanica-y-aire',
    menuDescription: 'Mecánica, aire comprimido, infrarrojo y equipos complementarios.',
    pageDescription:
      'Líneas de apoyo para operación de taller con soluciones de mecánica, aire comprimido, secado, equipos de repintado y productos PPG.',
    image: '/images/mecanica-aire.jpg',
    accent: 'from-cyan-500/16 to-slate-500/8',
    items: [
      'Mecánica',
      'Aire comprimido',
      'Lámparas infrarrojo',
      'Otros equipos de repintado',
      'Pintura y productos PPG'
    ]
  }
];
