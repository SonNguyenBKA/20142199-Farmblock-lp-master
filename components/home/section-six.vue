<template>
  <div class="section-six flex min-h-screen w-screen flex-col bg-brand-secondary md:min-h-[70.8125rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col gap-4 py-6 md:gap-[4rem] md:py-[7.5rem]">
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <p class="text-center text-body-16-bold text-neutral-primary md:text-heading-32-bold">
          {{ $t('home.sectionSix.eyebrow') }}
        </p>
        <h3 class="text-center text-body-28-bold text-default-primary md:text-heading-64-bold">
          {{ $t('home.sectionSix.title') }}
        </h3>
      </div>
      <div class="grid h-full w-full flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-[2.625rem]">
        <img :src="imageSection" alt="" class="h-auto w-full object-cover md:h-full" />
        <div v-if="!isMobile" class="grid h-full w-full grid-cols-1 grid-rows-5">
          <div
            v-for="(card, index) in listCard"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 300"
            class="flex items-start justify-between gap-2 border-t border-[#3A8047] p-2 md:items-center md:gap-6 md:p-6"
          >
            <h4 class="w-1/2 text-label-14-bold text-neutral-secondary md:text-body-24-bold">{{ card.title }}</h4>
            <p class="flex-1 text-label-14-reg text-default-primary md:text-body-18-reg">
              {{ card.desc }}
            </p>
          </div>
        </div>
        <div v-else class="cs-collapse">
          <el-collapse v-model="nameActive" accordion>
            <el-collapse-item
              v-for="(item, index) in listCard"
              :key="index"
              :title="item.title"
              :name="index"
              :disabled="index === activeIndex"
            >
              <div>{{ item.desc }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageSection from '@/assets/images/image-section-six.webp'

const isMobile = useMobile()
const { t } = useI18n()
const nameActive = ref(0)
const listCard = computed(() => [
  {
    title: t('home.sectionSix.cards.investors.title'),
    desc: t('home.sectionSix.cards.investors.desc'),
  },
  {
    title: t('home.sectionSix.cards.producers.title'),
    desc: t('home.sectionSix.cards.producers.desc'),
  },
  {
    title: t('home.sectionSix.cards.trade.title'),
    desc: t('home.sectionSix.cards.trade.desc'),
  },
  {
    title: t('home.sectionSix.cards.research.title'),
    desc: t('home.sectionSix.cards.research.desc'),
  },
  {
    title: t('home.sectionSix.cards.partners.title'),
    desc: t('home.sectionSix.cards.partners.desc'),
  },
])

onMounted(() => {
  const iconWrapper = document.querySelectorAll('.cs-collapse .el-icon.el-collapse-item__arrow')
  Array.from(iconWrapper).forEach((item) => {
    item.innerHTML = ''
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9999 12.9499L7.0502 8.00012L5.63599 9.41432L11.9999 15.7783L18.3639 9.41432L16.9497 8.00012L11.9999 12.9499Z" fill="#3A8047"/>
</svg>`
  })
})
</script>

<style lang="scss">
.cs-collapse {
  .el-collapse {
    @apply border-none;

    .el-collapse-item {
      @apply border-t border-[#3a8047] px-3 py-2;

      &__header {
        @apply h-auto border-none bg-transparent text-left text-label-14-bold text-[#3a8047];
        .el-collapse-item__arrow {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0 !important;
          &.is-active {
            transform: rotate(-180deg);
          }
          svg {
            @apply size-6;
          }
        }
      }
      &__wrap {
        background: transparent;
        border-bottom: none;
      }
      &__content {
        @apply pb-0 text-label-14-reg text-[#06280c];
        line-height: 140%; /* 1.575rem */
      }
    }
  }
}
</style>
