import { useEffect } from 'react'

export const useSEO = ({ title, description, keywords, url, type = 'website', image }) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    }

    // Update meta description
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    }

    // Update keywords
    if (keywords) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]')
      if (keywordsMeta) {
        keywordsMeta.setAttribute('content', keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = keywords
        document.head.appendChild(meta)
      }
    }

    // Update canonical URL
    if (url) {
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.href = url
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = url
        document.head.appendChild(link)
      }

      document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
      document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', url)
    }

    // Update OG type
    if (type) {
      document.querySelector('meta[property="og:type"]')?.setAttribute('content', type)
    }

    // Update OG image
    if (image) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', image)
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image)
    }
  }, [title, description, keywords, url, type, image])
}

export default useSEO
