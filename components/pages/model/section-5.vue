<template>
  <section class="model-section-5">
    <div class="model-section-5--content">
      <div data-aos="fade-in" data-aos-delay="100" class="block-top">
        <p class="text-[#06280C] text-[1.75rem] sm:text-[4rem] font-bold leading-[140%] sm:w-[70%] mobile:text-center">{{ $t('model.sectionFive.title') }}</p>
        <p class="text-[#06280C] text-[0.875rem] sm:text-[1.125rem] font-medium leading-[140%] sm:w-[30%] mobile:text-center">
          {{ $t('model.sectionFive.description_before') }}
          <span class="text-[#009E50] text-[0.875rem] sm:text-[1.125rem] font-bold leading-[140%]">Farmblock</span>
          {{ $t('model.sectionFive.description_after') }}
        </p>
      </div>
      <div class="swiper-wrapper">
        <swiper
          ref="swiperRefImg"
          :initial-slide="1"
          :slides-per-view="isMobile ? 1.25 : 2"
          :loop="true"
          :centered-slides="true"
          :speed="800"
          :autoplay="{
            delay: 3000,
          }"
          :slides-per-group-skip="1"
          :space-between="isMobile ? remToPx(1) : remToPx(2.625)"
          :modules="modules"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="(item, index) in [...slides, ...slides]" :key="index">
            <div class="flex flex-col justify-center items-center gap-2">
              <img style="aspect-ratio: 68/42;" class="size-full rounded-[0.5rem] overflow-hidden" :src="isMobile ? item.img : item.img" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="flex items-center justify-center gap-2 mobile:mt-[-1.5rem]">
        <button @click="swiperIns.slidePrev()">
          <svg class="size-[1.5rem] sm:size-[4rem] rounded-sm" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="4" fill="#008242"/>
            <path d="M28.8754 32.0019L42.0749 45.2011L38.3037 48.9723L21.333 32.0019L38.3037 15.0312L42.0749 18.8025L28.8754 32.0019Z" fill="#F0F9E5"/>
          </svg>
        </button>
        <button @click="swiperIns.slideNext()">
          <svg class="size-[1.5rem] sm:size-[4rem] rounded-sm" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="4" fill="#008242"/>
            <path d="M35.1232 32.0019L21.9238 18.8025L25.6951 15.0312L42.6656 32.0019L25.6951 48.9723L21.9238 45.2011L35.1232 32.0019Z" fill="#F0F9E5"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import bgSlide1 from '@/assets/images/pages/model/slide-section-5-1.webp'
import bgSlide2 from '@/assets/images/pages/model/slide-section-5-2.webp'
import bgSlide3 from '@/assets/images/pages/model/slide-section-5-3.webp'

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]

const isMobile = useMobile()
const swiperIns = ref()
const slides = ref([
  {
    img: bgSlide1,
  },
  {
    img: bgSlide2,
  },
  {
    img: bgSlide3,
  },
])

const onSwiper = (swiper) => {
  swiperIns.value = swiper
}

const getRemValue = () => {
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

const remToPx = (rem: number) => {
  return rem * getRemValue()
}
</script>

<style scoped lang="scss">
.model-section-5 {
  background: #f7fcf2;
  height: fit-content;
  @apply py-6 sm:py-[5.25rem];
  &--content {
    @apply flex flex-col gap-8 sm:gap-[4rem];
    .block-top {
      @apply max-w-[90rem] px-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-[2.625rem] mx-auto;
    }

  }
}
</style>
