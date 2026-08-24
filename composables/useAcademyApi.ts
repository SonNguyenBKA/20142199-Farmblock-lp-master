import type { AcademyListResponse, AcademyPost, AcademyTag, AcademyTagsResponse } from '~/types/academy'

export const useAcademyApi = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl as string
  const apiBaseUrl = import.meta.client ? '/api' : baseUrl
  const { locale } = useI18n()

  const apiFetch = <T>(path: string, query?: Record<string, string | number | string[]>) => {
    return $fetch<T>(`${apiBaseUrl}${path}`, {
      query: {
        locale: locale.value,
        ...query,
      },
    })
  }

  const fetchAcademies = (page = 1, search = '', tags: string[] = [], perPage = 12) => {
    return apiFetch<AcademyListResponse>('/academies', {
      page,
      per_page: perPage,
      ...(search ? { q: search } : {}),
      ...(tags.length ? { tags } : {}),
    })
  }

  const fetchAcademyTags = async () => {
    const response = await apiFetch<AcademyTagsResponse | AcademyTag[]>('/academies/tags')
    return Array.isArray(response) ? response : response.data
  }

  const fetchAcademyBySlug = async (slug: string) => {
    const response = await apiFetch<AcademyPost | { data: AcademyPost }>(`/academies/${slug}`)

    if (response && typeof response === 'object' && 'data' in response) {
      return response.data
    }

    return response
  }

  return {
    fetchAcademies,
    fetchAcademyTags,
    fetchAcademyBySlug,
  }
}
