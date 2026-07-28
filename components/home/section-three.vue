<template>
  <div class="section-three flex min-h-screen w-screen flex-col bg-brand-primary md:min-h-[73.75rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col items-center gap-4 py-6 md:gap-[4rem] md:py-[7.5rem]">
      <h3 id="three_block_1" class="w-full text-center text-body-28-bold text-default-primary md:text-heading-64-bold">
        Giá trị trường tồn từ đất đai và con người
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
        :text="'Khám phá giá trị của chúng tôi'"
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

const { handleRedirect } = useRedirect()
const listCard = [
  {
    title: 'Thiên nhiên trù phú',
    icon: iconThree.icon1,
    desc: 'Những cánh đồng ở Gia Lai là nơi đất đỏ bazan nuôi dưỡng mùi vị cà phê đậm đà và hương thơm sầu riêng ngọt ngào. Chúng tôi kết hợp trồng trọt với công tác cải tạo, bảo vệ thiên nhiên, để đất đai mãi màu mỡ.',
    image: null,
  },
  {
    title: 'Công nghệ tiên phong',
    icon: iconThree.icon2,
    desc: 'Chúng tôi áp dụng các công nghệ hiện đại như drone theo dõi, hệ thống cảm biến thông minh và công nghệ blockchain minh bạch, tạo tiền đề cho một nền nông nghiệp tương lai từ tinh túy đất Việt.',
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
    title: 'Cộng đồng bền vững',
    icon: iconThree.icon5,
    desc: 'Chúng tôi hỗ trợ nông dân Tây Nguyên trong hoạt động canh tác, đào tạo nâng cao chuyên môn và trao cơ hội việc làm. Mỗi cây trồng là một nụ cười, mỗi vụ mùa là một câu chuyện.',
    image: null,
  },
  {
    title: 'Tầm nhìn toàn cầu',
    icon: iconThree.icon6,
    desc: 'Cùng các đối tác và các chuyên gia nông nghiệp đến từ  Israel và châu Âu, chúng tôi đưa nông sản Việt Nam đến bữa ăn của các gia đình toàn cầu, nâng tầm giá trị nông nghiệp.',
    image: null,
  },
]

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
