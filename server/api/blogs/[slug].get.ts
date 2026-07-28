export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const baseUrl = (config.public.apiBaseUrl as string).replace(/\/$/, '')
  const slug = getRouterParam(event, 'slug')

  return $fetch<{ data?: unknown } | unknown>(`${baseUrl}/blogs/${slug}`, {
    query: getQuery(event),
  }).then((response) => {
    if (response && typeof response === 'object' && 'data' in response) {
      return response.data
    }

    return response
  })
})
