<template>
  <section class="model-section-2">
    <div class="model-section-2--content">
      <template v-if="!isMobile">
        <div class="line-top">
          <div class="layer-1">
            <img class="h-full w-full object-cover 1" :class="{'loading': isLoading}" :src="lists[0]" alt="">
          </div>
          <div class="layer-2">
            <img class="h-full w-full object-cover 2" :class="{'loading': isLoading}" :src="lists[1]" alt="">
          </div>
          <div class="layer-3">
            <img class="h-full w-full object-cover 3" :class="{'loading': isLoading}" :src="lists[2]" alt="">
          </div>
        </div>
        <div class="line-middle">
          <div class="layer-1">
            <img class="h-full w-full object-cover 4" :class="{'loading': isLoading}" :src="lists[3]" alt="">
          </div>
          <div class="layer-2 flex flex-col justify-center items-center">
            <div class="">
              <p class="text-[#06280C] sm:text-[3rem] md:text-[4rem] font-bold leading-[120%] text-center">Từ thực địa đến</p>
              <p class="text-gradient">một hệ sinh thái toàn diện</p>
              <p class="text-[#000] sm:text-[1rem] md:text-[1.125rem] font-normal leading-[140%] text-center">
                <span class="text-[#008242] text-[1.125rem] font-bold leading-[140%]">Farmblock</span> xây dựng các vùng trồng thực tế, được sở hữu trực tiếp bởi các đơn vị sản xuất tại địa phương –
                nơi công nghệ, tiêu chuẩn và cơ chế quản trị hiện đại được áp dụng nhằm nâng cao hiệu suất, minh bạch hóa
                quy trình và kết nối đồng bộ với toàn hệ thống. Mô hình này đã được triển khai tại Tây Nguyên và đang tiếp
                tục mở rộng trên nhiều vùng sinh thái khác, trở thành lớp hạ tầng thực địa của hệ sinh thái <span class="text-[#008242] text-[1.125rem] font-bold leading-[140%]">Farmblock.</span>
              </p>
            </div>
          </div>
          <div class="layer-3">
            <img class="h-full w-full object-cover 8" :class="{'loading': isLoading}" :src="lists[7]" alt="">
          </div>
        </div>
        <div class="line-bottom">
          <div class="layer-1">
            <img class="h-full w-full object-cover 7" :class="{'loading': isLoading}" :src="lists[6]" alt="">
          </div>
          <div class="layer-2">
            <img class="h-full w-full object-cover 6" :class="{'loading': isLoading}" :src="lists[5]" alt="">
          </div>
          <div class="layer-3">
            <img class="h-full w-full object-cover 5" :class="{'loading': isLoading}" :src="lists[4]" alt="">
          </div>
        </div>
      </template>
      <template v-else>
        <swiper
          ref="swiperRefIm"
          :initial-slide="0"
          :loop="true"
          :space-between="16"
          :slides-per-view="'auto'"
          :allow-touch-move="false"
          :autoplay="{
            delay: 2000,
          }"
          :speed="1000"
          :modules="modules"
        >
          <swiper-slide v-for="(item, index) in lists" :key="index">
            <div class="h-[16.5rem] flex flex-col justify-end items-end">
              <img class="max-h-[16.25rem]" :src="item" alt="">
            </div>
          </swiper-slide>
        </swiper>
        <div class="">
          <p class="text-[#06280C] text-[1.75rem] font-bold leading-[120%] text-center">Từ thực địa đến</p>
          <p class="text-gradient !text-[1.75rem]">một hệ sinh thái toàn diện</p>
          <p class="text-[#000] text-[1.125rem] font-normal leading-[140%] text-center mt-4">
            <span class="text-[#008242] text-[1.125rem] font-bold leading-[140%]">Farmblock</span> xây dựng các vùng trồng thực tế, được sở hữu trực tiếp bởi các đơn vị sản xuất tại địa phương –
            nơi công nghệ, tiêu chuẩn và cơ chế quản trị hiện đại được áp dụng nhằm nâng cao hiệu suất, minh bạch hóa
            quy trình và kết nối đồng bộ với toàn hệ thống. Mô hình này đã được triển khai tại Tây Nguyên và đang tiếp
            tục mở rộng trên nhiều vùng sinh thái khác, trở thành lớp hạ tầng thực địa của hệ sinh thái <span class="text-[#008242] text-[1.125rem] font-bold leading-[140%]">Farmblock.</span>
          </p>
        </div>
        <swiper
          ref="swiperRefIm"
          :initial-slide="0"
          :loop="true"
          :space-between="16"
          :slides-per-view="'auto'"
          :allow-touch-move="false"
          :autoplay="{
            delay: 2000,
            reverseDirection: true,
          }"
          :speed="1000"
          :modules="modules"
        >
          <swiper-slide v-for="(item, index) in listsRv" :key="index">
            <div class="h-[16.5rem] flex flex-col justify-start items-start">
              <img class="max-h-[16.25rem]" :src="item" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, EffectFade, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import card1 from '@/assets/images/pages/model/img-section-2-1.webp'
