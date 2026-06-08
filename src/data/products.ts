export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  note: string;
}

export interface CatalogProduct {
  slug: string;
  brand: string;
  familySlug: string;
  category: string;
  technology: string;
  application: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  badges: string[];
  specs: ProductSpec[];
  variants: ProductVariant[];
  highlights: string[];
  detailBlocks: {
    title: string;
    body: string;
  }[];
}

export const productDetailPath = (product: CatalogProduct) =>
  `/linea-de-producto/productos/${product.slug}`;

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'sata-jet-x',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    application: 'Base color y transparente',
    name: 'SATA jet X',
    summary: 'Pistola premium para repintado automotriz con tecnología de boquilla X.',
    description:
      'Solución profesional para talleres que buscan acabado controlado, aplicación repetible y una selección clara entre configuraciones HVLP o RP. Etapel la presenta como parte de su oferta SATA para procesos de repintado de alto nivel.',
    image: '/images/satajet-x5500.webp',
    gallery: ['/images/satajet-x5500.webp', '/images/category-pistolas.webp'],
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
    highlights: [
      'Configuración para trabajos de acabado exigente.',
      'Opciones para adaptar el equipo al proceso del taller.',
      'Acompañamiento Etapel para elegir boquilla, tecnología y accesorios.'
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
    ]
  },
  {
    slug: 'satajet-x-5500',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    technology: 'HVLP / RP',
    application: 'Repintado automotriz',
    name: 'SATAjet X 5500',
    summary: 'Pistola para procesos de repintado que prioriza transferencia, ergonomía y consistencia.',
    description:
      'Equipo para aplicación profesional de pintura en talleres que necesitan control del acabado, comodidad en uso continuo y compatibilidad con flujos modernos de repintado.',
    image: '/images/satajet-x5500.webp',
    gallery: ['/images/satajet-x5500.webp', '/images/slide-pistolas.webp'],
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
    application: 'Preparación y aplicación',
    name: 'SATA RPS',
    summary: 'Sistema de vasos multiuso para mezclar, pintar, rellenar y almacenar.',
    description:
      'Consumible pensado para simplificar el flujo de pintura y reducir pasos entre mezcla, aplicación y almacenamiento temporal del material.',
    image: '/images/category-pistolas.webp',
    gallery: ['/images/category-pistolas.webp', '/images/satajet-x5500.webp'],
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
    slug: 'sata-air-star-f2',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Protección respiratoria',
    technology: 'Seguridad',
    application: 'Aplicación en cabina',
    name: 'SATA air star F 2.0',
    summary: 'Protección respiratoria para aplicaciones profesionales de pintura.',
    description:
      'Equipo de seguridad para procesos de repintado donde la protección del operador, comodidad y operación diaria tienen prioridad.',
    image: '/images/category-pistolas.webp',
    gallery: ['/images/category-pistolas.webp', '/images/certificacion.webp'],
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
    application: 'Preparación de aire',
    name: 'SATA filter 500',
    summary: 'Sistema de filtración para preparar aire comprimido en procesos de pintura.',
    description:
      'Solución para controlar la calidad del aire antes de la aplicación. La filtración correcta ayuda a reducir defectos y retrabajos en acabados sensibles.',
    image: '/images/mecanica-aire.webp',
    gallery: ['/images/mecanica-aire.webp', '/images/category-infrarrojo.webp'],
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
