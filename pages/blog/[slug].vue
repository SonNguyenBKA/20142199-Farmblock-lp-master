<template>
  <div class="page-blog-detail">
    <div v-if="pending" class="page-blog-detail__state max-w-content">{{ $t('blog.loading') }}</div>
    <div v-else-if="error || !post" class="page-blog-detail__state max-w-content page-blog-detail__state--error">
      {{ $t('blog.not_found') }}
      <NuxtLink to="/blog" class="page-blog-detail__back">{{ $t('blog.back') }}</NuxtLink>
    </div>
    <article v-else class="page-blog-detail__article">
      <header class="page-blog-detail__hero">
        <div class="max-w-content page-blog-detail__hero-inner">
          <NuxtLink to="/blog" class="page-blog-detail__back">{{ $t('blog.back') }}</NuxtLink>
          <time class="page-blog-detail__date">{{ formatDate(post.published_at) }}</time>
          <h1 class="text-heading-36-bold text-brand-secondary md:text-heading-56-bold">
            {{ post.title }}
          </h1>
          <p v-if="post.excerpt" class="page-blog-detail__excerpt">{{ post.excerpt }}</p>
          <p v-if="post.author?.name" class="page-blog-detail__author">{{ $t('common.by') }} {{ post.author.name }}</p>
        </div>
      </header>

      <div v-if="post.featured_image_url" class="page-blog-detail__cover max-w-content">
        <img :src="post.featured_image_url" :alt="post.title" />
      </div>

      <div class="max-w-content page-blog-detail__content" v-html="post.content" />
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { fetchBlogBySlug } = useBlogApi()
const { locale, t } = useI18n()

const { data: post, pending, error } = await useAsyncData(
  'blog-detail',
  () => fetchBlogBySlug(slug.value),
  { watch: [slug, locale] },
)

useHead(() => ({
  title: post.value?.meta_title || post.value?.title
    ? `${post.value?.meta_title || post.value?.title} | FarmBlock`
    : t('blog.hero.label') + ' | FarmBlock',
  meta: [
    {
      name: 'description',
      content: post.value?.meta_description || post.value?.excerpt || t('blog.description'),
    },
  ],
}))

const formatDate = (value: string | null) => {
  if (!value) {
    return ''
  }
  return new Date(value).toLocaleDateString(locale.value === 'vi' ? 'vi-VN' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<style lang="scss" scoped>
.page-blog-detail {
  min-height: 100vh;
  background: #fff;

  &__hero {
    padding: 7rem 1rem 2rem;
    background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
  }

  &__hero-inner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__back {
    color: #b4e27e;
    font-size: 0.875rem;
    font-weight: 600;
    width: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }

  &__date,
  &__author,
  &__excerpt {
    color: #f0f9e5;
  }

  &__excerpt {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 48rem;
  }

  &__cover {
    margin: -1.5rem auto 2rem;
    padding: 0 1rem;

    img {
      width: 100%;
      max-height: 28rem;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(19, 51, 28, 0.15);
    }
  }

  &__content {
    padding: 0 1rem 5rem;
    max-width: 48rem;
    margin: 0 auto;
    color: #13331c;
    line-height: 1.75;
    font-size: 1rem;

    :deep(h1),
    :deep(h2),
    :deep(h3) {
      color: #06280c;
      margin: 1.5rem 0 0.75rem;
      line-height: 1.3;
    }

    :deep(p) {
      margin-bottom: 1rem;
    }

    :deep(ul),
    :deep(ol) {
      margin: 0 0 1rem 1.5rem;
    }

    :deep(img) {
      max-width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }

    :deep(a) {
      color: #2d6639;
      text-decoration: underline;
    }

    :deep(blockquote) {
      border-left: 4px solid #b4e27e;
      padding-left: 1rem;
      color: #3a8047;
      margin: 1rem 0;
    }
  }

  &__state {
    padding: 8rem 1rem;
    text-align: center;
    color: #13331c;

    &--error {
      color: #b91c1c;
    }
  }
}
</style>
