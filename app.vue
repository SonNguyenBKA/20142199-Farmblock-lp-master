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
import { nextTick, onMounted } from 'vue'

onMounted(async () => {
  const { locale, setLocale, t } = useI18n()
  await nextTick()
  const cookie = useCookie('i18n_lang')
  if (cookie.value && cookie.value !== locale.value) {
    setLocale(cookie.value)
  } else {
    setLocale('vi')
    useCookie('i18n_lang').value = 'vi'
  }
})
</script>

<style lang="scss"></style>
