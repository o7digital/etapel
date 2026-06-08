from __future__ import annotations

import html
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public/images/products/sata/imported"
OUT = ROOT / "src/data/sataImportedProducts.ts"


SOURCES = [
    {
        "label": "Pistolas con vaso de gravedad",
        "family": "pintura",
        "category": "Pistolas de pintura",
        "technology": "HVLP / RP",
        "interest": "Pistolas con vaso de gravedad",
        "url": "https://www.sata.com/es/pistolas-de-pintura/?properties=a32fddfd9038e7572b50525550737923&p=1",
    },
    {
        "label": "Pistolas con calderin",
        "family": "pintura",
        "category": "Pistolas de pintura",
        "technology": "HVLP / RP",
        "interest": "Pistolas con calderin",
        "url": "https://www.sata.com/es/pistolas-de-pintura/?properties=94a71a5a36d72d17587fc1692e4924fe&p=1",
    },
    {
        "label": "Pistolas aerograficas",
        "family": "pintura",
        "category": "Pistolas de pintura",
        "technology": "Aerografica",
        "interest": "Pistolas aerograficas",
        "url": "https://www.sata.com/es/pistolas-de-pintura/?properties=dbc25183931ff48d0f5673e1aa35e9a5&p=1",
    },
    {
        "label": "Pistolas de vaso inferior",
        "family": "pintura",
        "category": "Pistolas de pintura",
        "technology": "HVLP / RP",
        "interest": "Pistolas de vaso inferior",
        "url": "https://www.sata.com/es/pistolas-de-pintura/?properties=f9e873a1f5e203400cd5c488e4b397b2&p=1",
    },
    {
        "label": "Pistolas roboticas",
        "family": "pintura",
        "category": "Pistolas de pintura",
        "technology": "Automatica / Robotica",
        "interest": "Pistolas roboticas",
        "url": "https://www.sata.com/es/pistolas-de-pintura/?properties=08a5ed83f5de6464d42883c30e0a738e&p=1",
    },
    {
        "label": "Adam",
        "family": "pintura",
        "category": "Accesorios pistolas",
        "technology": "Digital",
        "interest": "Adam",
        "url": "https://www.sata.com/es/search-summary?search=adam",
    },
    {
        "label": "Sistemas de deposito",
        "family": "pintura",
        "category": "Sistemas de deposito",
        "technology": "Deposito",
        "interest": "Sistemas de deposito",
        "url": "https://www.sata.com/es/sistemas-de-depositos/",
    },
    {
        "label": "Tecnologia de filtros",
        "family": "mecanica-y-aire",
        "category": "Aire comprimido",
        "technology": "Filtracion",
        "interest": "Tecnologia de filtros",
        "url": "https://www.sata.com/es/tecnologia-de-filtros/",
    },
]

DIRECT_PRODUCTS = [
    {
        "name": "SATA air vision 5000",
        "family": "pintura",
        "category": "Proteccion respiratoria",
        "technology": "Seguridad",
        "interest": "Proteccion respiratoria",
        "url": "https://www.sata.com/es/sata-air-vision-5000/CF1931121",
    },
    {
        "name": "SATA air star F 2.0",
        "family": "pintura",
        "category": "Proteccion respiratoria",
        "technology": "Seguridad",
        "interest": "Proteccion respiratoria",
        "url": "https://www.sata.com/es/air-star-f-2.0/CF1931339",
    },
    {
        "name": "SATA air star C",
        "family": "pintura",
        "category": "Proteccion respiratoria",
        "technology": "Seguridad",
        "interest": "Proteccion respiratoria",
        "url": "https://www.sata.com/es/sata-air-star-c/CF1931124",
    },
    {
        "name": "SATA air star F",
        "family": "pintura",
        "category": "Proteccion respiratoria",
        "technology": "Seguridad",
        "interest": "Proteccion respiratoria",
        "url": "https://www.sata.com/es/sata-air-star-f/CF1931125",
    },
]


def fetch(url: str) -> str:
    return subprocess.check_output(
        ["curl", "-L", "-s", "-A", "Mozilla/5.0", url],
        text=True,
    )


