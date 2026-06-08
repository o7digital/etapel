import { sataImportedProducts } from './sataImportedProducts.ts';
import type { CatalogProduct, ProductOptionGroup } from './productTypes';
export type { CatalogProduct, ProductOptionGroup, ProductSpec, ProductVariant } from './productTypes';

export const productDetailPath = (product: CatalogProduct) =>
  `/linea-de-producto/productos/${product.slug}`;

const sataJetXDigitalPro = '/images/products/sata/product-jetx-digitalpro-es.png';
const sataJetXDigital = '/images/products/sata/product-jetx-digital-es.png';
const sataJetXDigitalReady = '/images/products/sata/product-jetx-digitalready-es.png';
const sataJetXMain = '/images/products/sata/jet-x/1200394-main.webp';
const sataJetXPt01 = '/images/products/sata/jet-x/1200394-pt01.webp';
const sataJetXPt02 = '/images/products/sata/jet-x/1200394-pt02.webp';
const sataJetXPt03 = '/images/products/sata/jet-x/1200394-pt03.webp';
const sataJetXPt04 = '/images/products/sata/jet-x/1200394-pt04.webp';
const sataJetXPt05 = '/images/products/sata/jet-x/1200394-pt05.webp';
const sataJetXGallery = [sataJetXMain, sataJetXPt01, sataJetXPt02, sataJetXPt03, sataJetXPt04, sataJetXPt05];
const sataCatalogImage = (slug: string) => `/images/products/sata/catalog/${slug}.webp`;

const jetXOptions: ProductOptionGroup[] = [
  {
    label: 'Forma del abanico',
    options: [
      { label: '10X40', disabled: true },
      { label: 'I (Control)', selected: true },
      { label: 'O (Speed)' }
    ]
  },
  {
    label: 'Tamaño de la boquilla',
    options: [
      { label: '1,1' },
      { label: '1,2', selected: true },
      { label: '1,3' },
      { label: '1,4' },
      { label: '10X40', disabled: true }
    ]
  },
  {
    label: 'Tecnología de boquillas',
    help: '¿Qué tecnología de boquilla es la adecuada para mí?',
    options: [{ label: 'HVLP' }, { label: 'RP', selected: true }]
  },
  {
    label: 'Versión de unidad digital',
    help: '¿Qué unidad digital es la adecuada para mí?',
    options: [
      { label: 'BASIC' },
      { label: 'DIGITAL' },
      { label: 'DIGITAL pro', selected: true },
      { label: 'DIGITAL ready' }
    ]
  }
];

