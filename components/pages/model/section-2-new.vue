<template>
  <div class="model-section-new bg-[#F7FCF2]">
    <div class="section-wrapper sticky-slot">
      <div class="section-wrapper__title max-w-content flex flex-col gap-4">
        <h2 class="flex flex-col">
          <span class="text-[1.625rem] font-bold text-default-primary sm:text-heading-64-bold"> Từ thực địa đến </span>
          <span class="text-[1.625rem] font-bold text-[#008242] sm:text-heading-64-bold">
            một hệ sinh thái toàn diện
          </span>
        </h2>
        <p class="w-full max-w-[50.75rem] text-body-18-reg text-black">
          <span class="text-body-18-bold text-[#008242]">Farmblock</span>
          xây dựng các vùng trồng thực tế, được sở hữu trực tiếp bởi các đơn vị sản xuất tại địa phương – nơi công nghệ,
          tiêu chuẩn và cơ chế quản trị hiện đại được áp dụng nhằm nâng cao hiệu suất, minh bạch hóa quy trình và kết
          nối đồng bộ với toàn hệ thống. Mô hình này đã được triển khai tại Tây Nguyên và đang tiếp tục mở rộng trên
          nhiều vùng sinh thái khác, trở thành lớp hạ tầng thực địa của hệ sinh thái
          <span class="text-body-18-bold text-[#008242]">Farmblock</span>.
        </p>
      </div>
      <div class="section-wrapper__card">
        <div v-for="(box, index) in boxs" :key="index" class="box">
          <div class="box__content" :style="{ width: box.width }">
            <img :src="box.url" alt="" class="box__content--box-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import card1 from '@/assets/images/pages/model/img-section-2-1.webp'
import card2 from '@/assets/images/pages/model/img-section-2-2.webp'
import card3 from '@/assets/images/pages/model/img-section-2-3.webp'
import card4 from '@/assets/images/pages/model/img-section-2-4.webp'
import card5 from '@/assets/images/pages/model/img-section-2-5.webp'
import card6 from '@/assets/images/pages/model/img-section-2-6.webp'
import card7 from '@/assets/images/pages/model/img-section-2-7.webp'
import card8 from '@/assets/images/pages/model/img-section-2-8.webp'

const isMobile = useMobile()
const rawBoxs = [
  { url: card1, width: '12rem', x: ['-50vw', '-10vw'], y: ['-5vh', '-35vh'] },
  { url: card2, width: '34rem', x: ['50vw', '50vw'], y: ['-15vh', '-40vh'] },
  { url: card3, width: '12rem', x: ['150vw', '110vw'], y: ['-5vh', '-35vh'] },
  { url: card4, width: '25rem', x: ['170vw', '130vw'], y: ['50vh', '60vh'] },
  { url: card5, width: '20rem', x: ['160vw', '100vw'], y: ['115vh', '150vh'] },
  { url: card6, width: '16.25rem', x: ['50vw', '50vw'], y: ['120vh', '150vh'] },
  { url: card7, width: '20rem', x: ['-60vw', '0vw'], y: ['105vh', '150vh'] },
  { url: card8, width: '25rem', x: ['-70vw', '-30vw'], y: ['50vh', '60vh'] },
]
const boxs = computed(() =>
  rawBoxs.map((box: any) => ({
    url: box.url,
    width: box.width,
    x: isMobile.value ? box.x[0] : box.x[1],
    y: isMobile.value ? box.y[0] : box.y[1],
  })),
)

gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  await nextTick()
  const boxes = document.querySelectorAll('.box')
  const boxContent = document.querySelectorAll('.box__content')
  const titleText = document.querySelector('.section-wrapper__title')
  boxes.forEach((box, index) => {
    gsap.set(box, {
      x: boxs.value[index].x,
      y: boxs.value[index].y,
    })
  })
  gsap.set(boxContent, { xPercent: -50, yPercent: -50 })

  const s3 = gsap.timeline({
    defaults: { ease: 'none', duration: 1 },
    scrollTrigger: {
      trigger: '.section-wrapper__card',
      scrub: 1,
      start: 'top top',
      end: 'bottom top',
      markers: false,
    },
  })
  s3.to(boxes, { x: '50%', y: '50vh' })
  s3.to(
    titleText,
    {
      scale: 0.3,
      opacity: 0.8,
    },
    '-=1',
  )
})
</script>

<style lang="scss" scoped>
.model-section-new {
  @apply relative h-[200vh] w-full;
}
.section-wrapper {
  @apply sticky top-0 h-[100vh];

  &__title {
    @apply flex h-full place-content-center place-items-center overflow-hidden text-center;

    h2 {
      @apply relative;
    }
  }

  &__card {
    @apply absolute inset-0 overflow-hidden;
  }
}

.box {
  &__content {
    @apply absolute left-0 top-0 flex flex-col items-center justify-center gap-2 overflow-hidden;

    &--box-image {
      @apply h-auto w-1/2 object-cover md:w-full;
    }
  }
}
</style>
