import { featuredCompany } from "@/components/common/data/pagesData";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  return featuredCompany.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/documents/${product.id}`,
    lastModified: new Date().toISOString(),
    priority: 1 / product.id,
  }));
}
