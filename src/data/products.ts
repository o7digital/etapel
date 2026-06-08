export interface ProductSpec {
  label: string;
  value: string;
}

export interface CatalogProduct {
  slug: string;
  brand: string;
  familySlug: string;
  category: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  badges: string[];
  specs: ProductSpec[];
}

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'sata-jet-x',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    name: 'SATA jet X',
    summary: 'Pistola premium para repintado automotriz con tecnología de boquilla X.',
    description:
      'Diseñada para aplicaciones de alto acabado en fondos, bases y barnices. Integra opciones de abanico, tecnologías HVLP o RP y versiones con medición digital para controlar la presión con mayor precisión.',
    image: '/images/satajet-x5500.webp',
    badges: ['HVLP / RP', 'Digital', 'Premium'],
    specs: [
      { label: 'Aplicación', value: 'Pintura y barniz automotriz' },
      { label: 'Opciones', value: 'Boquillas 1.1 a 1.4' },
      { label: 'Orientación', value: 'Acabado fino y repetible' }
    ]
  },
  {
    slug: 'satajet-x-5500',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Pistolas de pintura',
    name: 'SATAjet X 5500',
    summary: 'Pistola para procesos de repintado que prioriza eficiencia de transferencia y ergonomía.',
    description:
      'Una solución para talleres que buscan consistencia en aplicación, control de niebla y comodidad durante jornadas de trabajo continuas.',
    image: '/images/satajet-x5500.webp',
    badges: ['Pintura', 'Repintado', 'Ergonomía'],
    specs: [
      { label: 'Uso', value: 'Base color y transparente' },
      { label: 'Proceso', value: 'Repintado automotriz' },
      { label: 'Soporte', value: 'Asesoría técnica Etapel' }
    ]
  },
  {
    slug: 'sata-rps',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Vasos y consumibles',
    name: 'SATA RPS',
    summary: 'Sistema de vasos multiuso para mezclar, pintar, rellenar y almacenar.',
    description:
      'Consumible orientado a simplificar el flujo de preparación y aplicación de pintura, reduciendo pasos y manteniendo orden en el proceso del taller.',
    image: '/images/category-pistolas.webp',
    badges: ['Consumible', 'RPS', 'Proceso'],
    specs: [
      { label: 'Formato', value: 'Sistema de vaso multiuso' },
      { label: 'Área', value: 'Preparación y aplicación' },
      { label: 'Objetivo', value: 'Eficiencia operativa' }
    ]
  },
  {
    slug: 'sata-air-star-f2',
    brand: 'SATA',
    familySlug: 'pintura',
    category: 'Protección respiratoria',
    name: 'SATA air star F 2.0',
    summary: 'Protección respiratoria para aplicaciones profesionales de pintura.',
    description:
      'Equipo de seguridad pensado para procesos de repintado donde la protección, comodidad y compatibilidad con la operación diaria son prioritarias.',
    image: '/images/category-pistolas.webp',
    badges: ['Seguridad', 'Respiración', 'Pintura'],
    specs: [
      { label: 'Uso', value: 'Aplicación en cabina' },
      { label: 'Familia', value: 'Protección respiratoria' },
      { label: 'Enfoque', value: 'Seguridad del operador' }
    ]
  },
  {
    slug: 'sata-filter-500',
    brand: 'SATA',
    familySlug: 'mecanica-y-aire',
    category: 'Aire comprimido',
    name: 'SATA filter 500',
    summary: 'Sistema de filtración para preparar aire comprimido en procesos de pintura.',
    description:
      'Ayuda a controlar la calidad del aire antes de la aplicación, una condición clave para acabados limpios y menor retrabajo.',
    image: '/images/mecanica-aire.webp',
    badges: ['Aire', 'Filtración', 'Calidad'],
    specs: [
      { label: 'Área', value: 'Red de aire comprimido' },
      { label: 'Proceso', value: 'Preparación antes de pintar' },
      { label: 'Beneficio', value: 'Mayor control del acabado' }
    ]
  },
  {
    slug: 'cabina-preparacion',
    brand: 'Etapel',
    familySlug: 'cabinas-y-preparacion',
    category: 'Cabinas y áreas',
    name: 'Cabinas y zonas de preparación',
    summary: 'Soluciones para ordenar áreas de pintura, mezcla y preparación.',
    description:
      'Proyecto, suministro y acompañamiento para espacios de trabajo que requieren flujo, iluminación, extracción y control del proceso.',
    image: '/images/cabinas-preparacion.webp',
    badges: ['Proyecto', 'Cabina', 'Preparación'],
    specs: [
      { label: 'Área', value: 'Pintura y preparación' },
      { label: 'Servicio', value: 'Asesoría e instalación' },
      { label: 'Enfoque', value: 'Productividad del taller' }
    ]
  }
];
