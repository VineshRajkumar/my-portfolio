import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', //<- which crawlers to target -> to target all crawlers just put * 
      allow: '/', //<- to allow all pages put only /
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}sitemap.xml`, //a slash is alredy added in env so it will look correct
  }
}