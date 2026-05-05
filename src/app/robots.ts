import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login',
        '/signin',
        '/admin',
        '/dashboard',
        '/api/',
      ],
    },
    sitemap: 'https://www.getpik.in/sitemap.xml',
  }
}
