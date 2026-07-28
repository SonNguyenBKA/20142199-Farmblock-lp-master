<template>
  <section class="model-section-3">
    <div class="model-section-3--content max-w-content">
      <p
        class="block text-[1.75rem] font-bold leading-[130%] text-[#06280C] sm:hidden sm:text-[4rem] mobile:px-4 mobile:text-center"
      >
        Áp dụng các phương pháp canh tác hiện đại
      </p>
      <div class="w-full sm:w-[45%] sm:min-w-[32rem]">
        <img v-if="!isMobile" class="size-full" src="@/assets/images/pages/model/img-section-3-1.webp" alt="" />
        <img
          v-else
          class="w-full rounded-[0.5rem] object-cover"
          style="aspect-ratio: 22/16"
          src="@/assets/images/pages/model/img-section-3-1-mb.webp"
          alt=""
        />
      </div>
      <div v-if="!isMobile" class="flex w-full flex-col gap-6">
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="hidden text-[1.75rem] font-bold leading-[130%] text-[#06280C] sm:block sm:text-[4rem] mobile:px-4 mobile:text-center"
        >
          Áp dụng các phương pháp canh tác hiện đại
        </p>
        <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            v-for="(item, index) in blocks"
            :key="index"
            class="block-item"
            data-aos="fade-up"
            :data-aos-delay="calcTimeAni(index) * 200 + 200"
          >
            <div
              :class="{ 'items-start !justify-between': index === blocks.length - 1 }"
              class="flex h-full flex-col justify-center sm:w-full sm:flex-row sm:justify-start"
            >
              <img
                v-for="(itemC, i) in item.icons"
                :key="i"
                :src="itemC"
                alt=""
                :class="
                  index === blocks.length - 1
                    ? 'h-[1.5rem] w-auto sm:h-[3rem]'
                    : 'aspect-square size-[4rem] sm:size-[5.25rem]'
                "
              />
            </div>
            <div class="flex flex-1 flex-col gap-1 sm:gap-4">
              <p class="text-[1.5rem] font-bold leading-[140%] text-[#06280C]">{{ item.title }}</p>
              <p class="text-[0.875rem] font-medium leading-[140%] text-[#3A8047] sm:text-[1.125rem]">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="w-full">
        <swiper
          :initial-slide="0"
          :loop="true"
          :space-between="16"
          :slides-per-view="'auto'"
          :autoplay="{
            delay: 2000,
            reverseDirection: true,
          }"
          :speed="1000"
          :modules="modules"
        >
          <swiper-slide v-for="(item, index) in blocksSplit" :key="index">
            <div class="flex h-full flex-col gap-4">
              <div v-for="(card, i) in item" :key="i" class="block-item">
                <div
                  :class="card.icons?.length > 1 ? 'items-start !justify-between gap-6' : ''"
                  class="flex h-full flex-col justify-center sm:w-full sm:flex-row sm:justify-start"
                >
                  <img
                    v-for="(icon, iconIndex) in card.icons"
                    :key="iconIndex"
                    :src="icon"
                    alt=""
                    :class="
                      card.icons?.length > 1
                        ? 'h-[1.5rem] w-auto sm:h-[3rem]'
                        : 'aspect-square size-[4rem] sm:size-[5.25rem]'
                    "
                  />
                </div>
                <div class="flex flex-1 flex-col gap-1 sm:gap-4">
                  <p class="text-body-16-bold text-default-primary">{{ card.title }}</p>
                  <p class="text-label-14-reg text-[#3A8047]">
                    {{ card.content }}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AOS from 'aos'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, EffectFade, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import icon1 from '@/assets/icons/pages/model/section-3-1.svg'
import icon2 from '@/assets/icons/pages/model/section-3-2.svg'
import icon3_1 from '@/assets/icons/pages/model/section-3-3-1.svg'
import icon3_2 from '@/assets/icons/pages/model/section-3-3-2.svg'
import icon3_3 from '@/assets/icons/pages/model/section-3-3-3.svg'
import icon4 from '@/assets/icons/pages/model/section-3-4.svg'

const isMobile = useMobile()
const modules = [Scrollbar, A11y, EffectFade, Autoplay]
const blocks = ref([
  {
    icons: [icon1],
    title: 'Quy hoạch bài bản',
    content:
      'Các vùng trồng được thiết kế dưới sự cố vấn của các chuyên gia nông nghiệp trong nước và quốc tế, với định hướng dài hạn và có các phân khu chức năng rõ ràng.',
  },
  {
    icons: [icon2],
    title: 'Danh mục nông sản đa dạng',
    content:
      'Các giống cây được lựa chọn dựa trên đặc tính sinh thái và hiệu quả mùa vụ, kết hợp xen canh hợp lý giữa đặc sản, cây trồng lâu năm và cây trồng ngắn ngày.',
  },
  {
    icons: [icon4],
    title: 'Giống cây năng suất cao',
    content:
      'Sử dụng các giống cây trồng mới, đã được nghiên cứu và kiểm chứng thực nghiệm, nhằm tăng năng suất, giảm rủi ro và tối ưu điều kiện chăm sóc.',
  },
  {
    icons: [icon3_1, icon3_2, icon3_3],
    title: 'Tiêu chuẩn chất lượng uy tín',
    content:
      'Quy trình canh tác được vận hành theo các tiêu chuẩn hiện đại như GlobalG.A.P, ISO 22000 và HACCP, đảm bảo chất lượng ổn định và phù hợp với nhu cầu của thị trường.',
  },
])
const calcTimeAni = (index: number) => {
  if (index === 2) {
    return 3
  }
  if (index === 3) {
    return 2
  }
  return index
}
const blocksSplit = computed(() => {
  const half = Math.ceil(blocks.value.length / 2)
  return [blocks.value.slice(0, half), blocks.value.slice(half)]
})
onMounted(() => {
  const el = document.querySelector('.model-section-3') as HTMLElement
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.refresh()
        }
      })
    },
    { threshold: 0.2 },
  )
  observer.observe(el)
})
</script>

<style lang="scss">
.model-section-3 {
  background: #f7fcf2;
  // height: 100dvh;
  @media screen and (max-width: 1365px) {
    height: fit-content;
  }
  @apply sm:min-h-[calc(100vw*9/16)];
  @apply py-6 sm:py-[7.5rem];
  &--content {
    @apply flex w-full flex-col gap-4 sm:flex-row sm:gap-8;
    .block-item {
      @apply flex items-center gap-4 rounded-lg bg-[#f0f9e5] p-4 sm:flex-col sm:items-start sm:justify-center sm:p-6;
    }
  }
}
</style>
