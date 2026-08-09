<template>
  <section v-if="showSection" class="about-us-section-6">
    <div class="about-us-section-6--content max-w-content">
      <div class="about-us-section-6__header">
        <p class="text-[#06280C] text-[1.75rem] sm:text-[4rem] font-bold leading-[140%] text-center mb-4 sm:mb-[4rem]">
          {{ $t('about.sectionSix.title') }}
        </p>
        <NuxtLink to="/blog" class="about-us-section-6__view-all">
          {{ $t('btn.view_all') }}
        </NuxtLink>
      </div>

      <div class="wrapper-swiper">
        <button v-if="!isMobile && canNavigate" type="button" @click="swiperIns?.slidePrev()">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H38C40.2091 0 42 1.79086 42 4V38C42 40.2091 40.2091 42 38 42H4C1.79086 42 0 40.2091 0 38V4Z" fill="#008242" />
            <path d="M18.9497 21.0012L27.6119 29.6632L25.137 32.138L14 21.0012L25.137 9.86426L27.6119 12.3391L18.9497 21.0012Z" fill="#F0F9E5" />
          </svg>
        </button>
        <swiper
          class="about-us-section-6__swiper"
          :class="{ 'about-us-section-6__swiper--single': displaySlides.length === 1 }"
          :initial-slide="0"
          :slides-per-view="visibleSlides"
          :space-between="isMobile ? remToPx(0.625) : remToPx(2.625)"
          :centered-slides="displaySlides.length < 3"
          :loop="canNavigate && displaySlides.length > 3"
          :slides-per-group-skip="1"
          :autoplay="canNavigate ? {
            delay: 3000,
            disableOnInteraction: false,
          } : false"
          :speed="700"
          :modules="modules"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in displaySlides"
            :key="`${item.slug}-${index}`"
            class="about-us-section-6__slide"
            @click="goToBlog(item.slug)"
          >
            <img
              class="about-us-section-6__slide-image"
              :src="item.img"
              :alt="item.title"
            >
            <div class="p-4 flex flex-col gap-4 mt-2">
              <p class="text-[#06280C] text-[1rem] sm:text-[1.5rem] font-bold leading-[140%] line-clamp-3">
                {{ item.title }}
              </p>
              <div class="w-full h-[1px] bg-[#3A8047]" />
              <div class="flex items-center justify-between">
                <span class="text-[#008242] text-[0.875rem] sm:text-[1.125rem] font-normal leading-[140%]">
                  {{ item.linkDes }}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path d="M23.0501 21.0012L14.3879 12.3391L16.8628 9.86426L27.9998 21.0012L16.8628 32.138L14.3879 29.6632L23.0501 21.0012Z" fill="#008242"/>
                </svg>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <button v-if="!isMobile && canNavigate" type="button" @click="swiperIns?.slideNext()">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect width="42" height="42" rx="4" fill="#008242"/>
            <path d="M23.0498 21.0012L14.3877 12.3391L16.8626 9.86426L27.9995 21.0012L16.8626 32.138L14.3877 29.6632L23.0498 21.0012Z" fill="#F0F9E5"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, EffectFade, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import slide1 from '@/assets/images/pages/about-me/slide-section-6-1.webp'
import slide2 from '@/assets/images/pages/about-me/slide-section-6-2.webp'
import slide3 from '@/assets/images/pages/about-me/slide-section-6-3.webp'

const modules = [Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]
const isMobile = useMobile()
const router = useRouter()
const { locale, t } = useI18n()
const { fetchBlogs } = useBlogApi()

const fallbackImages = [slide1, slide2, slide3]

const { data, pending, error } = await useAsyncData('about-us-blogs', () => fetchBlogs(1, '', 6), { watch: [locale] })

interface BlogSlide {
  slug: string
  img: string
  title: string
  linkDes: string
}

const slides = computed<BlogSlide[]>(() => {
  const posts = data.value?.data ?? []

  return posts.map((post, index) => ({
    slug: post.slug,
    img: post.featured_image_url || fallbackImages[index % fallbackImages.length],
    title: post.title,
    linkDes: t('btn.read_more'),
  }))
})

const displaySlides = computed(() => {
  const items = slides.value
  if (items.length >= 3) {
    return [...items, ...items]
  }
  return items
})

const visibleSlides = computed(() => {
  if (isMobile.value) {
    return Math.min(displaySlides.value.length || 1, 1.25)
  }
  return Math.min(displaySlides.value.length || 1, 3)
})

const canNavigate = computed(() => displaySlides.value.length > 1)
const showSection = computed(() => !pending.value && !error.value && slides.value.length > 0)

const swiperIns = ref()
const realIndex = ref(0)

const onSwiper = (swiper: { realIndex: number; slidePrev: () => void; slideNext: () => void }) => {
  swiperIns.value = swiper
  realIndex.value = swiper.realIndex
}

const onSlideChange = (swiper: { realIndex: number }) => {
  realIndex.value = swiper.realIndex
}

const goToBlog = (slug: string) => {
  router.push(`/blog/${slug}`)
}

const getRemValue = () => {
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

const remToPx = (rem: number) => {
  return rem * getRemValue()
}
</script>

<style lang="scss">
.about-us-section-6 {
  background: #f7fcf2;
  height: fit-content;
  @apply sm:py-[5rem];

  &--content {
    @apply flex w-full flex-col mobile:py-6 mobile:px-0;

    .wrapper-swiper {
      @apply w-full flex items-center gap-[0.625rem] sm:gap-[2.625rem];
    }
  }

  &__header {
    position: relative;
    width: 100%;
  }

  &__view-all {
    display: block;
    width: fit-content;
    margin: -0.25rem auto 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #008242;
    text-decoration: underline;

    @media (min-width: 640px) {
      position: absolute;
      right: 0;
      top: 1.25rem;
      margin: 0;
    }
  }

  &__swiper {
    flex: 1;
    min-width: 0;
    width: 100%;
  }

  &__swiper--single {
    max-width: 28rem;
    margin: 0 auto;

    @media (max-width: 639px) {
      max-width: calc(100% - 2rem);
    }
  }

  &__slide {
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #dce9dc;
    border-radius: 0.75rem;
    background: #fff;
    box-shadow: 0 1rem 2rem rgba(19, 51, 28, 0.08);
  }

  &__slide-image {
    display: block;
    width: 100%;
    aspect-ratio: 1200 / 630;
    object-fit: contain;
    object-position: center;
    background: #f7fbf3;
  }
}
</style>
