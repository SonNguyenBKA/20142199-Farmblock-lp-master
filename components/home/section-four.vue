<template>
  <div class="section-four h-fit w-screen">
    <div class="grid h-full w-full grid-cols-2 grid-rows-1">
      <div
        v-for="(card, index) in listCard"
        :key="index"
        :class="styleCardWrap(index)"
        class="bg-one flex h-full w-full items-center py-4 md:col-span-1 md:py-[4rem]"
      >
        <div class="flex w-full flex-col items-center gap-1 md:max-w-[calc(49.5rem)] md:items-start md:px-4">
          <h3>
            <span class="number-animate text-heading-42-semi text-brand-secondary md:text-heading-84-med">
              {{ card.title }}
            </span>
            <span class="text-heading-42-semi text-brand-secondary md:text-heading-84-med"> {{ card.sub_title }}</span>
          </h3>
          <p class="text-label-14-reg text-brand-secondary md:text-body-20-med">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const { t } = useI18n()
const listCard = computed(() => [
  {
    title: '15',
    sub_title: '+',
    desc: t('home.sectionFour.strategic_partners'),
  },
  {
    title: '10',
    sub_title: '+',
    desc: t('home.sectionFour.active_projects'),
  },
])
const styleCardWrap = (index: number) => {
  return ['bg-one', index === 0 ? 'justify-end' : 'justify-start md:pl-[4rem]']
}

onMounted(async () => {
  await nextTick()
  const items = document.querySelectorAll('.number-animate')
  items.forEach((el) => {
    const finalValue = Number((el as HTMLElement).textContent?.replace(/\D/g, '') || '0')
    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: finalValue,
        duration: 1,
        ease: 'power1.in',
        snap: { textContent: 1 },
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.section-four',
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          const val = Number((el as HTMLElement).textContent || '0')
          ;(el as HTMLElement).textContent = val.toLocaleString()
        },
      },
    )
  })
})
</script>

<style lang="scss" scoped>
.bg-one {
  background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
}
.bg-two {
  background: linear-gradient(90deg, #2d6639 0%, #13331c 100%);
}
</style>
