import type { AcademyTag } from '~/types/academy'

export const useAcademyTagLabel = () => {
  const { t, te } = useI18n()

  const getTagLabel = (tag: AcademyTag): string => {
    const key = `academy.tags.${tag.slug}`

    return te(key) ? t(key) : tag.name
  }

  return { getTagLabel }
}
