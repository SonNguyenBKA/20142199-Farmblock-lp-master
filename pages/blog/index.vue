<template>
  <div class="page-blog">
    <section class="page-blog__hero">
      <div class="max-w-content page-blog__hero-inner">
        <p class="text-body-16-bold text-brand-primary md:text-heading-32-bold">Blog</p>
        <h1 class="text-heading-36-bold text-brand-secondary md:text-heading-72-bold">
          Câu chuyện từ cánh đồng số
        </h1>
        <p class="text-body-16-reg text-brand-secondary md:text-body-24-reg">
          Tin tức, góc nhìn và cập nhật từ hành trình số hóa nông nghiệp của FarmBlock.
        </p>
      </div>
    </section>

    <section class="page-blog__list max-w-content">
      <div v-if="pending" class="page-blog__state">Đang tải bài viết...</div>
      <div v-else-if="error" class="page-blog__state page-blog__state--error">
        Không thể tải danh sách blog. Vui lòng thử lại sau.
      </div>
      <div v-else-if="!posts.length" class="page-blog__state">Chưa có bài viết nào.</div>
      <div v-else class="page-blog__grid">
        <article
          v-for="post in posts"
          :key="post.id"
          class="page-blog__card"
          @click="goToPost(post.slug)"
        >
          <div class="page-blog__card-image">
            <img
              v-if="post.featured_image_url"
              :src="post.featured_image_url"
              :alt="post.title"
            />
            <div v-else class="page-blog__card-placeholder" />
          </div>
          <div class="page-blog__card-body">
            <time class="page-blog__date">{{ formatDate(post.published_at) }}</time>
            <h2 class="page-blog__card-title">{{ post.title }}</h2>
            <p class="page-blog__card-excerpt">{{ post.excerpt }}</p>
            <span class="page-blog__read-more">Đọc thêm →</span>
          </div>
        </article>
      </div>

      <div v-if="meta && meta.last_page > 1" class="page-blog__pagination">
        <button
          class="page-blog__page-btn"
          :disabled="page <= 1"
          @click="changePage(page - 1)"
        >
          Trước
        </button>
        <span>{{ page }} / {{ meta.last_page }}</span>
        <button
          class="page-blog__page-btn"
          :disabled="page >= meta.last_page"
          @click="changePage(page + 1)"
        >
          Sau
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const router = useRouter()
const { fetchBlogs } = useBlogApi()
const page = ref(1)

const { data, pending, error } = await useAsyncData(
  'blogs-page',
  () => fetchBlogs(page.value),
  { watch: [page] },
)

const posts = computed<BlogPost[]>(() => data.value?.data ?? [])
const meta = computed(() => data.value?.meta)

useHead({
  title: 'Blog | FarmBlock',
  meta: [
    {
      name: 'description',
      content: 'Tin tức và cập nhật từ FarmBlock về nông nghiệp số và Tây Nguyên.',
    },
  ],
})

const formatDate = (value: string | null) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const goToPost = (slug: string) => {
  router.push(`/blog/${slug}`)
}

const changePage = (nextPage: number) => {
  page.value = nextPage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.page-blog {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7fcf2 0%, #ffffff 40%);

  &__hero {
    padding: 7rem 1rem 3rem;
    background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);

    @media (min-width: 768px) {
      padding: 9rem 1rem 4rem;
    }
  }

  &__hero-inner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;

    p,
    h1 {
      text-align: center;
    }
  }

  &__list {
    padding: 3rem 1rem 5rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(19, 51, 28, 0.12);
    }
  }

  &__card-image {
    aspect-ratio: 1200 / 630;
    overflow: hidden;
    background: #f7fbf3;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__card-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #b4e27e 0%, #2d6639 100%);
    opacity: 0.35;
  }

  &__card-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__date {
    font-size: 0.875rem;
    color: #3a8047;
  }

  &__card-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #06280c;
    line-height: 1.4;
  }

  &__card-excerpt {
    font-size: 0.9375rem;
    color: #13331c;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__read-more {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #2d6639;
  }

  &__state {
    text-align: center;
    padding: 3rem 1rem;
    color: #13331c;
    font-size: 1rem;

    &--error {
      color: #b91c1c;
    }
  }

  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    color: #13331c;
  }

  &__page-btn {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #2d6639;
    background: #fff;
    color: #2d6639;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
}
</style>
