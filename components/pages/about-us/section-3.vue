<template>
  <section class="about-us-section-3">
    <img
      v-if="isMobile"
      class="w-full object-cover"
      style="aspect-ratio: 4/3"
      src="@/assets/images/pages/about-me/bg-section-3-sm-new.webp"
      alt=""
    />
    <div class="about-us-section-3--content max-w-content">
      <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-[4rem]">
        <div data-aos="fade-in" class="flex flex-col gap-6">
          <h3 class="text-[1.625rem] font-bold text-default-primary sm:text-[4rem]">
            Sứ mệnh gìn giữ, <br />
            tầm nhìn vươn xa
          </h3>
          <div v-if="isMobile" data-aos="fade-in" class="block-card">
            <div v-for="(card, index) in cards" :key="index" class="block-card--item">
              <img class="size-[2rem] sm:size-[4rem]" :src="card.icon" alt="" />
              <p class="text-[0.75rem] font-bold leading-[140%] text-[#B4E27E] sm:text-[2.625rem]">{{ card.text }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-2 sm:gap-6">
            <p class="text-label-14-reg text-default-primary sm:text-body-18-reg">
              Farmity tồn tại để bảo vệ đất đai, tôn vinh nông dân, và minh bạch hóa nông nghiệp. Mỗi cây trồng là một
              cam kết với thiên nhiên, mỗi vụ mùa là một lời hứa với cộng đồng.
            </p>
            <p class="text-label-14-reg text-default-primary sm:text-body-18-reg">
              Chúng tôi hỗ trợ nông dân Tây Nguyên, mang công nghệ đến từng luống đất, và đưa nông sản sạch đến mọi gia
              đình.
            </p>
          </div>
        </div>
        <div v-if="!isMobile" data-aos="fade-in" data-aos-delay="1000" class="block-card">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="block-card--item"
            data-aos="fade-up"
            :data-aos-delay="400 * (index + 1)"
          >
            <img class="size-[2rem] sm:size-[4rem]" :src="card.icon" alt="" />
            <p class="text-[0.75rem] font-bold leading-[140%] text-[#B4E27E] sm:text-[2.625rem]">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bvtn from '@/assets/icons/pages/about-me/bvtn.svg'
import mbhnn from '@/assets/icons/pages/about-me/mbhnn.svg'
import tvnd from '@/assets/icons/pages/about-me/tvnd.svg'

const isMobile = useMobile()

const textContents = ref([
  'Sứ mệnh gìn giữ, <br> tầm nhìn vươn xa',
  'Farmity  tồn tại để bảo vệ đất đai, tôn vinh nông dân, và minh bạch hóa nông nghiệp. Mỗi cây trồng là một cam kết với thiên nhiên, mỗi vụ mùa là một lời hứa với cộng đồng.',
  'Chúng tôi hỗ trợ nông dân Tây Nguyên, mang công nghệ đến từng luống đất, và đưa nông sản sạch đến mọi gia đình.',
])

const cards = ref([
  {
    icon: bvtn,
    text: 'Bảo vệ thiên nhiên',
  },
  {
    icon: mbhnn,
    text: 'Tôn vinh nông dân',
  },
  {
    icon: tvnd,
    text: 'Minh bạch hoá nông nghiệp',
  },
])
</script>

<style lang="scss">
.about-us-section-3 {
  background-image: url('@/assets/images/pages/about-me/bg-section-3.webp');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100dvh;
  @apply min-h-[calc(100vw*3/2)] sm:min-h-[calc(100vw*9/16)];
  @apply py-6 pt-0 sm:py-[7.5rem];
  @media screen and (max-width: 639px) {
    background-image: none;
    background-color: #f0f9e5;
    height: fit-content;
  }
  &--content {
    @apply flex h-fit w-full flex-col sm:h-full sm:items-end sm:justify-end mobile:mt-6;
    .block-text-content {
      @apply flex flex-col gap-4 sm:gap-6;
      p:first-child {
        color: #06280c;
        font-weight: 700;
        line-height: 140%; /* 5.6rem */
        @apply text-[1.75rem] sm:text-[4rem] mobile:mb-2;
      }

      p {
        color: #06280c;
        font-weight: 400;
        line-height: 140%; /* 1.575rem */
        @apply text-[0.875rem] sm:text-[1.125rem];
      }
    }
    .block-card {
      @apply grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-6;

      &--item {
        @apply flex flex-col items-start gap-2 rounded-lg p-2 sm:flex-row sm:items-center sm:gap-6 sm:p-6;
        background: linear-gradient(90deg, #13331c 0%, #2d6639 100%), #06280c;
      }
    }
  }
}
</style>
