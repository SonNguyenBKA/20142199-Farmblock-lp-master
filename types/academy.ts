export interface AcademyTag {
  id: number
  name: string
  slug: string
}

export interface AcademyAuthor {
  id: number
  name: string
}

export interface AcademyPost {
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
  tags?: AcademyTag[]
  author?: AcademyAuthor | null
  created_at: string
  updated_at: string
}

export interface AcademyListResponse {
  data: AcademyPost[]
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

export interface AcademyTagsResponse {
  data: AcademyTag[]
}
