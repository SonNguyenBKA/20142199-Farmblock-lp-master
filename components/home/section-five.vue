<template>
  <div class="section-five flex h-fit w-screen flex-col bg-brand-primary md:min-h-[75.875rem]">
    <div
      class="flex h-full w-full flex-1 flex-col items-center justify-between gap-6 py-6 md:gap-[4rem] md:py-[7.5rem]"
    >
      <div class="max-w-content flex w-full flex-col items-center justify-center gap-1">
        <p class="text-center text-body-16-bold text-neutral-primary md:text-heading-32-bold">
          {{ $t('home.sectionFive.eyebrow') }}
        </p>
        <h3 class="text-center text-body-28-bold text-default-primary md:text-heading-64-bold">
          {{ $t('home.sectionFive.title') }}
        </h3>
      </div>
      <div class="flex w-full flex-1 flex-col gap-6 md:gap-[4rem]">
        <div class="flex w-full flex-1">
          <swiper
            :modules="modules"
            :initial-slide="0"
            :centered-slides="true"
            :centered-slides-bounds="true"
            :slide-to-clicked-slide="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :speed="700"
            :loop="true"
            :breakpoints="{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.9,
                spaceBetween: 42,
                centeredSlides: true,
              },
            }"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
          >
            <swiper-slide v-for="(card, index) in [...listCard, ...listCard]" :key="index">
              <div
                class="card relative flex h-full min-h-[21.375rem] w-full flex-col justify-end overflow-hidden rounded-lg"
                :style="{
                  backgroundImage: `linear-gradient(180deg, rgba(19, 51, 28, 0) 41.83%, #13331c 100%), url(${card.image})`,
                }"
              >
                <div class="flex flex-col gap-2 p-4 md:p-[2.625rem]">
                  <h4 class="text-body-16-bold text-brand-primary md:text-heading-32-bold">{{ card.title }}</h4>
                  <p class="flex-1 text-label-14-reg text-brand-secondary md:text-body-20-reg">
                    {{ card.desc }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="flex items-center justify-center gap-2">
          <button @click="swiperIns.slidePrev()">
            <svg
              class="size-[1.5rem] rounded-sm md:size-[4rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <rect width="64" height="64" rx="4" fill="#008242" />
              <path
                d="M28.8754 32.0019L42.0749 45.2011L38.3037 48.9723L21.333 32.0019L38.3037 15.0312L42.0749 18.8025L28.8754 32.0019Z"
                fill="#F0F9E5"
              />
            </svg>
          </button>
          <button @click="swiperIns.slideNext()">
            <svg
              class="size-[1.5rem] rounded-sm md:size-[4rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <rect width="64" height="64" rx="4" fill="#008242" />
              <path
                d="M35.1232 32.0019L21.9238 18.8025L25.6951 15.0312L42.6656 32.0019L25.6951 48.9723L21.9238 45.2011L35.1232 32.0019Z"
                fill="#F0F9E5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import imageCard01 from '@/assets/images/image-section-five-card-01.webp'
import imageCard02 from '@/assets/images/image-section-five-card-02.webp'
import imageCard03 from '@/assets/images/image-section-five-card-03.webp'
import imageCard04 from '@/assets/images/image-section-five-card-04.webp'

const { t } = useI18n()
const listCard = computed(() => [
  {
    title: t('home.sectionFive.cards.connect.title'),
    desc: t('home.sectionFive.cards.connect.desc'),
    image: imageCard01,
  },
  {
    title: t('home.sectionFive.cards.transparency.title'),
    desc: t('home.sectionFive.cards.transparency.desc'),
    image: imageCard02,
  },
  {
    title: t('home.sectionFive.cards.smart_care.title'),
    desc: t('home.sectionFive.cards.smart_care.desc'),
    image: imageCard03,
  },
  {
    title: t('home.sectionFive.cards.sustainability.title'),
    desc: t('home.sectionFive.cards.sustainability.desc'),
    image: imageCard04,
  },
])
const modules = [Autoplay]
const swiperIns = ref()

const onSwiper = (swiper: any) => {
  swiperIns.value = swiper
}
const onSlideChange = (swiper: any) => {
  swiperIns.value = swiper
}
</script>

<style lang="scss" scoped>
.card {
  background-color: lightgray;
  background-position: 41.83%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
