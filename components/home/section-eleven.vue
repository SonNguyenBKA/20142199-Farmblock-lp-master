<template>
  <div id="download-app" class="section-eleven flex w-screen flex-col bg-brand-primary">
    <div
      class="max-w-content flex w-full flex-col items-center gap-6 py-6 md:flex-row md:items-center md:justify-between md:gap-[4rem] md:py-[7.5rem]"
    >
      <div class="flex w-full flex-col gap-4 md:max-w-[36.5rem] md:gap-6">
        <h3 class="text-center text-body-28-bold text-default-primary md:text-start md:text-heading-48-bold">
          {{ $t('home.sectionEleven.title') }}
        </h3>
        <p class="text-center text-label-14-reg text-default-secondary md:text-start md:text-body-18-reg">
          {{ $t('home.sectionEleven.desc') }}
        </p>
        <div class="flex items-center justify-center gap-3 md:justify-start md:gap-4">
          <a
            :href="appStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="store-badge"
            :aria-label="$t('home.sectionEleven.app_store_aria')"
          >
            <img :src="appStoreBadge" alt="" class="h-[2.5rem] w-auto object-contain md:h-[3.5rem]" />
          </a>
          <a
            :href="googlePlayUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="store-badge"
            :aria-label="$t('home.sectionEleven.google_play_aria')"
          >
            <img :src="googlePlayBadge" alt="" class="h-[2.5rem] w-auto object-contain md:h-[3.5rem]" />
          </a>
        </div>
      </div>
      <div class="flex w-full justify-center md:flex-1 md:justify-end">
        <img
          :src="phonesImage"
          :alt="$t('home.sectionEleven.image_alt')"
          class="h-auto w-full max-w-[21.5rem] object-contain md:max-w-[42rem]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStoreBadge from '@/assets/images/pages/home/section-eleven-app-store.webp'
import googlePlayBadge from '@/assets/images/pages/home/section-eleven-google-play.webp'
import phonesImage from '@/assets/images/pages/home/section-eleven-phones.webp'

const appStoreUrl = 'https://apps.apple.com/vn/app/farmblock-one/id6767744402'
const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.farmblock.app'
</script>

<style lang="scss" scoped>
.store-badge {
  @apply cursor-pointer border-0 bg-transparent p-0 transition-transform duration-200 ease-out;

  &:active {
    transform: scale(0.98);
  }
}
</style>
