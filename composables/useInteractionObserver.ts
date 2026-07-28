// composables/useIntersectionObserver.ts

import { ref, onMounted, onUnmounted, Ref } from 'vue'

interface UseIntersectionObserverOptions {
  // Ngưỡng hiển thị (0-1), có thể là một giá trị hoặc mảng các giá trị
  threshold?: number | number[]
  // Root element để dùng như viewport
  root?: Element | Document | null
  // Margin xung quanh root element
  rootMargin?: string
  // Chỉ quan sát một lần rồi ngừng (khi element đã hiển thị)
  once?: boolean
  // Callback khi element trở nên hiển thị
  onEnter?: (entry: IntersectionObserverEntry) => void
  // Callback khi element không còn hiển thị
  onExit?: (entry: IntersectionObserverEntry) => void
}

export default function useIntersectionObserver (
  elementRef: Ref<Element | null> | Ref<Element[]> | null,
  options: UseIntersectionObserverOptions = {},
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    once = false,
    onEnter = () => {},
    onExit = () => {},
  } = options

  const isIntersecting = ref(false)
  const entry = ref<IntersectionObserverEntry | null>(null)
  let observer: IntersectionObserver | null = null

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  const observe = (elements: Element | Element[] | null) => {
    // Xóa observer trước nếu đã tồn tại
    cleanup()

    // Kiểm tra xem có phải môi trường client không
    if (!process.client) { return }

    // Kiểm tra xem elements có tồn tại không
    if (!elements) { return }

    // Tạo observer mới
    observer = new IntersectionObserver(
      (entries) => {
        // Lưu entry mới nhất
        entry.value = entries[0]

        // Xử lý trạng thái hiển thị
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isIntersecting.value = true
            onEnter(entry)

            // Nếu chỉ theo dõi một lần, ngưng theo dõi sau khi element hiển thị
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else {
            isIntersecting.value = false
            onExit(entry)
          }
        }
      },
      { threshold, root, rootMargin },
    )

    // Theo dõi một hoặc nhiều element
    if (Array.isArray(elements)) {
      elements.forEach(el => el && observer?.observe(el))
    } else {
      observer.observe(elements)
    }
  }

  // Theo dõi khi component được mount
  onMounted(() => {
    const elements = elementRef?.value
    if (elements) {
      observe(elements)
    }
  })

  // Dọn dẹp khi component unmount
  onUnmounted(() => {
    cleanup()
  })

  return {
    isIntersecting,
    entry,
    observer,
    cleanup,
    observe,
  }
}
