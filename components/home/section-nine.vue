<template>
  <div
    class="section-nine flex h-screen max-h-[36.625rem] w-screen flex-col bg-brand-primary md:h-auto md:min-h-[58.25rem]"
  >
    <div class="flex h-full w-full flex-1 flex-col gap-4 py-6 md:gap-[4rem] md:py-[7.5rem]">
      <div class="max-w-content w-full">
        <h3 class="text-center text-body-28-bold text-default-primary md:text-heading-64-bold">Đội ngũ sáng lập</h3>
      </div>
      <div v-if="!isMobile" class="max-w-content h-full w-full flex-1">
        <div ref="sectionRef" class="grid h-full w-full flex-1 grid-cols-4 gap-6">
          <div v-for="(card, index) in listCard" :key="index">
            <div
              :class="[
                'transition-all duration-1000 ease-out',
                visibleCards.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0',
              ]"
              class="flex h-full w-full flex-col justify-between overflow-hidden rounded"
            >
              <img :src="card.image" alt="" class="h-full w-full object-cover" />
              <div class="flex flex-col gap-4 bg-[#13331C] p-6">
                <div class="flex flex-col gap-1">
                  <h3 class="text-body-24-bold text-brand-primary">{{ card.name }}</h3>
                  <h4 class="text-body-16-bold text-brand-primary md:text-body-18-bold">{{ card.position }}</h4>
                </div>
                <div class="h-[0.0625rem] w-full bg-[#204D2B]" />
                <p class="text-body-16-reg text-inverse-primary md:text-body-18-reg">
                  {{ card.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex h-full w-full flex-1">
        <swiper
          :initial-slide="0"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slide-to-clicked-slide="true"
          :slides-per-view="1.3"
          :modules="modules"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :speed="700"
          :breakpoints="{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 10,
              centeredSlides: true,
              loop: true,
            },
          }"
          @swiper="onSwiper"
          @slide-change="onSwiper"
        >
          <swiper-slide v-for="(card, index) in listCard" :key="index" class="">
            <div class="flex h-full w-full flex-col justify-between overflow-hidden rounded">
              <img :src="card.image" alt="" class="h-full w-full object-cover" />
              <div class="flex flex-col gap-4 bg-[#13331C] p-6">
                <div class="flex flex-col gap-1">
                  <h3 class="text-body-24-bold text-brand-primary">{{ card.name }}</h3>
                  <h4 class="text-body-16-bold text-brand-primary md:text-body-18-bold">{{ card.position }}</h4>
                </div>
                <div class="h-[0.0625rem] w-full bg-[#204D2B]" />
                <p class="text-body-16-reg text-inverse-primary md:text-body-18-reg">
                  {{ card.desc }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import imageCard from '@/assets/images/image-section-nine-card.webp'

import { useIsMobile } from '~/composables/use-is-mobile'

const { isMobile } = useIsMobile()
const modules = [Autoplay]
const listCard = [
  {
    name: 'Họ và tên 1',
    position: 'Chức vụ',
    image: imageCard,
    desc: 'Đây là ví dụ đoạn giới thiệu ngắn về một thành viên trong đội ngũ sáng lập của Farmblock',
  },
  {
    name: 'Họ và tên 2',
    position: 'Chức vụ',
    image: imageCard,
    desc: 'Đây là ví dụ đoạn giới thiệu ngắn về một thành viên trong đội ngũ sáng lập của Farmblock',
  },
  {
    name: 'Họ và tên 3',
    position: 'Chức vụ',
    image: imageCard,
    desc: 'Đây là ví dụ đoạn giới thiệu ngắn về một thành viên trong đội ngũ sáng lập của Farmblock',
  },
  {
    name: 'Họ và tên 4',
    position: 'Chức vụ',
    image: imageCard,
    desc: 'Đây là ví dụ đoạn giới thiệu ngắn về một thành viên trong đội ngũ sáng lập của Farmblock',
  },
]
gsap.registerPlugin(ScrollTrigger)
const sectionRef = ref<HTMLElement | null>(null)
const visibleCards = ref<number[]>([])
const timeouts: number[] = []
onMounted(async () => {
  await nextTick()
  if (!sectionRef.value) {
    return
  }
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 40%',
    once: true,
    onEnter: () => {
      listCard.forEach((_, index) => {
        const timeoutId = window.setTimeout(() => {
          visibleCards.value.push(index)
        }, index * 3000)
        timeouts.push(timeoutId)
      })
    },
  })
  onBeforeUnmount(() => {
    timeouts.forEach((id: number) => clearTimeout(id))
  })
})
</script>

<style lang="scss" scoped></style>
