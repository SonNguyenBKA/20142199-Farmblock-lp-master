<template>
  <header class="header fixed left-0 top-0 z-[99] w-screen">
    <div class="max-w-content flex h-full w-full items-center justify-between py-4 md:py-6">
      <NuxtLink class="flex cursor-pointer items-center justify-start gap-2" @click="handleRedirect('/', false, false)">
        <img :src="iconLogo" alt="Logo" class="size-[2rem] object-cover md:size-[4rem]" />
        <span class="text-body-24-semi uppercase text-[#F0F9E5] md:text-heading-32-semi">FARMBLOCK</span>
      </NuxtLink>
      <div v-if="!isMobile" class="flex items-center justify-end gap-2">
        <ul class="list-menu">
          <li
            v-for="(item, index) in menus"
            :key="index"
            class="menu-item"
            :class="{ active: routeActive(route.path, item.link) }"
            @click="activeMenu(item)"
          >
            {{ item.name }}
          </li>
          <li class="flex items-center gap-2 px-4 py-2">
            <p
              class="cursor-pointer text-body-16-semi uppercase text-[#F0F9E5]/20"
              :class="currentLanguage === 'vi' ? '!text-[#F0F9E5]' : ''"
              @click="changeLanguage('vi')"
            >
              VN
            </p>
            <p
              class="cursor-pointer text-body-16-semi uppercase text-[#F0F9E5]/20"
              :class="currentLanguage === 'en' ? '!text-[#F0F9E5]' : ''"
              @click="changeLanguage('en')"
            >
              EN
            </p>
          </li>
        </ul>
        <button
          class="flex items-center justify-between gap-1 rounded border border-[#B4E27E] bg-[#06280C] py-2 pl-4 pr-2"
          @click="handleRedirect(sampleGardenUrl, true)"
        >
          <p class="text-body-16-semi text-[#B4E27E]">{{ $t('btn.launch_app') }}</p>
          <img :src="iconArrow" alt="" class="size-6 object-cover" />
        </button>
      </div>
      <span v-else class="aspect-square w-[1.5rem]" @click="showMenuMobile()">
        <img :src="iconMenu" alt="" class="h-full w-full object-cover" />
      </span>
    </div>
    <el-drawer
      v-if="isMobile"
      v-model="showMenuMb"
      :with-header="false"
      :show-close="false"
      direction="ttb"
      modal-class="modal-menu-drawer"
      class="menu-drawer"
      size="100%"
    >
      <template #default>
        <div class="flex h-full w-full flex-col justify-between">
          <div class="flex flex-col">
            <div class="drawer-top flex items-center justify-between p-4">
              <NuxtLink :to="'/'" class="flex items-center justify-start gap-2">
                <img :src="iconLogo" alt="Logo" class="size-[2rem] object-cover md:size-[4rem]" />
                <span class="text-body-24-semi uppercase text-[#F0F9E5] md:text-heading-32-semi">FARMBLOCK</span>
              </NuxtLink>
              <span class="aspect-square w-[1.5rem]" @click="closeMenuMobile()">
                <img :src="iconClose" alt="" class="h-full w-full object-cover" />
              </span>
            </div>
            <ul class="flex flex-col gap-0">
              <li
                v-for="(item, index) in menus"
                :key="index"
                class="cursor-pointer border-b border-[#12331D] p-4 text-center text-body-16-semi text-brand-secondary"
                :class="{ '!text-brand-primary': routeActive(route.path, item.link) }"
                @click="routerLink(item)"
              >
                {{ item.name }}
              </li>
              <li class="p4 flex items-center justify-center gap-2 border-b border-[#12331D] p-4">
                <p
                  class="cursor-pointer text-body-16-semi uppercase text-[#F0F9E5]/20"
                  :class="currentLanguage === 'vi' ? '!text-[#F0F9E5]' : ''"
                  @click="changeLanguage('vi')"
                >
                  VN
                </p>
                <p
                  class="cursor-pointer text-body-16-semi uppercase text-[#F0F9E5]/20"
                  :class="currentLanguage === 'en' ? '!text-[#F0F9E5]' : ''"
                  @click="changeLanguage('en')"
                >
                  EN
                </p>
              </li>
            </ul>
          </div>
          <div class="w-full p-4">
            <common-button
              :text="$t('btn.launch_app')"
              :size="'lg'"
              class="w-full"
              @click="handleRedirect(sampleGardenUrl, true)"
            >
              <template #append>
                <span class="size-[1.5rem] md:size-[2.625rem]">
                  <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
                </span>
              </template>
            </common-button>
          </div>
        </div>
      </template>
    </el-drawer>
  </header>
