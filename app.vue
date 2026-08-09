<template>
  <suspense>
    <template #default>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </template>
  </suspense>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const { locale, setLocale } = useI18n()
const languageCookie = useCookie<'vi' | 'en'>('i18n_lang', { default: () => 'vi' })

onMounted(async () => {
  const nextLocale = languageCookie.value === 'en' ? 'en' : 'vi'
  if (locale.value !== nextLocale) {
    await setLocale(nextLocale)
  }
  languageCookie.value = nextLocale
})
</script>

<style lang="scss"></style>