import card2 from '@/assets/images/pages/model/img-section-2-2.webp'
import card3 from '@/assets/images/pages/model/img-section-2-3.webp'
import card4 from '@/assets/images/pages/model/img-section-2-4.webp'
import card5 from '@/assets/images/pages/model/img-section-2-5.webp'
import card6 from '@/assets/images/pages/model/img-section-2-6.webp'
import card7 from '@/assets/images/pages/model/img-section-2-7.webp'
import card8 from '@/assets/images/pages/model/img-section-2-8.webp'
const modules = [Scrollbar, A11y, EffectFade, Autoplay]

const isMobile = useMobile()
const lists = ref([card1, card2, card3, card4, card5, card6, card7, card8])
const listsRv = _.reverse(lists.value)
const isLoading = ref(false)
const idInterval = ref()

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))
onMounted(() => {
  if (!isMobile.value) {
    idInterval.value = setInterval(async () => {
      await changeSlide()
    }, 5000)
  }
})
const changeSlide = async () => {
  const lastItem = lists.value[lists.value.length - 1]
  const listNew = lists.value.slice(0, -1)
  isLoading.value = true
  lists.value = [lastItem, ...listNew]
  await delay(3000)
  isLoading.value = false
}
onUnmounted(() => {
  clearInterval(idInterval.value)
})
</script>

<style lang="scss">
.model-section-2 {
  @apply h-fit;
  @apply flex justify-center items-center;
  &--content {
    @apply flex flex-col gap-6 px-4 py-12;
    .line-top {
      //border: 1px solid black;
      @apply mx-auto flex h-[15rem] w-[60vw] max-w-[60rem] items-end gap-6;
      .layer-1 {
        height: 85%;
        aspect-ratio: 1/1;
        // background: olive
      }

      .layer-2 {
        width: 100%;
        height: 100%;
        // background: olive
      }

      .layer-3 {
        height: 85%;
        aspect-ratio: 1/1;
        // background: olive
      }
    }

    .line-middle {
      //border: 1px solid black;
      @apply mx-auto flex sm:h-[20rem] md:h-[25rem] w-full max-w-[105rem] flex-row-reverse items-end gap-6;
      .layer-1 {
        height: 100%;
        aspect-ratio: 1/1;
        // background: olive
      }

      .layer-2 {
        width: 100%;
        height: 100%;
        // background: olive
      }

      .layer-3 {
        height: 100%;
        aspect-ratio: 1/1;
        // background: olive
      }
    }

    .line-bottom {
      //border: 1px solid black;
      @apply mx-auto flex h-[16.5rem] w-[60vw] max-w-[60rem] items-start gap-6;
      .layer-1 {
        height: 85%;
        width: 100%;
        // background: olive
      }

      .layer-2 {
        width: 100%;
        height: 100%;
        // background: olive
        aspect-ratio: 1/1;
      }

      .layer-3 {
        height: 85%;
        width: 100%;
        // background: olive
      }
    }
  }
  .text-gradient {
    font-weight: 700;
    line-height: 120%; /* 5.6rem */
    text-align: center;
    background: linear-gradient(90deg, #008242 0%, #2D6639 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @apply sm:text-[3rem] md:text-[4rem];
  }
  .loading {
    animation: opacityAni 1s linear;
  }
  @keyframes opacityAni {
    from {opacity: 0.7}
    to {opacity: 1}
  }
  .swiper-wrapper .swiper-slide {
    width: fit-content !important;
  }
}
</style>
