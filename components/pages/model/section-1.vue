<template>
  <section class="model-section-1">
    <div class="model-section-1--layer1">
      <img src="@/assets/images/pages/model/bg-section-1.webp" alt="" />
      <!--      <video-->
      <!--        ref="videoAboutMeRef"-->
      <!--        :src="isMobile ? bgAboutMeMb : bgAboutMe"-->
      <!--        loop-->
      <!--        autoplay-->
      <!--        muted-->
      <!--        playsinline-->
      <!--      />-->
    </div>
    <div class="model-section-1--layer2"></div>
    <div class="model-section-1--layer3">
      <div class="block-content max-w-content" data-aos="fade-in" data-aos-delay="100">
        <p class="text-[1rem] font-bold text-[#008242] sm:text-[2rem]">Mô hình vận hành</p>
        <p class="text-[2rem] font-bold leading-[135%] text-[#06280C] sm:text-[4.5rem]">
          Hệ thống trang trại FarmBlock
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bgAboutMe from '@/assets/videos/bg-about-me.mp4'
import bgAboutMeMb from '@/assets/videos/bg-about-me-mb.mp4'

const isMobile = useMobile()
</script>

<style lang="scss">
.model-section-1 {
  @apply h-screen w-screen 3xl:max-h-[67.5rem];
  // @apply min-h-[calc(100vw*3/2)] sm:min-h-[calc(100vw*9/16)];
  // height: 100vh;
  //background-image: url("@/assets/images/pages/model/bg-section-1.webp");
  //background-size: cover;
  //background-repeat: no-repeat;
  position: relative;
  &--layer1 {
    position: absolute;
    inset: 0;
    z-index: 1;
    video,
    img {
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
    background: linear-gradient(180deg, rgba(247, 252, 242, 0) 50%, #f7fcf2 100%);
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
