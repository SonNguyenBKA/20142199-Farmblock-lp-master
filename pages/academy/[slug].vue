<template>
  <div class="page-academy-detail">
    <div v-if="pending" class="page-academy-detail__state max-w-content">{{ $t('academy.loading') }}</div>
    <div v-else-if="error || !post" class="page-academy-detail__state max-w-content page-academy-detail__state--error">
      {{ $t('academy.not_found') }}
      <NuxtLink to="/academy" class="page-academy-detail__back">{{ $t('academy.back') }}</NuxtLink>
    </div>
    <article v-else class="page-academy-detail__article">
      <header class="page-academy-detail__hero">
        <div class="max-w-content page-academy-detail__hero-inner">
          <NuxtLink to="/academy" class="page-academy-detail__back">{{ $t('academy.back') }}</NuxtLink>
          <time class="page-academy-detail__date">{{ formatDate(post.published_at) }}</time>
          <h1 class="text-heading-36-bold text-[#F0F9E5] md:text-heading-56-bold">{{ post.title }}</h1>
          <div v-if="post.tags?.length" class="page-academy-detail__tags">
            <span v-for="tag in post.tags" :key="tag.id" class="page-academy-detail__tag">{{ getTagLabel(tag) }}</span>
          </div>
          <p v-if="post.excerpt" class="page-academy-detail__excerpt">{{ post.excerpt }}</p>
          <p v-if="post.author?.name" class="page-academy-detail__author">{{ $t('common.by') }} {{ post.author.name }}</p>
        </div>
      </header>

      <div v-if="post.featured_image_url" class="page-academy-detail__cover max-w-content">
        <img :src="post.featured_image_url" :alt="post.title">
      </div>

      <div class="max-w-content page-academy-detail__content" v-html="post.content" />
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { fetchAcademyBySlug } = useAcademyApi()
const { getTagLabel } = useAcademyTagLabel()
const { locale, t } = useI18n()

const { data: post, pending, error } = await useAsyncData(
  'academy-detail',
  () => fetchAcademyBySlug(slug.value),
  { watch: [slug, locale] },
)

useHead(() => ({
  title: post.value?.meta_title || post.value?.title
    ? `${post.value?.meta_title || post.value?.title} | FarmBlock`
    : `${t('academy.hero.label')} | FarmBlock`,
  meta: [{ name: 'description', content: post.value?.meta_description || post.value?.excerpt || t('academy.description') }],
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
.page-academy-detail { min-height:100vh; background:#fff;
  &__hero { padding:7rem 1rem 2rem; background:linear-gradient(90deg,#06280c 0%,#2d6639 100%); }
  &__hero-inner { display:flex; flex-direction:column; gap:.75rem; }
  &__back { width:fit-content; color:#b4e27e; font-size:.875rem; font-weight:600; &:hover{text-decoration:underline;} }
  &__date, &__author, &__excerpt { color:#f0f9e5; }
  &__excerpt { max-width:48rem; font-size:1.125rem; line-height:1.6; }
  &__tags { display:flex; flex-wrap:wrap; gap:.5rem; }
  &__tag { padding:.3rem .65rem; border:1px solid rgba(180,226,126,.55); border-radius:999px; color:#f0f9e5; font-size:.8rem; }
  &__cover { margin:-1.5rem auto 2rem; padding:0 1rem; img{width:100%;max-height:28rem;object-fit:cover;border-radius:12px;box-shadow:0 12px 32px rgba(19,51,28,.15);} }
  &__content { max-width:48rem; margin:0 auto; padding:0 1rem 5rem; color:#13331c; font-size:1rem; line-height:1.75;
    :deep(h1), :deep(h2), :deep(h3) { margin:1.5rem 0 .75rem; color:#06280c; font-weight:700; line-height:1.3; }
    :deep(h1) { font-size:2rem; } :deep(h2) { font-size:1.6rem; } :deep(h3) { font-size:1.3rem; }
    :deep(strong), :deep(b) { font-weight:700; }
    :deep(p) { margin-bottom:1rem; } :deep(ul), :deep(ol) { margin:0 0 1rem 1.5rem; }
    :deep(img) { max-width:100%; margin:1rem 0; border-radius:8px; } :deep(a) { color:#2d6639; text-decoration:underline; }
    :deep(blockquote) { margin:1rem 0; padding-left:1rem; border-left:4px solid #b4e27e; color:#3a8047; }
  }
  &__state { padding:8rem 1rem; color:#13331c; text-align:center; } &__state--error{color:#b91c1c;}
}
</style>
