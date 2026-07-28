export interface BlogAuthor {
  id: number
  name: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string | null
  content?: string
  featured_image: string | null
  featured_image_url: string | null
  locale: 'vi' | 'en'
  status: 'draft' | 'published'
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  author?: BlogAuthor | null
  created_at: string
  updated_at: string
}

export interface BlogListResponse {
  data: BlogPost[]
  links: {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
  }
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}
