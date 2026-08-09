<template>
  <div class="section-three flex min-h-screen w-screen flex-col bg-brand-primary md:min-h-[73.75rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col items-center gap-4 py-6 md:gap-[4rem] md:py-[7.5rem]">
      <h3 id="three_block_1" class="w-full text-center text-body-28-bold text-default-primary md:text-heading-64-bold">
        {{ $t('home.sectionThree.title') }}
      </h3>
      <div id="three_block_2" class="grid h-full w-full flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        <div
          v-for="(card, index) in listCard"
          :key="index"
          :class="{ 'col-span-2 !border-transparent md:col-span-1': card.image }"
          class="overflow-hidden rounded-lg border border-[#B4E27E]"
        >
          <img v-if="card.image" :src="card.image" alt="" class="h-full w-full object-cover" />
          <div v-else class="flex flex-col gap-2 p-2 md:p-6">
            <div class="flex items-center justify-start gap-2 md:flex-col md:items-start md:gap-[2.625rem]">
              <img :src="card.icon" alt="" class="size-[2.625rem] object-cover md:size-[5.25rem]" />
              <h4 class="text-body-16-bold text-neutral-secondary md:text-body-24-bold">{{ card.title }}</h4>
            </div>
            <p class="text-label-14-reg text-default-primary md:text-body-18-reg">{{ card.desc }}</p>
          </div>
        </div>
      </div>
      <!-- <common-button
        id="three_btn"
        :text="$t('btn.explore')"
        :extra-class="['']"
        @click="handleRedirect('/', false, true)"
      >
        <template #append>
          <span class="size-[1.5rem]">
            <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
          </span>
        </template>
      </common-button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { iconThree } from '@/assets/icons/three/index.ts'
import imageCard03 from '@/assets/images/image-section-three-03.webp'
import imageCard04 from '@/assets/images/image-section-three-04.webp'

const { t } = useI18n()
const listCard = computed(() => [
  {
    title: t('home.sectionThree.cards.nature.title'),
    icon: iconThree.icon1,
    desc: t('home.sectionThree.cards.nature.desc'),
    image: null,
  },
  {
    title: t('home.sectionThree.cards.technology.title'),
    icon: iconThree.icon2,
    desc: t('home.sectionThree.cards.technology.desc'),
    image: null,
  },
  {
    title: '',
    icon: null,
    desc: '',
    image: imageCard03,
  },
  {
    title: '',
    icon: null,
    desc: '',
    image: imageCard04,
  },
  {
    title: t('home.sectionThree.cards.community.title'),
    icon: iconThree.icon5,
    desc: t('home.sectionThree.cards.community.desc'),
    image: null,
  },
  {
    title: t('home.sectionThree.cards.global.title'),
    icon: iconThree.icon6,
    desc: t('home.sectionThree.cards.global.desc'),
    image: null,
  },
])

gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  await nextTick()
  gsap.set('#three_block_1', { opacity: 0, y: -30 })
  // gsap.set('#three_btn', { opacity: 0, y: 30 })
  gsap.set('#three_block_2', { opacity: 0, scale: 0.95 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-three',
      start: 'top 10%',
      once: true,
    },
  })
  tl.to(
    '#three_block_1',
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    },
    0,
  )
  // tl.to(
  //   '#three_btn',
  //   {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     ease: 'power2.out',
  //   },
  //   0,
  // )
  tl.to(
    '#three_block_2',
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
    },
    '+=0.1',
  )
})
</script>

<style lang="scss" scoped></style>
