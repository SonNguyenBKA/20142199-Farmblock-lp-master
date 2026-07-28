<template>
  <div class="section-eight flex h-fit w-screen flex-col md:min-h-[60.375rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col gap-6 py-4 md:gap-[4rem] md:py-[7.5rem]">
      <div class="flex flex-col items-center gap-2 md:gap-4">
        <p class="text-center text-body-16-bold text-brand-primary md:text-heading-32-bold">Hợp tác vì sự bền vững</p>
        <h3 class="text-center text-body-28-bold text-brand-secondary md:text-heading-64-bold">
          Chúng tôi đồng hành cùng những người tiên phong
        </h3>
      </div>
      <div class="h-[0.0625rem] w-full bg-[#2D6639]" />
      <div class="flex h-full w-full flex-1 flex-col items-center justify-center gap-6 overflow-hidden md:gap-[4rem]">
        <SlideInfinity
          v-for="(slide, index) in 4"
          :key="index"
          :cols="index % 2 === 0 ? 3 : 4"
          :reverse="index % 2 !== 0"
          :offset="index % 2 !== 0"
        >
          <li v-for="(item, index) in multiArray(listCard, 8)" :key="index" class="slide-infinity-item">
            <div class="flex w-full items-center gap-2">
              <img :src="item.icon" alt="" class="size-[1.82606rem] flex-shrink-0 sm:size-[3.65219rem]" />
              <p class="text-[1.5rem] font-semibold text-[#F0F9E5] sm:text-[2.625rem]">{{ item.text }}</p>
            </div>
          </li>
        </SlideInfinity>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconBrand from '@/assets/icons/icon-brand.svg'
import SlideInfinity from '~/components/pages/about-me/slide-infinity.vue'

const listCard = ref([
  {
    icon: iconBrand,
    text: 'FARMBLOCK',
  },
  {
    icon: iconBrand,
    text: 'FARMBLOCK',
  },
  {
    icon: iconBrand,
    text: 'FARMBLOCK',
  },
])
</script>

<style lang="scss" scoped>
.section-eight {
  background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
}
</style>
