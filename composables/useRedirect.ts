import { messageInfo } from '~/utils/utils'

export const useRedirect = () => {
  const router = useRouter()
  const handleRedirect = (link: string, isNewTab = false, isComingSoon = false) => {
    if (!link || isComingSoon) {
      messageInfo('Coming soon')
      return
    }
    if (link === '/' || link === '/home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      router.push(link)
      return
    }
    isNewTab ? window.open(link) : router.push(link)
  }

  return {
    handleRedirect,
  }
}
