<template>
  <section class="model-section-4">
    <div class="model-section-4--layer1">
      <img src="@/assets/images/pages/model/bg-section-4.webp" alt="">
    </div>
    <div class="model-section-4--layer2"></div>
    <div class="model-section-4--layer3">
      <div class="block-content max-w-content" data-aos="fade-in" data-aos-delay="500">
        <div class="flex flex-col justify-center items-center gap-6 max-w-[67rem]">
          <p class="text-[#06280C] text-[2.25rem] sm:text-[4rem] font-bold leading-[140%]">Mô hình trại mẫu dễ dàng nhân rộng</p>
          <div class="flex flex-col gap-2">
            <p class="text-[#06280C] text-center text-[0.875rem] sm:text-[1.125rem] font-medium leading-[140%]">Các vùng trồng trong hệ thống Farmblock được thiết kế như các mô hình trại mẫu – với quy trình sản xuất bài bản, hạ tầng công nghệ tích hợp và tiêu chuẩn chất lượng rõ ràng. Đây là nền tảng để Farmblock có thể nhân rộng, chuyển giao kỹ thuật và mở rộng hợp tác đầu tư, sản xuất hoặc nghiên cứu theo từng khu vực cụ thể.</p>
            <p class="text-[#06280C] text-center text-[0.875rem] sm:text-[1.125rem] font-medium leading-[140%]">Hãy hết nối cùng chúng tôi để hợp tác quy hoạch, vận hành và mở rộng mô hình trại mẫu tại địa phương của bạn!</p>
          </div>
          <common-button class="w-fit" :text="'Liên hệ hợp tács'" :extra-class="['']" @click="handleRedirect('/contact', false, false)">
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
import { messageInfo } from '~/utils/utils'

const { handleRedirect } = useRedirect()
</script>

<style lang="scss">
.model-section-4 {
  @apply min-h-[calc(100vw*3/2)] sm:min-h-[calc(100vw*9/16)];
  @apply h-[100dvh] sm:h-fit;
  //background-image: url("@/assets/images/pages/model/bg-section-1.webp");
  //background-size: cover;
  //background-repeat: no-repeat;
  position: relative;
  &--layer1 {
    position: absolute;
    inset: 0;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &--layer2 {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(180deg, #F7FCF2 0%, rgba(247, 252, 242, 0.80) 33.65%, rgba(247, 252, 242, 0.00) 66.35%, rgba(247, 252, 242, 0.00) 100%);
  }
  &--layer3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    .block-content {
      @apply flex flex-col items-center gap-2 py-[2.625rem] sm:py-[4rem];
      p {
        @apply text-center;
      }
    }
  }
}
</style>
