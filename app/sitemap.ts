import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: '2025-08-01T11:00:07.084Z', //<- Put the correct date so that google can crawl again but if you keep putting the latest date to it google will understand you are trying to fake it and it will stop crawling
      changeFrequency: "yearly", //<- How often you would change this page 
      priority: 1, //<- How important this page is compared to other ones
    },
  ];
}