def clean_text(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return re.sub(r"\s+", " ", value).strip()


def slugify(value: str) -> str:
    value = value.lower()
    value = value.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("ñ", "n")
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def first_image(fragment: str) -> str:
    match = re.search(r'<img[^>]+(?:src|data-src)="(https://www\.sata\.com/[^"]+)"', fragment)
    return match.group(1) if match else ""


def first_href(fragment: str) -> str:
    hrefs = re.findall(r'href="([^"]+)"', fragment)
    href = next((item for item in hrefs if "/es/" in item and "wishlist" not in item), "")
    return urljoin("https://www.sata.com", href) if href else ""


def detail_image(page: str) -> str:
    meta = re.search(r'<meta property="og:image"\s+content="([^"]+)"', page)
    if meta:
        return html.unescape(meta.group(1))
    match = re.search(r'<img[^>]+(?:src|data-src)="(https://www\.sata\.com/[^"]+)"[^>]+class="[^"]*(?:gallery|product)[^"]*"', page)
    return html.unescape(match.group(1)) if match else ""


def parse_specs(page: str, fallback: list[dict[str, str]]) -> list[dict[str, str]]:
    specs: list[dict[str, str]] = []
    for row in re.findall(r'<li class="properties-row\b[^"]*"[^>]*>(.*?)</li>', page, flags=re.S):
        label_match = re.search(r'<span class="properties-label[^"]*"[^>]*>(.*?)</span>', row, flags=re.S)
        label = clean_text(label_match.group(1)) if label_match else ""
        metric_match = re.search(r'<span class="unit-metric[^"]*"[^>]*>(.*?)</span>', row, flags=re.S)
        value_match = re.search(r'<span class="properties-value"[^>]*>(.*?)</span>', row, flags=re.S)
        value = clean_text(metric_match.group(1)) if metric_match else clean_text(value_match.group(1)) if value_match else ""
        if not value and "ix-icon-check" in row:
            value = "Sí"
        if label and value:
            specs.append({"label": label, "value": value})
    return specs[:18] if specs else fallback


def parse_downloads(page: str, source_url: str) -> list[dict[str, str]]:
    downloads: list[dict[str, str]] = []
    for item in re.findall(r'<li class="downloads-item">(.*?)</li>', page, flags=re.S):
        href_match = re.search(r'href="([^"]+)"', item)
        if not href_match:
            continue
        label_match = re.search(r'<div class="downloads-item-label">\s*(.*?)\s*</div>', item, flags=re.S)
        file_match = re.search(r'<div class="downloads-items-meta-file-name">\s*(.*?)\s*</div>', item, flags=re.S)
        url = urljoin(source_url, html.unescape(href_match.group(1)))
        label = clean_text(label_match.group(1)) if label_match else "Documento SATA"
        file_name = clean_text(file_match.group(1)) if file_match else Path(urlparse(url).path).name
        downloads.append({"label": label, "url": url, "fileName": file_name})
    return downloads


def enrich_from_detail(product: dict[str, str]) -> dict[str, object]:
    source_url = str(product.get("sourceUrl") or "")
    if not source_url.startswith("http"):
        return {
            "specs": [],
            "downloads": [],
            "galleryImage": "",
            "sourceUrl": source_url,
        }
    try:
        page = fetch(source_url)
    except subprocess.CalledProcessError:
        return {
            "specs": [],
            "downloads": [],
            "galleryImage": "",
            "sourceUrl": source_url,
        }

    fallback_specs = [
        {"label": "Categoria", "value": str(product["category"])},
        {"label": "Linea", "value": str(product["interest"])},
        {"label": "Tecnologia", "value": str(product["technology"])},
        {"label": "Origen", "value": "Catalogo SATA"},
    ]
    return {
        "specs": parse_specs(page, fallback_specs),
        "downloads": parse_downloads(page, source_url),
        "galleryImage": detail_image(page),
        "sourceUrl": source_url,
    }


def download(url: str, slug: str) -> str:
    if not url:
        return ""
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    ext = Path(urlparse(url).path).suffix.lower()
    if ext not in {".webp", ".png", ".jpg", ".jpeg"}:
        ext = ".webp"
    path = IMAGE_DIR / f"{slug}{ext}"
    subprocess.run(["curl", "-L", "-s", url, "-o", str(path)], check=True)
    return "/" + str(path.relative_to(ROOT / "public"))


def parse_listing(source: dict[str, str]) -> list[dict[str, str]]:
    page = fetch(source["url"])
    products = []
    for chunk in page.split("card product-box box-standard")[1:]:
        fragment = "card product-box box-standard" + chunk[:14000]
        info = re.search(r'data-product-information="([^"]+)"', fragment)
        if not info:
            continue
        data = json.loads(html.unescape(info.group(1)))
        name = data.get("name", "").strip()
        if not name:
            continue
        slug = slugify(name)
        image_url = first_image(fragment)
        products.append(
            {
                "slug": slug,
                "brand": "SATA",
                "familySlug": source["family"],
                "category": source["category"],
                "technology": source["technology"],
                "sprayPattern": "I (Control)" if "Pistolas" in source["interest"] else "No aplica",
                "nozzleTechnology": source["technology"],
                "interest": source["interest"],
                "application": source["label"],
                "name": name,
                "summary": f"{name} - producto SATA para {source['label'].lower()}.",
                "description": f"Producto SATA dentro de la categoria {source['label']}. Etapel puede cotizar, asesorar y orientar la seleccion segun proceso, material y operacion del taller.",
                "image": download(image_url, slug),
                "sourceUrl": first_href(fragment) or source["url"],
            }
        )
    return products


def parse_direct(item: dict[str, str]) -> dict[str, str]:
    page = fetch(item["url"])
    image = ""
    meta = re.search(r'<meta property="og:image"\s+content="([^"]+)"', page)
    if meta:
        image = meta.group(1)
    title = item["name"]
    meta_title = re.search(r'<meta property="og:title"\s+content="([^"]+)"', page)
    summary = html.unescape(meta_title.group(1)).strip() if meta_title else f"{title} - producto SATA."
    slug = slugify(title)
    return {
        "slug": slug,
        "brand": "SATA",
        "familySlug": item["family"],
        "category": item["category"],
        "technology": item["technology"],
        "sprayPattern": "No aplica",
        "nozzleTechnology": "No aplica",
        "interest": item["interest"],
        "application": item["category"],
        "name": title,
        "summary": summary,
        "description": f"Producto SATA dentro de la categoria {item['category']}. Etapel puede cotizar, asesorar y orientar la seleccion segun proceso y operacion del taller.",
        "image": download(image, slug),
        "sourceUrl": item["url"],
    }


def as_ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def product_to_ts(product: dict[str, str]) -> str:
    enrichment = enrich_from_detail(product)
    image = product["image"] or "/images/products/sata/catalog/jet-x.webp"
    detail_image_path = download(str(enrichment.get("galleryImage") or ""), f"{product['slug']}-detail")
    gallery = [item for item in [image, detail_image_path] if item]
    specs = enrichment.get("specs") or [
        {"label": "Categoria", "value": product["category"]},
        {"label": "Linea", "value": product["interest"]},
        {"label": "Tecnologia", "value": product["technology"]},
        {"label": "Origen", "value": "Catalogo SATA"},
    ]
    downloads = enrichment.get("downloads") or [
        {"label": "Documentación SATA", "url": product["sourceUrl"], "fileName": "Ver página SATA"}
    ]
    highlights = [
        "Producto SATA incluido en el catalogo de Etapel.",
        "Disponible para cotizacion y asesoria tecnica.",
        "Seleccion recomendada segun proceso, material y operacion del taller.",
    ]
    detail_blocks = [
        {"title": "Uso recomendado", "body": product["application"]},
        {"title": "Asesoria Etapel", "body": "Etapel puede orientar la seleccion, accesorios, consumibles y refacciones compatibles."},
        {"title": "Fuente", "body": product["sourceUrl"]},
    ]
    variants = [{"name": product["technology"], "note": "Configuracion segun disponibilidad SATA y necesidad del proceso."}]
    return f"""  {{
    slug: {as_ts_string(product['slug'])},
    brand: "SATA",
    familySlug: {as_ts_string(product['familySlug'])},
    category: {as_ts_string(product['category'])},
    technology: {as_ts_string(product['technology'])},
    sprayPattern: {as_ts_string(product['sprayPattern'])},
    nozzleTechnology: {as_ts_string(product['nozzleTechnology'])},
    interest: {as_ts_string(product['interest'])},
    application: {as_ts_string(product['application'])},
    name: {as_ts_string(product['name'])},
    summary: {as_ts_string(product['summary'])},
    description: {as_ts_string(product['description'])},
    image: {as_ts_string(image)},
    gallery: {json.dumps(gallery, ensure_ascii=False)},
    badges: {json.dumps([product['interest'], product['technology']], ensure_ascii=False)},
    specs: {json.dumps(specs, ensure_ascii=False)},
    variants: {json.dumps(variants, ensure_ascii=False)},
    highlights: {json.dumps(highlights, ensure_ascii=False)},
    detailBlocks: {json.dumps(detail_blocks, ensure_ascii=False)},
    downloads: {json.dumps(downloads, ensure_ascii=False)},
    spareParts: ["Refacciones SATA disponibles bajo consulta", "Consumibles compatibles", "Accesorios de mantenimiento"],
    sourceUrl: {as_ts_string(product['sourceUrl'])}
  }}"""


def main() -> None:
    products: list[dict[str, str]] = []
    seen: set[str] = set()
    for source in SOURCES:
        for product in parse_listing(source):
            key = product["slug"]
            if key in seen:
                continue
            seen.add(key)
            products.append(product)
    for item in DIRECT_PRODUCTS:
        product = parse_direct(item)
        if product["slug"] not in seen:
            seen.add(product["slug"])
            products.append(product)

    body = ",\n".join(product_to_ts(product) for product in products)
    OUT.write_text(
        """import type { CatalogProduct } from './productTypes';

export const sataImportedProducts: CatalogProduct[] = [
"""
        + body
        + "\n];\n",
        encoding="utf-8",
    )
    print(f"generated {len(products)} products -> {OUT}")


if __name__ == "__main__":
    sys.exit(main())
