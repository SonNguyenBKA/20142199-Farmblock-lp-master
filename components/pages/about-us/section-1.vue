<template>
  <section class="about-us-section-1">
    <div class="about-us-section-1--layer1">
      <video ref="videoAboutMeRef" :src="isMobile ? bgAboutMeMb : bgAboutMe" loop autoplay muted playsinline />
    </div>
    <div class="about-us-section-1--layer2"></div>
    <div class="about-us-section-1--layer3">
      <div class="block-content max-w-content" data-aos="fade-in" data-aos-delay="100">
        <p class="text-[1rem] font-bold text-[#B4E27E] sm:text-[2rem]">Về chúng tôi</p>
        <p class="text-[2rem] font-bold leading-[135%] text-[#F0F9E5] sm:text-[4.5rem]">
          Hành trình từ miền đất đỏ đến tương lai
        </p>
        <p class="text-center font-normal leading-[135%] text-[#F0F9E5] text-[0.875remrem] sm:text-[1.5rem]">
          Trên mảnh đất bazan trù phú, chúng tôi gieo những hạt giống của sự bền vững, <br />
          kết nối thiên nhiên với công nghệ, cùng nông dân Tây Nguyên viết nên câu chuyện vươn ra thế giới.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bgAboutMe from '@/public/video/bg-about-me.mp4'
import bgAboutMeMb from '@/public/video/bg-about-me-mb.mp4'

const isMobile = useMobile()
</script>

<style lang="scss">
.about-us-section-1 {
  @apply h-screen w-screen 3xl:max-h-[67.5rem];
  // @apply min-h-[calc(100vw*3/2)] sm:min-h-[calc(100vw*9/16)];
  // height: 100vh;
  //background-image: url("@/assets/images/pages/about-me/bg-section-1.webp");
  //background-size: cover;
  //background-repeat: no-repeat;
  position: relative;
  &--layer1 {
    position: absolute;
    inset: 0;
    z-index: 1;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &--layer2 {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(14, 59, 22, 0) 32.25%, #0e3b16 100%);
  }
  &--layer3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    .block-content {
      @apply flex flex-col items-center gap-2 py-[2.625rem] sm:py-[7.5rem];
      p {
        @apply text-center;
      }
    }
  }
}
</style>
