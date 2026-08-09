<template>
  <div class="block-hero relative">
    <video
      ref="videoRef"
      :src="backgroundHero"
      loop
      autoplay
      muted
      playsinline
      class="absolute inset-0 z-[-1] h-full w-full object-cover"
    />
    <div class="max-w-content flex h-full w-full flex-1 flex-col justify-end">
      <div
        class="flex w-full flex-col items-center justify-between gap-6 py-[2.625rem] md:flex-row md:items-end md:gap-0 md:py-[7.5rem]"
      >
        <div class="flex w-full flex-col gap-2 md:max-w-[60.6875rem] md:gap-1">
          <p
            data-aos="fade-down"
            class="text-center text-body-16-bold text-brand-primary md:text-start md:text-heading-32-bold"
          >
            {{ $t('hero.label') }}
          </p>
          <h1
            data-aos="fade-down"
            data-aos-delay="300"
            class="text-center text-heading-36-bold text-brand-secondary md:text-start md:text-heading-72-bold"
          >
            {{ $t('home.hero.title') }}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="500"
            class="text-center text-label-14-reg text-brand-secondary md:text-start md:text-body-24-reg"
          >
            {{ $t('home.hero.desc') }}
          </p>
        </div>
        <common-button
          data-aos="fade-left"
          data-aos-delay="1000"
          :text="$t('btn.explore')"
          :size="'lg'"
          :extra-class="['!rounded-full']"
          @click="handleRedirect('/model', false, false)"
        >
          <template #append>
            <span class="size-[1.5rem] md:size-[2.625rem]">
              <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
            </span>
          </template>
        </common-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundHero from '@/assets/videos/hero.mp4'

const { handleRedirect } = useRedirect()
</script>

<style lang="scss" scoped>
.block-hero {
  @apply flex h-screen w-screen flex-col 3xl:max-h-[67.5rem];
  background: linear-gradient(180deg, rgba(32, 77, 43, 0) 41.83%, #204d2b 100%);
  // background: linear-gradient(180deg, rgba(32, 77, 43, 0.00) 41.83%, #204D2B 100%), #FFF;
}
</style>
