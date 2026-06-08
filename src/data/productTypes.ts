export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  note: string;
}

export interface ProductOptionGroup {
  label: string;
  help?: string;
  options: {
    label: string;
    disabled?: boolean;
    selected?: boolean;
  }[];
}

export interface ProductDownload {
  label: string;
  url: string;
  fileName?: string;
}

export interface CatalogProduct {
  slug: string;
  brand: string;
  familySlug: string;
  category: string;
  technology: string;
  sprayPattern?: string;
  nozzleTechnology?: string;
  interest?: string;
  application: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  badges: string[];
  specs: ProductSpec[];
  variants: ProductVariant[];
  optionGroups?: ProductOptionGroup[];
  highlights: string[];
  highlightSlides?: string[];
  detailBlocks: {
    title: string;
    body: string;
  }[];
  downloads?: (string | ProductDownload)[];
  spareParts?: string[];
  sourceUrl?: string;
}
