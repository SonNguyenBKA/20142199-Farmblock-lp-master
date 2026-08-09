<template>
  <section class="about-us-section-5">
    <div class="about-us-section-5--content max-w-content">
      <p
        class="mb-[1.5rem] text-[1.75rem] font-bold leading-[140%] text-[#06280C] sm:mb-[4rem] sm:text-[4rem] mobile:text-center"
      >
        {{ $t('about.sectionFive.title') }}
      </p>
      <div
        :class="!isMobile ? 'row-item' : 'col-item'"
        v-for="(item, index) in dataRows"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
      >
        <template v-if="!isMobile">
          <img class="size-[5rem]" :src="item.icon" alt="" />
          <div class="grid w-full grid-cols-3 items-center gap-6">
            <p
              class="text-[2.625rem] font-bold leading-[140%]"
              :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
            >
              {{ item.title }}
            </p>
            <p
              class="text-[1.5rem] font-bold leading-[140%]"
              :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
            >
              {{ item.sub }}
            </p>
            <p class="text-[1.125rem] font-normal leading-[140%] text-[#06280C]">{{ item.content }}</p>
          </div>
        </template>
        <template v-else>
          <div class="col-item-child">
            <div class="flex items-center gap-4">
              <img class="size-[4rem]" :src="item.icon" alt="" />
              <div class="flex flex-1 flex-col">
                <p
                  class="text-[1.5rem] font-bold leading-[140%]"
                  :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
                >
                  {{ item.title }}
                </p>
                <p
                  class="text-[1rem] font-bold leading-[140%]"
                  :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
                >
                  {{ item.sub }}
                </p>
              </div>
            </div>
            <p class="text-[0.875rem] font-normal leading-[140%] text-[#06280C]">{{ item.content }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icon1 from '@/assets/icons/pages/about-me/icon-section-5-1.svg'
import icon2 from '@/assets/icons/pages/about-me/icon-section-5-2.svg'
import icon3 from '@/assets/icons/pages/about-me/icon-section-5-3.svg'

const isMobile = useMobile()
const { t } = useI18n()
const dataRows = computed(() => [
  {
    icon: icon1,
    title: t('about.sectionFive.timeline.first.title'),
    sub: t('about.sectionFive.timeline.first.sub'),
    content: t('about.sectionFive.timeline.first.content'),
  },
  {
    icon: icon2,
    title: t('about.sectionFive.timeline.second.title'),
    sub: t('about.sectionFive.timeline.second.sub'),
    content: t('about.sectionFive.timeline.second.content'),
  },
  {
    icon: icon3,
    title: t('about.sectionFive.timeline.future.title'),
    sub: t('about.sectionFive.timeline.future.sub'),
    content: t('about.sectionFive.timeline.future.content'),
  },
])
</script>

<style lang="scss">
.about-us-section-5 {
  background: #f7fcf2;
  height: fit-content;
  //@apply sm:min-h-[calc(100vw*9/16)];
  @apply sm:py-[5rem];
  &--content {
    @apply flex w-full flex-col mobile:py-6;
    .row-item {
      @apply flex w-full items-center gap-6 p-6;
      border-top: 1px solid #3a8047;
    }

    .col-item {
      .col-item-child {
        @apply flex flex-col gap-4;
        border-top: 1px solid #3a8047;
        padding: 1rem 0.5rem;
      }
    }
  }
}
</style>
