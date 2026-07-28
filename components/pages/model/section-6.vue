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
          <p class="text-[2rem] font-bold leading-[140%] text-[#B4E27E] sm:text-[3.5rem]">Thấy tận mắt tin tận tâm</p>
          <div class="flex flex-col gap-4">
            <p class="text-[0.875rem] font-normal leading-[140%] text-[#FFF] sm:text-[1.125rem]">
              Farmblock cho phép bạn theo dõi trực tiếp các hoạt động canh tác thực tế – từ tiến độ gieo trồng, tưới
              tiêu, đến dữ liệu môi trường và hình ảnh thực tế tại các vùng trồng. Tất cả được cập nhật liên tục từ hệ
              thống cảm biến và camera tại nông trại.
            </p>
            <p class="text-[1.125rem] font-normal leading-[140%] text-[#FFF]">
              Không cần quảng cáo, giờ đây, hãy tự mình nhìn quy trình sản xuất đang diễn ra mỗi ngày!
            </p>
          </div>
          <common-button class="w-fit sm:w-full" :text="'Truy cập ứng dụng'" @click="messageInfo('Coming soon')">
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
