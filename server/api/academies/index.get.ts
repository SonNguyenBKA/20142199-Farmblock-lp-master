export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const baseUrl = (config.public.apiBaseUrl as string).replace(/\/$/, '')

  return $fetch(`${baseUrl}/academies`, {
    query: getQuery(event),
  })
})
