import type { BlogListResponse, BlogPost } from '~/types/blog'

export const useBlogApi = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl as string
  const apiBaseUrl = import.meta.client ? '/api' : baseUrl
  const { locale } = useI18n()

  const apiFetch = <T>(path: string, query?: Record<string, string | number>) => {
    return $fetch<T>(`${apiBaseUrl}${path}`, {
      query: {
        locale: locale.value,
        ...query,
      },
    })
  }

  const fetchBlogs = (page = 1, search = '', perPage = 12) => {
    return apiFetch<BlogListResponse>('/blogs', {
      page,
      per_page: perPage,
      ...(search ? { q: search } : {}),
    })
  }

  const fetchBlogBySlug = async (slug: string) => {
    const response = await apiFetch<BlogPost | { data: BlogPost }>(`/blogs/${slug}`)

    if (response && typeof response === 'object' && 'data' in response) {
      return response.data
    }

    return response
  }

  return {
    fetchBlogs,
    fetchBlogBySlug,
  }
}
