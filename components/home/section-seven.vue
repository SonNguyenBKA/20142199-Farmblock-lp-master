<template>
  <div
    class="section-seven relative flex h-fit w-screen flex-col overflow-hidden bg-brand-primary md:min-h-[50.6875rem]"
  >
    <div
      class="max-w-content flex h-full w-full flex-1 flex-col gap-4 py-6 md:flex-row md:items-stretch md:justify-between md:gap-[4rem] md:py-[7.5rem]"
    >
      <img
        data-aos="fade-left"
        data-aos-delay="300"
        :src="imageBackground"
        alt=""
        class="h-auto w-full rounded object-cover md:order-1 md:w-1/2 md:max-w-[40rem] md:rounded-none"
      />
      <div class="flex flex-1 flex-col justify-between gap-6 md:gap-[4rem]">
        <div data-aos="fade-right" data-aos-delay="0" class="flex flex-col gap-2 md:gap-4">
          <h4 class="text-center text-body-16-bold text-neutral-primary md:text-start md:text-heading-32-bold">
            {{ $t('home.sectionSeven.eyebrow') }}
          </h4>
          <h3 class="text-center text-body-28-bold text-default-primary md:text-start md:text-heading-64-bold">
            {{ $t('home.sectionSeven.title_line_1') }} <br />
            {{ $t('home.sectionSeven.title_line_2') }}
          </h3>
          <p class="text-center text-label-14-reg text-default-primary md:text-start md:text-body-18-reg">
            {{ $t('home.sectionSeven.desc') }}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">
          <div
            class="flex w-full items-center gap-4 rounded-lg border border-[#B4E27E] bg-brand-secondary p-4 md:gap-6 md:p-6"
          >
            <img :src="iconSeven.icon1" alt="" class="size-[4rem] md:size-[5.25rem]" />
            <p class="flex-1 text-body-16-bold text-neutral-secondary md:text-body-24-bold">
              {{ $t('home.sectionSeven.integrated_blocks') }}
            </p>
          </div>
          <div
            class="flex w-full items-center gap-4 rounded-lg border border-[#B4E27E] bg-brand-secondary p-4 md:gap-6 md:p-6"
          >
            <img :src="iconSeven.icon2" alt="" class="size-[4rem] md:size-[5.25rem]" />
            <p class="flex-1 text-body-16-bold text-neutral-secondary md:text-body-24-bold">
              {{ $t('home.sectionSeven.transparent_data') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageBackground from '@/assets/images/image-section-seven.webp'
import { iconSeven } from '@/assets/icons/seven/index.ts'
</script>

<style lang="scss" scoped></style>