</template>

<script setup lang="ts">
import iconLogo from '@/assets/icons/common/logo-square.svg'
import iconArrow from '@/assets/icons/arrow-right-brand.svg'
import iconMenu from '@/assets/icons/menu.svg'
import iconClose from '@/assets/icons/close.svg'
import { useIsMobile } from '~/composables/use-is-mobile'

const route = useRoute()
const router = useRouter()
const { t, setLocale } = useI18n()
const { isMobile } = useIsMobile()
const { handleRedirect } = useRedirect()
const showMenuMb = ref(false)
const sampleGardenUrl = 'https://vuonmau.farmblock.vn/'
const currentLanguage = useCookie('i18n_lang', { default: () => 'vi' })
const menus = computed(() => [
  {
    name: t('menu.home'),
    link: '/',
    coming_soon: false,
  },
  {
    name: t('menu.about_us'),
    link: '/about-us',
    coming_soon: false,
  },
  {
    name: t('menu.model'),
    link: '/model',
    coming_soon: false,
  },
  {
    name: t('menu.technology'),
    link: '/cong-nghe',
    coming_soon: true,
  },
  {
    name: t('menu.contact'),
    link: '/contact',
    coming_soon: false,
  },
  {
    name: t('menu.download_app'),
    link: '/#download-app',
    coming_soon: false,
    scrollTo: 'download-app',
  },
])
const scrollToSection = async (id: string) => {
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const routeActive = (path: string, link: string) => {
  return path.replace(/\/$/, '') === link.replace(/\/$/, '')
}
const routerLink = (item: any) => {
  if (item.scrollTo) {
    closeMenuMobile()
    scrollToSection(item.scrollTo)
    return
  }
  handleRedirect(item.link, false, item.coming_soon)
  closeMenuMobile()
}
const showMenuMobile = () => {
  showMenuMb.value = true
}
const closeMenuMobile = () => {
  showMenuMb.value = false
}
const changeLanguage = async (lang: string) => {
  currentLanguage.value = lang
  // await setLocale(lang)
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
const activeMenu = (item: any) => {
  if (item.scrollTo) {
    scrollToSection(item.scrollTo)
    return
  }
  if (route.path === item.link) {
    scrollToTop()
  } else {
    handleRedirect(item.link, false, item.coming_soon)
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(180deg, #06280c 0%, rgba(6, 40, 12, 0) 100%);
}
.list-menu {
  @apply flex items-center justify-center gap-4;

  .menu-item {
    @apply relative cursor-pointer px-4 py-2 text-body-16-semi text-[#F0F9E5];
    &:not(:last-child)::before {
      content: '|';
      @apply absolute right-0 top-1/2 -translate-y-1/2 text-[#F0F9E5]/20;
      transform: translateY(-50%);
      margin-right: -11px;
    }
    &.active {
      &::after {
        width: 100%;
      }
    }
  }
  .menu-item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background-color: #b4e27e;
    transition: width 0.3s ease;
  }
  .menu-item:hover::after {
    width: 100%;
  }
}
:deep(.menu-drawer) {
  // background: linear-gradient(180deg, #06280c 0%, rgba(6, 40, 12, 0) 100%) !important;
  // border-bottom: 1px solid #2d804a;
  background: #0a1a0e;
}
:deep(.menu-drawer .el-drawer__body) {
  padding: 0 !important;
}
.drawer-top {
  @apply border-b border-[#2D804A] bg-[#12331D];
}
</style>
