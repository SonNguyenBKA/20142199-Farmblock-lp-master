<template>
  <section class="model-section-6 overflow-hidden">
    <div class="model-section-6--content max-w-content">
      <div class="grid w-full grid-cols-1 sm:grid-cols-2">
        <img class="size-full object-cover" src="@/assets/images/pages/model/img-section-6-1.webp" alt="" />
        <div class="block-info">
          <div class="flex items-center gap-1">
            <img class="size-[2rem] sm:size-[4rem]" src="@/assets/icons/common/logo-square.svg" alt="" />
            <p class="text-[1.5rem] font-semibold text-[#FFF] sm:text-[2rem]">FARMBLOCK</p>
          </div>
          <p class="text-[2rem] font-bold leading-[140%] text-[#B4E27E] sm:text-[3.5rem]">{{ $t('model.sectionSix.title') }}</p>
          <div class="flex flex-col gap-4">
            <p class="text-[0.875rem] font-normal leading-[140%] text-[#FFF] sm:text-[1.125rem]">
              {{ $t('model.sectionSix.paragraph_1') }}
            </p>
            <p class="text-[1.125rem] font-normal leading-[140%] text-[#FFF]">
              {{ $t('model.sectionSix.paragraph_2') }}
            </p>
          </div>
          <common-button class="w-fit sm:w-full" :text="$t('model.sectionSix.cta')" @click="handleRedirect(sampleGardenUrl, true)">
            <template #append>
              <span class="size-[1.5rem]">
                <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
              </span>
            </template>
          </common-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { handleRedirect } = useRedirect()
const sampleGardenUrl = 'https://vuonmau.farmblock.vn/'
</script>

<style lang="scss">
.model-section-6 {
  background-image: url('@/assets/images/pages/model/bg-section-6.webp');
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  @apply py-6 sm:py-[7.5rem];
  &--content {
    .block-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 1 0 0;
      background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
      @apply gap-4 p-4 sm:gap-[2.625rem] sm:p-[2.625rem];
    }
  }
}
</style>
