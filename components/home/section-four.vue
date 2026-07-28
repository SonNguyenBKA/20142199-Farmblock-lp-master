<template>
  <div class="section-four h-fit w-screen">
    <div class="grid h-full w-full grid-cols-2 grid-rows-3 md:grid-rows-2">
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
const isMobile = useMobile()
const listCard = [
  {
    title: '10',
    sub_title: '+',
    desc: 'Đối tác Chiến lược',
  },
  {
    title: '10',
    sub_title: '+',
    desc: 'Dự án Đang Triển khai',
  },
  {
    title: '30',
    sub_title: '%',
    desc: 'Lợi nhuận Trung bình Hàng năm',
  },
  {
    title: '5',
    sub_title: ' triệu USD',
    desc: 'Tổng Giá trị Tài sản đang quản lý',
  },
]
const styleCardWrap = (index: number) => {
  const bgColor = isMobile.value ? (index === 3 ? 'bg-two' : 'bg-one') : index <= 1 ? 'bg-one' : 'bg-two'
  return [
    bgColor,
    index % 2 === 0 ? 'justify-end ' : 'justify-start md:pl-[4rem]',
    { 'col-span-2': index === 2 || index === 3 },
  ]
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
