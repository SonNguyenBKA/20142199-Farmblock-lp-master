<template>
  <section class="about-us-section-2">
    <div class="about-us-section-2--content max-w-content">
      <div data-aos="fade-in" data-aos-delay="200" class="grid w-full grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[0.5rem]">
        <img class="h-full w-full object-cover" src="@/assets/images/pages/about-me/img-section-2-1.webp" alt="img">
        <div class="block-content-img">
          <p class="text-[1.5rem] sm:text-[2.625rem] font-bold leading-[140%] text-[#B4E27E] text-center">{{ $t('about.sectionTwo.title') }}</p>
          <div class="flex flex-col gap-4">
            <p v-for="(item, index) in listTextContent" :key="index" class="text-[0.875rem] sm:text-[1.125rem] font-normal leading-[140%] text-[#F0F9E5]">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <!-- <div data-aos="fade-in" data-aos-delay="200" class="flex flex-col justify-center items-center gap-6 sm:gap-[4rem]">
        <p class="text-[1rem] sm:text-[2rem] font-bold text-[#B4E27E]">{{ $t('about.sectionTwo.collaboration_eyebrow') }}</p>
        <p class="mt-[-1rem] sm:mt-[-3rem] text-[1.75rem] sm:text-[3.5rem] mobile:text-center font-bold leading-[135%] text-[#F0F9E5]">
          {{ $t('about.sectionTwo.collaboration_title') }}
        </p>
        <div class="w-full h-[1px] bg-[#2D6639] sm:bg-[#204D2B]" />
        <div class="w-full flex flex-col gap-6 sm:gap-[4rem] justify-center items-center overflow-hidden">
          <SlideInfinity>
            <li v-for="item in multiArray(listCard1, 8)" class="slide-infinity-item">
              <div class="w-full flex items-center gap-2">
                <img class="size-[1.82606rem] sm:size-[3.65219rem] flex-shrink-0" :src="item.icon" alt="">
                <p class="text-[#F0F9E5] text-[1.5rem] sm:text-[2.625rem] font-semibold">{{ item.text }}</p>
              </div>
            </li>
          </SlideInfinity>
          <SlideInfinity :cols="4" :reverse="true" :offset="true">
            <li v-for="item in multiArray(listCard1, 8)" class="slide-infinity-item">
              <div class="w-full flex items-center gap-2">
                <img class="size-[1.82606rem] sm:size-[3.65219rem] flex-shrink-0" :src="item.icon" alt="">
                <p class="text-[#F0F9E5] text-[1.5rem] sm:text-[2.625rem] font-semibold">{{ item.text }}</p>
              </div>
            </li>
          </SlideInfinity>
          <template v-if="isMobile">
            <SlideInfinity>
              <li v-for="item in multiArray(listCard1, 8)" class="slide-infinity-item">
                <div class="w-full flex items-center gap-2">
                  <img class="size-[1.82606rem] sm:size-[3.65219rem] flex-shrink-0" :src="item.icon" alt="">
                  <p class="text-[#F0F9E5] text-[1.5rem] sm:text-[2.625rem] font-semibold">{{ item.text }}</p>
                </div>
              </li>
            </SlideInfinity>
            <SlideInfinity :cols="4" :reverse="true">
              <li v-for="item in multiArray(listCard1, 8)" :offset="true" class="slide-infinity-item">
                <div class="w-full flex items-center gap-2">
                  <img class="size-[1.82606rem] sm:size-[3.65219rem] flex-shrink-0" :src="item.icon" alt="">
                  <p class="text-[#F0F9E5] text-[1.5rem] sm:text-[2.625rem] font-semibold">{{ item.text }}</p>
                </div>
              </li>
            </SlideInfinity>
          </template>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const listTextContent = computed(() => [
  t('about.sectionTwo.paragraph_1'),
  t('about.sectionTwo.paragraph_2'),
  t('about.sectionTwo.paragraph_3'),
  t('about.sectionTwo.paragraph_4'),
])

</script>

<style lang="scss">
.about-us-section-2 {
  background-image: url('@/assets/images/pages/about-me/bg-section-2.webp');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  &--content {
    @apply flex flex-col gap-6 sm:gap-[11.25rem] py-6 sm:pb-[11.25rem] sm:pt-[7.5rem];
    .block-content-img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1 0 0;
      background: linear-gradient(90deg, #13331c 0%, #2d6639 100%), #06280c;
      @apply p-4 sm:px-[2.625rem] sm:py-16 items-center sm:items-start gap-4 sm:gap-6;
    }
  }
}
</style>
