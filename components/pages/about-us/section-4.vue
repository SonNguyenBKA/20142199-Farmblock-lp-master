<template>
  <section class="about-us-section-4">
    <div class="about-us-section-4--content max-w-content">
      <div class="flex flex-col items-center justify-center gap-1 sm:hidden">
        <p class="text-body-16-bold text-[#008242]">{{ $t('about.sectionFour.eyebrow') }}</p>
        <p class="text-center text-[1.625rem] font-bold text-default-primary">{{ $t('about.sectionFour.title') }}</p>
      </div>
      <div class="swiper-slide-img relative">
        <swiper
          ref="swiperRefImg"
          :initial-slide="0"
          :slides-per-view="1"
          :direction="isMobile ? 'horizontal' : 'vertical'"
          :loop="true"
          :slides-per-group-skip="1"
          :modules="modules"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide v-for="(item, index) in slides" :key="index">
            <img class="size-full" :src="isMobile ? item.cardMb : item.card" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="about-us-section-4--collapse">
        <div class="hidden sm:block">
          <p class="text-title">{{ $t('about.sectionFour.eyebrow') }}</p>
          <p class="text-content">{{ $t('about.sectionFour.title') }}</p>
        </div>
        <el-collapse v-model="activeNames" accordion @change="handleChange">
          <el-collapse-item v-for="(item, index) in collapse" :key="index" :title="item.title" :name="index">
            <div>
              {{ item.content }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CollapseModelValue } from 'element-plus'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import card1 from '@/assets/images/pages/about-me/card-section-4-1.webp'
import card2 from '@/assets/images/pages/about-me/card-section-4-2.webp'
import card3 from '@/assets/images/pages/about-me/card-section-4-3.webp'
import card1Mb from '@/assets/images/pages/about-me/card-section-4-1-mb.webp'
import card2Mb from '@/assets/images/pages/about-me/card-section-4-2-mb.webp'
import card3Mb from '@/assets/images/pages/about-me/card-section-4-3-mb.webp'

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade]

const isMobile = useMobile()
const { t } = useI18n()
const slides = computed<any[]>(() => [
  {
    card: card1,
    cardMb: card1Mb,
    title: t('about.sectionFour.slides.farmers.title'),
    content: t('about.sectionFour.slides.farmers.content'),
  },
  {
    card: card2,
    cardMb: card2Mb,
    title: t('about.sectionFour.slides.experts.title'),
    content: t('about.sectionFour.slides.experts.content'),
  },
  {
    card: card3,
    cardMb: card3Mb,
    title: t('about.sectionFour.slides.technology.title'),
    content: t('about.sectionFour.slides.technology.content'),
  },
])
const collapse = computed(() => slides.value.map(({ title, content }) => ({ title, content })))

const activeNames = ref(0)
const handleChange = (val: CollapseModelValue) => {
  activeNames.value = +val
  prevSlide()
}
onMounted(() => {
  const iconWrapper = document.querySelectorAll('.about-me-section-4--collapse .el-icon.el-collapse-item__arrow')
  Array.from(iconWrapper).forEach((item) => {
    item.innerHTML = ''
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
  <path d="M23.0498 21.0012L14.3877 12.3391L16.8626 9.86426L27.9995 21.0012L16.8626 32.138L14.3877 29.6632L23.0498 21.0012Z" fill="#3A8047"/>
</svg>`
  })
})
const activeIndex = ref(0)
const swiperInstance = ref()

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex
  swiperInstance.value = swiper
}
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
  swiperInstance.value = swiper
}

const isAsync = ref(false)
const prevSlide = () => {
  if (swiperInstance.value) {
    if (+activeNames.value === +activeIndex.value) {
      isAsync.value = true
      return
    }
    if (+activeNames.value !== +activeIndex.value) {
      swiperInstance.value.slidePrev()
      setTimeout(() => {
        prevSlide()
      }, 0)
    }
    isAsync.value = false
  }
}
watch(activeNames, () => {
  prevSlide()
})
watch(activeIndex, (val: any) => {
  if (isAsync.value) {
    activeNames.value = val
  }
})
</script>

<style lang="scss">
.about-us-section-4 {
  background: #f7fcf2;
  height: fit-content;
  //@apply sm:min-h-[calc(100vw*9/16)];
  @apply sm:py-[5rem];
  &--content {
    @apply flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-[4rem] mobile:py-6;
  }
  .swiper-slide-img {
    @apply w-full flex-shrink-0 [aspect-ratio:21.5/15] sm:aspect-square sm:w-[50%] sm:max-w-[40rem];
    .swiper-wrapper {
      @apply w-full [aspect-ratio:21.5/15] sm:aspect-square;
    }
  }
  .swiper-slide-text {
    @apply w-full;
    .swiper-wrapper {
      @apply w-full;
    }
  }
  &--collapse {
    @apply flex w-full flex-col gap-[4rem];
    .text-title {
      color: #008242;
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%; /* 2.8rem */
    }
    .text-content {
      color: #06280c;
      font-size: 4rem;
      font-weight: 700;
      line-height: 140%; /* 5.6rem */
    }
    .el-collapse {
      @apply border-none;

      .el-collapse-item {
        @apply border-t border-[#3a8047] p-3 px-2 py-3 sm:p-6;
        &__header {
          @apply h-5 border-none bg-transparent text-label-14-bold text-[#3a8047] text-default-primary sm:h-auto sm:text-body-24-bold;
          transition: all 0.15s ease;
          &:hover {
            @apply sm:text-[#3a8047];
            .el-collapse-item__arrow {
              @apply rotate-90;
            }
          }
          .el-collapse-item__arrow {
            @apply size-6 sm:size-[2.625rem];
            &.is-active {
              @apply sm:-rotate-90;
            }
            svg {
              @apply size-6 sm:size-full;
            }
          }
          &.is-active {
            color: #3a8047;
          }
        }
        &__wrap {
          background: transparent;
          border-bottom: none;
        }
        &__content {
          @apply mt-1 pb-0 text-label-14-reg text-default-primary sm:mt-[1rem] sm:text-body-18-med;
        }
      }
    }
  }
}
</style>
