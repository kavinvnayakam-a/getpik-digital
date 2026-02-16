import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login',         // Blocks the login page from search results
        '/signin',        // Common alternative path
        '/admin',         // Blocks the admin dashboard
        '/dashboard',     // Blocks management areas
        '/privacy',       // Legal pages (as requested)
        '/terms',
        '/cookies',
        '/quotation/wedding156', // Specific private quotation path
        '/api/',          // Internal API routes
      ],
    },
    sitemap: 'https://www.getpik.in/sitemap.xml',
  }
}