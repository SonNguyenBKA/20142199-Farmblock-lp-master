<template>
  <div class="page-academy">
    <section class="page-academy__hero">
      <div class="max-w-content page-academy__hero-inner">
        <p class="text-body-16-bold text-[#B4E27E] md:text-heading-32-bold">{{ $t('academy.hero.label') }}</p>
        <h1 class="text-heading-36-bold text-[#F0F9E5] md:text-heading-72-bold">
          {{ $t('academy.hero.title') }}
        </h1>
        <p class="text-body-16-reg text-[#F0F9E5] md:text-body-24-reg">
          {{ $t('academy.hero.desc') }}
        </p>
      </div>
    </section>

    <section class="page-academy__list max-w-content">
      <div class="page-academy__filters">
        <div class="page-academy__search-wrap">
          <label class="page-academy__sr-only" for="academy-search">{{ $t('academy.search_label') }}</label>
          <input
            id="academy-search"
            v-model="searchInput"
            class="page-academy__search"
            type="search"
            :placeholder="$t('academy.search_placeholder')"
          >
          <button v-if="searchInput" type="button" class="page-academy__clear" @click="searchInput = ''">
            {{ $t('academy.clear') }}
          </button>
        </div>

        <div class="page-academy__tag-filter">
          <div class="page-academy__tag-heading">
            <span>{{ $t('academy.filter_by_tag') }}</span>
            <button v-if="selectedTags.length" type="button" class="page-academy__reset" @click="clearTags">
              {{ $t('academy.clear_tags') }}
            </button>
          </div>
          <div v-if="tagsPending" class="page-academy__tag-loading">{{ $t('academy.loading_tags') }}</div>
          <div v-else class="page-academy__tag-list">
            <button
              v-for="tag in tags"
              :key="tag.id"
              type="button"
              class="page-academy__tag"
              :class="{ 'page-academy__tag--active': selectedTags.includes(tag.slug) }"
              :aria-pressed="selectedTags.includes(tag.slug)"
              @click="toggleTag(tag.slug)"
            >
              {{ tag.name }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="pending" class="page-academy__state">{{ $t('academy.loading') }}</div>
      <div v-else-if="error" class="page-academy__state page-academy__state--error">
        {{ $t('academy.error') }}
      </div>
      <div v-else-if="!posts.length" class="page-academy__state">{{ $t('academy.empty') }}</div>
      <div v-else class="page-academy__grid">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/academy/${post.slug}`"
          class="page-academy__card"
        >
          <div class="page-academy__card-image">
            <img v-if="post.featured_image_url" :src="post.featured_image_url" :alt="post.title">
            <div v-else class="page-academy__card-placeholder" />
          </div>
          <div class="page-academy__card-body">
            <time class="page-academy__date">{{ formatDate(post.published_at) }}</time>
            <h2 class="page-academy__card-title">{{ post.title }}</h2>
            <div v-if="post.tags?.length" class="page-academy__card-tags">
              <span v-for="tag in post.tags" :key="tag.id" class="page-academy__card-tag">{{ tag.name }}</span>
            </div>
            <p v-if="post.excerpt" class="page-academy__card-excerpt">{{ post.excerpt }}</p>
            <span class="page-academy__read-more">{{ $t('academy.read_more') }}</span>
          </div>
        </NuxtLink>
      </div>

      <div v-if="meta && meta.last_page > 1" class="page-academy__pagination">
        <button class="page-academy__page-btn" :disabled="page <= 1" @click="changePage(page - 1)">
          {{ $t('academy.pagination_previous') }}
        </button>
        <span>{{ page }} / {{ meta.last_page }}</span>
        <button class="page-academy__page-btn" :disabled="page >= meta.last_page" @click="changePage(page + 1)">
          {{ $t('academy.pagination_next') }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { AcademyPost, AcademyTag } from '~/types/academy'

const { fetchAcademies, fetchAcademyTags } = useAcademyApi()
const { locale, t } = useI18n()
const page = ref(1)
const searchInput = ref('')
const search = ref('')
const selectedTags = ref<string[]>([])
const tagFilterKey = computed(() => selectedTags.value.join('|'))
let searchTimer: ReturnType<typeof setTimeout> | undefined

const { data: tagData, pending: tagsPending } = await useAsyncData(
  'academy-tags',
  () => fetchAcademyTags(),
  { watch: [locale] },
)

const { data, pending, error } = await useAsyncData(
  'academy-page',
  () => fetchAcademies(page.value, search.value, selectedTags.value),
  { watch: [page, search, tagFilterKey, locale] },
)

const tags = computed<AcademyTag[]>(() => tagData.value ?? [])
const posts = computed<AcademyPost[]>(() => data.value?.data ?? [])
const meta = computed(() => data.value?.meta)

watch(searchInput, (value) => {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
  searchTimer = setTimeout(() => {
    search.value = value.trim()
    page.value = 1
  }, 300)
})

watch(tagFilterKey, () => {
  page.value = 1
})

onBeforeUnmount(() => {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
})

useHead(() => ({
  title: `${t('academy.hero.label')} | FarmBlock`,
  meta: [{ name: 'description', content: t('academy.description') }],
}))

const formatDate = (value: string | null) => {
  if (!value) {
    return ''
  }
  return new Date(value).toLocaleDateString(locale.value === 'vi' ? 'vi-VN' : 'en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const toggleTag = (slug: string) => {
  selectedTags.value = selectedTags.value.includes(slug)
    ? selectedTags.value.filter(tag => tag !== slug)
    : [...selectedTags.value, slug]
}

const clearTags = () => {
  selectedTags.value = []
}

const changePage = (nextPage: number) => {
  page.value = nextPage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<style lang="scss" scoped>
.page-academy {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7fcf2 0%, #ffffff 40%);

  &__hero {
    padding: 7rem 1rem 3rem;
    background: linear-gradient(90deg, #06280c 0%, #2d6639 100%);

    @media (min-width: 768px) { padding: 9rem 1rem 4rem; }
  }

  &__hero-inner { display:flex; flex-direction:column; gap:.75rem; text-align:center; }
  &__hero-inner p, &__hero-inner h1 { text-align:center; }
  &__list { padding: 3rem 1rem 5rem; }
  &__filters { display:flex; flex-direction:column; gap:1.5rem; margin-bottom:2.5rem; }
  &__search-wrap { position:relative; }
  &__search { width:100%; padding:1rem 5rem 1rem 1.25rem; border:1px solid #b9d7bc; border-radius:12px; color:#06280c; background:#fff; outline:none; }
  &__search:focus { border-color:#2d6639; box-shadow:0 0 0 3px rgba(45,102,57,.12); }
  &__clear, &__reset { color:#2d6639; font-size:.875rem; font-weight:600; }
  &__clear { position:absolute; right:1.25rem; top:50%; transform:translateY(-50%); }
  &__tag-filter { display:flex; flex-direction:column; gap:.75rem; }
  &__tag-heading { display:flex; justify-content:space-between; align-items:center; color:#13331c; font-size:1rem; font-weight:700; }
  &__tag-list { display:flex; flex-wrap:wrap; gap:.5rem; }
  &__tag { padding:.55rem .85rem; border:1px solid #b9d7bc; border-radius:999px; color:#2d6639; background:#fff; cursor:pointer; transition:all .2s ease; }
  &__tag:hover, &__tag--active { border-color:#2d6639; color:#fff; background:#2d6639; }
  &__tag-loading { color:#3a8047; font-size:.875rem; }
  &__grid { display:grid; grid-template-columns:1fr; gap:1.5rem; @media (min-width:768px){grid-template-columns:repeat(2,1fr)} @media (min-width:1024px){grid-template-columns:repeat(3,1fr)} }
  &__card { display:flex; flex-direction:column; background:#fff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; cursor:pointer; text-decoration:none; transition:transform .2s ease, box-shadow .2s ease; }
  &__card:hover { transform:translateY(-4px); box-shadow:0 12px 24px rgba(19,51,28,.12); }
  &__card-image { aspect-ratio:1200/630; overflow:hidden; background:#f7fbf3; }
  &__card-image img { display:block; width:100%; height:100%; object-fit:contain; object-position:center; }
  &__card-placeholder { width:100%; height:100%; background:linear-gradient(135deg,#b4e27e 0%,#2d6639 100%); opacity:.35; }
  &__card-body { display:flex; flex:1; flex-direction:column; gap:.5rem; padding:1.25rem; }
  &__date { color:#3a8047; font-size:.875rem; }
  &__card-title { color:#06280c; font-size:1.125rem; font-weight:700; line-height:1.4; }
  &__card-tags { display:flex; flex-wrap:wrap; gap:.35rem; }
  &__card-tag { padding:.2rem .5rem; border-radius:999px; color:#2d6639; background:#edf8e5; font-size:.75rem; }
  &__card-excerpt { display:-webkit-box; overflow:hidden; color:#13331c; font-size:.9375rem; line-height:1.6; -webkit-line-clamp:3; -webkit-box-orient:vertical; }
  &__read-more { margin-top:auto; padding-top:.25rem; color:#2d6639; font-size:.875rem; font-weight:600; }
  &__state { padding:3rem 1rem; color:#13331c; font-size:1rem; text-align:center; }
  &__state--error { color:#b91c1c; }
  &__pagination { display:flex; align-items:center; justify-content:center; gap:1rem; margin-top:2rem; color:#13331c; }
  &__page-btn { padding:.5rem 1rem; border:1px solid #2d6639; border-radius:8px; color:#2d6639; background:#fff; cursor:pointer; }
  &__page-btn:disabled { opacity:.4; cursor:not-allowed; }
  &__sr-only { position:absolute; width:1px; height:1px; padding:0; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
}
</style>
