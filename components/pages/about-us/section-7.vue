<template>
  <section class="about-us-section-7 hidden-scroll">
    <div class="flex w-full items-center">
      <img v-for="i in iconsRandom" class="size-[5rem]" :src="i" alt="" />
    </div>
    <div v-if="!isMobile" class="flex w-full items-center">
      <img v-for="i in iconsRandom1" class="size-[5rem]" :src="i" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import _ from 'lodash'
import icon1 from '@/assets/icons/pages/about-me/icons/icon1.svg'
import icon2 from '@/assets/icons/pages/about-me/icons/icon2.svg'
import icon3 from '@/assets/icons/pages/about-me/icons/icon3.svg'
import icon4 from '@/assets/icons/pages/about-me/icons/icon4.svg'
const isMobile = useMobile()

const amount = ref(0)
const icons = [icon1, icon2, icon3, icon4]
const iconsRandom = ref<any>([])
const iconsRandom1 = ref<any>([])
const idInterval = ref()

onMounted(() => {
  calcAmount()
  window.addEventListener('resize', () => {
    // clearInterval(idInterval.value)
    calcAmount()
  })
})

const calcAmount = () => {
  amount.value = +(window.innerWidth / remToPx(5)).toFixed(0) + 1
  iconsRandom.value = new Array(amount.value).fill(null).map(() => random())
  iconsRandom1.value = new Array(amount.value).fill(null).map(() => random())
  // idInterval.value = setInterval(() => {
  //   iconsRandom.value = new Array(amount.value).fill(null).map(() => random())
  //   iconsRandom1.value = new Array(amount.value).fill(null).map(() => random())
  // }, 3000)
}

const getRemValue = () => {
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

const remToPx = (rem: number) => {
  return rem * getRemValue()
}

const random = () => {
  return icons[Math.floor(Math.random() * 4)]
}
onUnmounted(() => {
  clearInterval(idInterval.value)
})
</script>

<style lang="scss">
.about-us-section-7 {
  overflow: hidden;
}
</style>
