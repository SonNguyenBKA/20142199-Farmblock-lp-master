<template>
  <footer class="footer flex flex-col overflow-hidden">
    <div class="relative">
      <div
        data-aos="fade-in"
        data-aos-delay="0"
        class="max-w-content relative z-[1] flex w-full flex-col gap-6 py-6 md:gap-[2.625rem] md:py-[7.5rem]"
      >
        <NuxtLink
          data-aos="fade-in"
          data-aos-delay="100"
          class="flex w-fit cursor-pointer items-center justify-start gap-2"
          @click="handleRedirect('/', false, false)"
        >
          <img :src="iconLogo" alt="Logo" class="size-[2rem] object-cover md:size-[4rem]" />
          <span class="text-body-24-semi uppercase text-[#F0F9E5] md:text-heading-32-semi">FARMBLOCK</span>
        </NuxtLink>
        <h3 data-aos="fade-in" data-aos-delay="100" class="text-heading-32-semi text-[#B4E27E] md:text-heading-42-bold">
          {{ $t('footer.title') }}
        </h3>
        <div class="h-[0.0625rem] w-full bg-[#2D6639]" />
        <div data-aos="fade-in" data-aos-delay="500" class="grid grid-cols-1 gap-[2rem] md:grid-cols-3 md:gap-6">
          <ul class="flex w-full flex-col gap-4 md:gap-6">
            <p class="text-body-16-med text-[#B4E27E] md:text-body-16-bold">{{ $t('footer.quick_access') }}</p>
            <!-- <NuxtLink
              class="w-fit cursor-pointer text-body-16-reg text-[#F0F9E5] md:text-body-24-med"
              @click="scrollToTop()"
            >
              {{ $t('footer.home') }}
            </NuxtLink> -->
            <NuxtLink
              v-for="(item, index) in quickMenu"
              :key="index"
              class="w-fit cursor-pointer text-body-16-reg text-[#F0F9E5] md:text-body-24-med"
              @click="handleRedirect(item.link, false, item.coming_soon)"
            >
              {{ item.name }}
            </NuxtLink>
          </ul>
          <ul class="flex w-full flex-col gap-4 md:gap-6">
            <p class="text-body-16-med text-[#B4E27E] md:text-body-16-bold">{{ $t('footer.terms_&_policies') }}</p>
            <NuxtLink
              v-for="(item, index) in policyList"
              :key="index"
              class="w-fit cursor-pointer text-body-16-reg text-[#F0F9E5] md:text-body-24-med"
              @click="handleRedirect(item.link, false, item.coming_soon)"
            >
              {{ item.name }}
            </NuxtLink>
          </ul>
          <ul class="flex w-full flex-col gap-4 md:gap-6">
            <p class="text-body-16-med text-[#B4E27E] md:text-body-16-bold">{{ $t('footer.information') }}</p>
            <li
              v-for="(item, index) in contact"
              :key="index"
              class="w-fit text-body-16-reg text-[#F0F9E5] md:text-body-24-med"
            >
              {{ `${item.key}: ${item.value}` }}
            </li>
          </ul>
        </div>
      </div>
      <img
        :src="bgFooter"
        alt=""
        class="absolute right-0 top-0 h-full w-auto scale-[2] md:min-h-[51rem] md:translate-x-[25%] md:translate-y-[-5%] md:scale-[1]"
      />
    </div>
    <div class="bg-[#B4E27E]">
      <p class="max-w-content w-full py-4 text-center text-body-16-med text-default-primary">
        {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AOS from 'aos'
import iconLogo from '@/assets/icons/common/logo-square.svg'
import bgFooter from '@/assets/icons/icon-brand-xxl.svg'

const { t } = useI18n()

const { handleRedirect } = useRedirect()
const quickMenu = computed(() => [
  {
    name: t('footer.home'),
    link: '/',
    coming_soon: false,
  },
  {
    name: t('footer.about_me'),
    link: '/about-us',
    coming_soon: false,
  },
  {
    name: t('footer.operating_model'),
    link: '/model',
    coming_soon: false,
  },
  {
    name: t('footer.blog'),
    link: '/blog',
    coming_soon: false,
  },
  {
    name: t('footer.academy'),
    link: '/academy',
    coming_soon: false,
  },
])
const policyList = computed(() => [
  {
    name: t('footer.privacy_policy'),
    link: '/policy',
    coming_soon: false,
  },
  {
    name: t('footer.terms_of_service'),
    link: '/',
    coming_soon: true,
  },
  {
    name: t('footer.faq'),
    link: '/',
    coming_soon: true,
  },
])
const contact = computed(() => [
  {
    key: t('footer.address'),
    value: 'Tầng 13, Tòa nhà NIC, Ngõ 7 Tôn Thất Thuyết, Cầu Giấy, Hà Nội',
  },
  {
    key: t('footer.phone_number'),
    value: '+843-540-600-29',
  },
  {
    key: t('footer.email'),
    value: 'contact@farmblock.ai',
  },
])
onMounted(() => {
  const el = document.querySelector('.footer') as HTMLElement
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.refresh()
        }
      })
    },
    { threshold: 0.2 },
  )
  observer.observe(el)
})
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
}
</style>
