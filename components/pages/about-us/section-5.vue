<template>
  <section class="about-us-section-5">
    <div class="about-us-section-5--content max-w-content">
      <p
        class="mb-[1.5rem] text-[1.75rem] font-bold leading-[140%] text-[#06280C] sm:mb-[4rem] sm:text-[4rem] mobile:text-center"
      >
        Hành trình vươn xa
      </p>
      <div
        :class="!isMobile ? 'row-item' : 'col-item'"
        v-for="(item, index) in dataRows"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
      >
        <template v-if="!isMobile">
          <img class="size-[5rem]" :src="item.icon" alt="" />
          <div class="grid w-full grid-cols-3 items-center gap-6">
            <p
              class="text-[2.625rem] font-bold leading-[140%]"
              :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
            >
              {{ item.title }}
            </p>
            <p
              class="text-[1.5rem] font-bold leading-[140%]"
              :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
            >
              {{ item.sub }}
            </p>
            <p class="text-[1.125rem] font-normal leading-[140%] text-[#06280C]">{{ item.content }}</p>
          </div>
        </template>
        <template v-else>
          <div class="col-item-child">
            <div class="flex items-center gap-4">
              <img class="size-[4rem]" :src="item.icon" alt="" />
              <div class="flex flex-1 flex-col">
                <p
                  class="text-[1.5rem] font-bold leading-[140%]"
                  :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
                >
                  {{ item.title }}
                </p>
                <p
                  class="text-[1rem] font-bold leading-[140%]"
                  :class="index === 0 ? 'text-[#3A8047]' : 'text-[#06280C]'"
                >
                  {{ item.sub }}
                </p>
              </div>
            </div>
            <p class="text-[0.875rem] font-normal leading-[140%] text-[#06280C]">{{ item.content }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icon1 from '@/assets/icons/pages/about-me/icon-section-5-1.svg'
import icon2 from '@/assets/icons/pages/about-me/icon-section-5-2.svg'
import icon3 from '@/assets/icons/pages/about-me/icon-section-5-3.svg'

const isMobile = useMobile()
const dataRows = ref([
  {
    icon: icon1,
    title: 'Mốc 1: 2025',
    sub: '30ha khởi đầu',
    content:
      'Trên 30ha đất đỏ Gia Lai, chúng tôi gieo những hạt giống đầu tiên, kết hợp truyền thống Tây Nguyên với công nghệ tự động hóa hiện đại.',
  },
  {
    icon: icon2,
    title: 'Mốc 2: 2028',
    sub: '200ha thông minh',
    content:
      'Mở rộng lên 200ha, chúng tôi xây dựng những trang trại thông minh, nơi drone, hệ thống cảm biến, và công nghệ blockchain minh bạch hóa nông nghiệp.',
  },
  {
    icon: icon3,
    title: 'Mốc 3: Tương lai',
    sub: 'Nông sản toàn cầu',
    content:
      'Mang cà phê và sầu riêng chất lượng cao của Việt Nam đến bữa ăn mọi gia đình trên thế giới, chúng tôi viết tiếp câu chuyện về miền đất đỏ và những con người nơi đây.',
  },
])
</script>

<style lang="scss">
.about-us-section-5 {
  background: #f7fcf2;
  height: fit-content;
  //@apply sm:min-h-[calc(100vw*9/16)];
  @apply sm:py-[5rem];
  &--content {
    @apply flex w-full flex-col mobile:py-6;
    .row-item {
      @apply flex w-full items-center gap-6 p-6;
      border-top: 1px solid #3a8047;
    }

    .col-item {
      .col-item-child {
        @apply flex flex-col gap-4;
        border-top: 1px solid #3a8047;
        padding: 1rem 0.5rem;
      }
    }
  }
}
</style>