const curatedCatalogProducts: CatalogProduct[] = [
  {
    slug: 'sata-jet-x',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'RP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Base color y transparente',
    name: 'SATA jet X',
    summary: 'Pistola premium para repintado automotriz con tecnología de boquilla X.',
    description:
      'Solución profesional para talleres que buscan acabado controlado, aplicación repetible y una selección clara entre configuraciones HVLP o RP. Etapel la presenta como parte de su oferta SATA para procesos de repintado de alto nivel.',
    image: sataCatalogImage('jet-x'),
    gallery: sataJetXGallery,
    badges: ['HVLP / RP', 'Digital', 'Premium'],
    specs: [
      { label: 'Aplicación', value: 'Fondos, bases y barnices' },
      { label: 'Tecnología', value: 'HVLP o RP según configuración' },
      { label: 'Orientación', value: 'Acabado fino y repetible' },
      { label: 'Soporte', value: 'Asesoría Etapel para selección' }
    ],
    variants: [
      { name: 'HVLP', note: 'Orientada a eficiencia de transferencia.' },
      { name: 'RP', note: 'Orientada a velocidad de aplicación.' },
      { name: 'DIGITAL', note: 'Configuración con medición de presión.' }
    ],
    optionGroups: jetXOptions,
    highlights: [
      'Configuración para trabajos de acabado exigente.',
      'Opciones para adaptar el equipo al proceso del taller.',
      'Acompañamiento Etapel para elegir boquilla, tecnología y accesorios.'
    ],
    highlightSlides: [
      'Convence por un sistema de flujo de aire estable y una pulverización fina, homogénea y controlada.',
      'Precisión digital para ajustar la presión y mejorar la reproducibilidad del trabajo.',
      'Las opciones de abanico, boquilla, tecnología y unidad digital ayudan a configurar el equipo para cada proceso.'
    ],
    detailBlocks: [
      {
        title: 'Uso recomendado',
        body: 'Procesos de pintura automotriz donde la estabilidad del abanico, el control de material y la repetibilidad del acabado son críticos.'
      },
      {
        title: 'Cómo lo trabaja Etapel',
        body: 'El producto se puede cotizar junto con vasos, filtración de aire, protección respiratoria y consumibles para integrar la estación completa.'
      }
    ],
    downloads: ['Ficha técnica', 'Manual de operación', 'Guía de selección de boquillas'],
    spareParts: ['Kit de boquilla', 'Juntas', 'Vaso y accesorios', 'Repuestos de mantenimiento']
  },
  {
    slug: 'satajet-x-5500',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Repintado automotriz',
    name: 'SATAjet X 5500',
    summary: 'Pistola para procesos de repintado que prioriza transferencia, ergonomía y consistencia.',
    description:
      'Equipo para aplicación profesional de pintura en talleres que necesitan control del acabado, comodidad en uso continuo y compatibilidad con flujos modernos de repintado.',
    image: sataCatalogImage('satajet-x-5500'),
    gallery: [sataCatalogImage('satajet-x-5500')],
    badges: ['Pintura', 'Repintado', 'Ergonomía'],
    specs: [
      { label: 'Uso', value: 'Base color y transparente' },
      { label: 'Proceso', value: 'Repintado automotriz' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Servicio', value: 'Cotización y soporte Etapel' }
    ],
    variants: [
      { name: 'I-nozzle', note: 'Aplicación con abanico más paralelo.' },
      { name: 'O-nozzle', note: 'Aplicación con abanico más ovalado.' }
    ],
    highlights: [
      'Diseñada para trabajos diarios de repintado.',
      'Opciones de configuración según material y preferencia del pintor.',
      'Compatible con un sistema completo de aire, vaso y protección.'
    ],
    detailBlocks: [
      {
        title: 'Selección de configuración',
        body: 'La elección depende del material, presión, técnica de aplicación y tipo de acabado esperado. Etapel puede orientar esa selección.'
      },
      {
        title: 'Sistema recomendado',
        body: 'Para mejores resultados, conviene revisarla junto con filtración de aire, vasos RPS y preparación del área de aplicación.'
      }
    ]
  },
  {
    slug: 'sata-rps',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Vasos y consumibles',
    technology: 'Consumible',
    sprayPattern: 'Standard',
    nozzleTechnology: 'No aplica',
    interest: 'Sistemas de depósitos',
    application: 'Preparación y aplicación',
    name: 'SATA RPS',
    summary: 'Sistema de vasos multiuso para mezclar, pintar, rellenar y almacenar.',
    description:
      'Consumible pensado para simplificar el flujo de pintura y reducir pasos entre mezcla, aplicación y almacenamiento temporal del material.',
    image: sataJetXDigitalReady,
    gallery: [sataJetXDigitalReady],
    badges: ['Consumible', 'RPS', 'Proceso'],
    specs: [
      { label: 'Formato', value: 'Sistema de vaso multiuso' },
      { label: 'Área', value: 'Preparación y aplicación' },
      { label: 'Objetivo', value: 'Eficiencia operativa' },
      { label: 'Uso', value: 'Pintura, barniz y materiales compatibles' }
    ],
    variants: [
      { name: 'Tamaños varios', note: 'Selección según consumo y operación.' },
      { name: 'Accesorios', note: 'Tapas, filtros y complementos según necesidad.' }
    ],
    highlights: [
      'Integra varias etapas del proceso en un solo sistema.',
      'Ayuda a mantener orden en el área de preparación.',
      'Puede cotizarse como consumible recurrente para taller.'
    ],
    detailBlocks: [
      {
        title: 'Uso en taller',
        body: 'Recomendado para operaciones que necesitan velocidad, limpieza y control en la preparación de material.'
      },
      {
        title: 'Compra recurrente',
        body: 'Etapel puede ayudar a definir consumos estimados según volumen de trabajo y tipo de reparación.'
      }
    ]
  },
  {
    slug: 'satajet-1000-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Acabados y aplicaciones versátiles',
    name: 'SATAjet 1000 B',
    summary: 'Pistola versátil para aplicaciones de pintura, barniz y materiales de acabado.',
    description:
      'Equipo orientado a talleres que necesitan una pistola flexible para diferentes materiales y procesos de acabado.',
    image: sataCatalogImage('satajet-1000-b'),
    gallery: [sataCatalogImage('satajet-1000-b')],
    badges: ['Gravedad', 'HVLP / RP', 'Versátil'],
    specs: [
      { label: 'Aplicación', value: 'Acabados y materiales diversos' },
      { label: 'Tecnología', value: 'HVLP / RP según configuración' },
      { label: 'Forma del abanico', value: 'I (Control)' },
      { label: 'Soporte', value: 'Cotización Etapel' }
    ],
    variants: [
      { name: 'HVLP', note: 'Para mayor eficiencia de transferencia.' },
      { name: 'RP', note: 'Para mayor velocidad de aplicación.' }
    ],
    highlights: ['Uso versátil en taller.', 'Configuraciones para varios materiales.', 'Compatible con asesoría técnica Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicaciones de pintura y barniz donde se requiere flexibilidad.' },
      { title: 'Asesoría', body: 'Etapel puede orientar la selección según material y proceso.' }
    ]
  },
  {
    slug: 'satajet-100-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'RP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Aplicación rápida de acabado',
    name: 'SATAjet 100 B',
    summary: 'Pistola con vaso de gravedad para procesos de acabado eficientes.',
    description:
      'Opción para trabajos que requieren una aplicación directa y controlada dentro del flujo de repintado.',
    image: sataCatalogImage('satajet-100-b'),
    gallery: [sataCatalogImage('satajet-100-b')],
    badges: ['Gravedad', 'RP', 'Acabado'],
    specs: [
      { label: 'Aplicación', value: 'Acabado general' },
      { label: 'Tecnología', value: 'RP' },
      { label: 'Forma del abanico', value: 'O (Speed)' },
      { label: 'Servicio', value: 'Etapel distribuidor' }
    ],
    variants: [{ name: 'RP', note: 'Configuración para aplicación rápida.' }],
    highlights: ['Aplicación eficiente.', 'Formato con vaso de gravedad.', 'Integrable con consumibles SATA.'],
    detailBlocks: [
      { title: 'Proceso', body: 'Pensada para trabajos de acabado y reparación con buena velocidad de aplicación.' },
      { title: 'Integración', body: 'Puede acompañarse con vaso, filtro y protección respiratoria.' }
    ]
  },
  {
    slug: 'sataminijet-4400-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP',
    sprayPattern: 'Standard',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas aerográficas',
    application: 'Spot repair y piezas pequeñas',
    name: 'SATAminijet 4400 B',
    summary: 'Pistola compacta para reparaciones puntuales, piezas pequeñas y trabajos de precisión.',
    description:
      'Herramienta compacta para aplicaciones donde el control en áreas pequeñas es más importante que el volumen de material.',
    image: sataCatalogImage('sataminijet-4400-b'),
    gallery: [sataCatalogImage('sataminijet-4400-b')],
    badges: ['Compacta', 'HVLP', 'Spot repair'],
    specs: [
      { label: 'Aplicación', value: 'Spot repair' },
      { label: 'Tecnología', value: 'HVLP' },
      { label: 'Formato', value: 'Compacto' },
      { label: 'Uso', value: 'Piezas pequeñas' }
    ],
    variants: [{ name: 'HVLP', note: 'Configuración compacta para precisión.' }],
    highlights: ['Control en áreas pequeñas.', 'Ideal para reparaciones puntuales.', 'Complementa pistolas de mayor formato.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Spot repair, detalles y piezas pequeñas.' },
      { title: 'Selección', body: 'Etapel puede recomendarla como complemento de una línea de pintura principal.' }
    ]
  },
  {
    slug: 'satajet-20-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'RP',
    sprayPattern: 'Standard',
    nozzleTechnology: 'RP',
    interest: 'Pistolas aerográficas',
    application: 'Diseño y aplicaciones especiales',
    name: 'SATAjet 20 B',
    summary: 'Pistola para trabajos de diseño, efectos y aplicaciones especiales.',
    description:
      'Pensada para aplicaciones creativas y procesos donde la precisión visual y el control del patrón son relevantes.',
    image: sataCatalogImage('satajet-20-b'),
    gallery: [sataCatalogImage('satajet-20-b')],
    badges: ['Diseño', 'RP', 'Especial'],
    specs: [
      { label: 'Aplicación', value: 'Diseño y efectos' },
      { label: 'Tecnología', value: 'RP' },
      { label: 'Forma del abanico', value: 'Standard' },
      { label: 'Proceso', value: 'Aplicaciones especiales' }
    ],
    variants: [{ name: 'RP', note: 'Orientada a control y respuesta rápida.' }],
    highlights: ['Uso para diseño.', 'Control de aplicación.', 'Compatible con procesos especiales.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicaciones de diseño, personalización y efectos.' },
      { title: 'Asesoría', body: 'Etapel puede orientar según material y acabado esperado.' }
    ]
  },
  {
    slug: 'satajet-x-5500-phaser',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'RP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Acabado premium',
    name: 'SATAjet X 5500 PHASER',
    summary: 'Pistola de edición premium para acabados profesionales de alta exigencia.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('satajet-x-5500-phaser'),
    gallery: [sataCatalogImage('satajet-x-5500-phaser')],
    badges: ['Gravedad', 'Premium', 'HVLP / RP'],
    specs: [
      { label: 'Aplicación', value: 'Acabado automotriz' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'Configuración SATA', note: 'Selección según boquilla, tecnología y proceso.' }],
    highlights: ['Producto SATA para acabados profesionales.', 'Disponible para cotización con Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicaciones de pintura automotriz con alto requerimiento de acabado.' },
      { title: 'Asesoría Etapel', body: 'Etapel orienta la selección según proceso, material y cabina.' }
    ]
  },
  {
    slug: 'satajet-5000-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Repintado automotriz',
    name: 'SATAjet 5000 B',
    summary: 'Pistola SATA para aplicaciones profesionales de repintado automotriz.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('satajet-5000-b'),
    gallery: [sataCatalogImage('satajet-5000-b')],
    badges: ['Gravedad', 'HVLP / RP', 'Repintado'],
    specs: [
      { label: 'Aplicación', value: 'Repintado automotriz' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'HVLP / RP', note: 'Configuración según flujo del taller.' }],
    highlights: ['Aplicación profesional.', 'Producto SATA para procesos de pintura.', 'Cotizable con Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicaciones profesionales de base y barniz.' },
      { title: 'Asesoría Etapel', body: 'Selección de configuración y accesorios compatibles.' }
    ]
  },
  {
    slug: 'satajet-1000-b-lignum-3',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'Standard',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Aplicación en madera y acabados',
    name: 'SATAjet 1000 B Lignum 3',
    summary: 'Pistola SATA orientada a aplicaciones de acabado en madera y superficies especiales.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('satajet-1000-b-lignum-3'),
    gallery: [sataCatalogImage('satajet-1000-b-lignum-3')],
    badges: ['Gravedad', 'Lignum', 'Acabado'],
    specs: [
      { label: 'Aplicación', value: 'Madera y acabados' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'Lignum', note: 'Configuración para acabados en madera.' }],
    highlights: ['Orientada a acabados en madera.', 'Producto SATA para procesos especializados.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicación de acabados en madera y superficies especiales.' },
      { title: 'Asesoría Etapel', body: 'Etapel puede orientar la configuración según material.' }
    ]
  },
  {
    slug: 'sata-spray-master-rp',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'RP',
    sprayPattern: 'Standard',
    nozzleTechnology: 'RP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Aplicación de alto desempeño',
    name: 'SATA spray master RP',
    summary: 'Pistola SATA RP para aplicaciones profesionales de alto desempeño.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('sata-spray-master-rp'),
    gallery: [sataCatalogImage('sata-spray-master-rp')],
    badges: ['RP', 'Pintura', 'SATA'],
    specs: [
      { label: 'Aplicación', value: 'Pintura profesional' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'RP', note: 'Configuración para aplicación rápida.' }],
    highlights: ['Tecnología RP.', 'Aplicación profesional.', 'Disponible para cotización Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Procesos donde se prioriza desempeño y rapidez de aplicación.' },
      { title: 'Asesoría Etapel', body: 'Selección del sistema según flujo del taller.' }
    ]
  },
  {
    slug: 'satajet-1500-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'I (Control)',
    nozzleTechnology: 'HVLP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Repintado y acabado',
    name: 'SATAjet 1500 B',
    summary: 'Pistola SATA con vaso de gravedad para repintado y aplicaciones de acabado.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('satajet-1500-b'),
    gallery: [sataCatalogImage('satajet-1500-b')],
    badges: ['Gravedad', 'HVLP / RP', 'Acabado'],
    specs: [
      { label: 'Aplicación', value: 'Repintado y acabado' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'HVLP / RP', note: 'Configuración según necesidad del proceso.' }],
    highlights: ['Pistola SATA de gravedad.', 'Aplicación profesional.', 'Cotizable con Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Aplicaciones de repintado y acabado general.' },
      { title: 'Asesoría Etapel', body: 'Selección de boquilla, vaso y consumibles compatibles.' }
    ]
  },
  {
    slug: 'satajet-3000-b',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    sprayPattern: 'O (Speed)',
    nozzleTechnology: 'RP',
    interest: 'Pistolas con vaso de gravedad',
    application: 'Repintado y acabado',
    name: 'SATAjet 3000 B',
    summary: 'Pistola SATA con vaso de gravedad para procesos de repintado y acabado.',
    description: 'Producto SATA de la línea de pistolas con vaso de gravedad disponible dentro del catálogo Etapel.',
    image: sataCatalogImage('satajet-3000-b'),
    gallery: [sataCatalogImage('satajet-3000-b')],
    badges: ['Gravedad', 'HVLP / RP', 'Pintura'],
    specs: [
      { label: 'Aplicación', value: 'Repintado y acabado' },
      { label: 'Familia', value: 'Pistolas con vaso de gravedad' },
      { label: 'Tecnología', value: 'HVLP / RP' },
      { label: 'Origen', value: 'Catálogo SATA' }
    ],
    variants: [{ name: 'HVLP / RP', note: 'Configuración según material y proceso.' }],
    highlights: ['Pistola SATA de gravedad.', 'Producto para aplicación profesional.', 'Disponible para cotización Etapel.'],
    detailBlocks: [
      { title: 'Uso recomendado', body: 'Procesos de repintado y acabado en taller.' },
      { title: 'Asesoría Etapel', body: 'Etapel puede orientar la selección de configuración y accesorios.' }
    ]
  },
  {
    slug: 'sata-air-star-f2',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Protección respiratoria',
    technology: 'Seguridad',
    sprayPattern: 'No aplica',
    nozzleTechnology: 'No aplica',
    interest: 'Protección respiratoria',
    application: 'Aplicación en cabina',
    name: 'SATA air star F 2.0',
    summary: 'Protección respiratoria para aplicaciones profesionales de pintura.',
    description:
      'Equipo de seguridad para procesos de repintado donde la protección del operador, comodidad y operación diaria tienen prioridad.',
    image: sataJetXDigitalReady,
    gallery: [sataJetXDigitalReady, sataJetXDigital, sataJetXDigitalPro],
    badges: ['Seguridad', 'Respiración', 'Pintura'],
    specs: [
      { label: 'Uso', value: 'Aplicación en cabina' },
      { label: 'Familia', value: 'Protección respiratoria' },
      { label: 'Enfoque', value: 'Seguridad del operador' },
      { label: 'Complemento', value: 'Sistema de pintura profesional' }
    ],
    variants: [
      { name: 'Kit de protección', note: 'Configuración según operación.' },
      { name: 'Consumibles', note: 'Reposición según uso y mantenimiento.' }
    ],
    highlights: [
      'Forma parte del sistema de seguridad de pintura.',
      'Ayuda a profesionalizar el proceso de aplicación.',
      'Se puede integrar con asesoría de cabina y operación.'
    ],
    detailBlocks: [
      {
        title: 'Seguridad operativa',
        body: 'La protección respiratoria debe evaluarse junto con ventilación, cabina, material aplicado y frecuencia de exposición.'
      },
      {
        title: 'Asesoría Etapel',
        body: 'Etapel puede revisar el proceso del taller para recomendar una configuración adecuada.'
      }
    ]
  },
  {
    slug: 'sata-filter-500',
    brand: 'SATA',
    familySlug: 'mecanica-y-aire',
    category: 'Aire comprimido',
    technology: 'Filtración',
    sprayPattern: 'No aplica',
    nozzleTechnology: 'No aplica',
    interest: 'Tecnología de filtros',
    application: 'Preparación de aire',
    name: 'SATA filter 500',
    summary: 'Sistema de filtración para preparar aire comprimido en procesos de pintura.',
    description:
      'Solución para controlar la calidad del aire antes de la aplicación. La filtración correcta ayuda a reducir defectos y retrabajos en acabados sensibles.',
    image: sataJetXDigitalReady,
    gallery: [sataJetXDigitalReady, sataJetXDigital, sataJetXDigitalPro],
    badges: ['Aire', 'Filtración', 'Calidad'],
    specs: [
      { label: 'Área', value: 'Red de aire comprimido' },
      { label: 'Proceso', value: 'Preparación antes de pintar' },
      { label: 'Beneficio', value: 'Mayor control del acabado' },
      { label: 'Integración', value: 'Pistolas y cabina' }
    ],
    variants: [
      { name: 'Módulos de filtración', note: 'Definidos por calidad requerida.' },
      { name: 'Mantenimiento', note: 'Reposición según uso y condición de línea.' }
    ],
    highlights: [
      'Reduce riesgos asociados a contaminación del aire.',
      'Clave para integrar una estación de pintura completa.',
      'Etapel puede revisar la red de aire y consumo del taller.'
    ],
    detailBlocks: [
      {
        title: 'Control de calidad',
        body: 'La calidad del aire impacta directamente el acabado. La selección debe considerar compresor, distancia, humedad y puntos de consumo.'
      },
      {
        title: 'Instalación',
        body: 'Etapel puede evaluar el punto de instalación dentro del flujo de aire comprimido del taller.'
      }
    ]
  },
  {
    slug: 'cabinas-zonas-preparacion',
    brand: 'Etapel',
    familySlug: 'cabinas-y-preparacion',
    category: 'Cabinas y áreas',
    technology: 'Proyecto',
    sprayPattern: 'No aplica',
    nozzleTechnology: 'No aplica',
    interest: 'Cabinas y preparación',
    application: 'Pintura y preparación',
    name: 'Cabinas y zonas de preparación',
    summary: 'Soluciones para ordenar áreas de pintura, mezcla y preparación.',
    description:
      'Proyecto, suministro y acompañamiento para espacios de trabajo que requieren flujo, iluminación, extracción y control del proceso.',
    image: '/images/cabinas-preparacion.webp',
    gallery: ['/images/cabinas-preparacion.webp', '/images/featured-lineas.webp'],
    badges: ['Proyecto', 'Cabina', 'Preparación'],
    specs: [
      { label: 'Área', value: 'Pintura y preparación' },
      { label: 'Servicio', value: 'Asesoría e instalación' },
      { label: 'Enfoque', value: 'Productividad del taller' },
      { label: 'Complemento', value: 'Equipos y consumibles' }
    ],
    variants: [
      { name: 'Cabina', note: 'Según flujo, espacio y operación.' },
      { name: 'Zona prep', note: 'Para preparación previa y organización.' }
    ],
    highlights: [
      'Diseño orientado al flujo real del taller.',
      'Puede integrarse con iluminación, extracción y equipos.',
      'Acompañamiento Etapel desde selección hasta operación.'
    ],
    detailBlocks: [
      {
        title: 'Proyecto integral',
        body: 'La solución se define según espacio disponible, volumen de trabajo, tipo de operación y requerimientos de proceso.'
      },
      {
        title: 'Integración con producto',
        body: 'Puede combinarse con pistolas, filtración, protección respiratoria y consumibles para una estación completa.'
      }
    ]
  }
];

const jetXProduct = curatedCatalogProducts.find((product) => product.slug === 'sata-jet-x');
const nonSataProducts = curatedCatalogProducts.filter((product) => product.brand !== 'SATA');

export const catalogProducts: CatalogProduct[] = [
  ...sataImportedProducts.map((product) => {
    if (product.slug !== 'jet-x' || !jetXProduct) {
      return product;
    }

    return {
      ...product,
      ...jetXProduct,
      slug: 'sata-jet-x',
      name: 'SATA jet X',
      image: sataJetXMain,
      gallery: sataJetXGallery
    };
  }),
  ...nonSataProducts
];
