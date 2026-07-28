<template>
  <div class="section-six flex min-h-screen w-screen flex-col bg-brand-secondary md:min-h-[70.8125rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col gap-4 py-6 md:gap-[4rem] md:py-[7.5rem]">
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <p class="text-center text-body-16-bold text-neutral-primary md:text-heading-32-bold">
          Hệ sinh thái của Farmblock
        </p>
        <h3 class="text-center text-body-28-bold text-default-primary md:text-heading-64-bold">
          Cùng đồng hành kiến tạo, cùng chia sẻ giá trị
        </h3>
      </div>
      <div class="grid h-full w-full flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-[2.625rem]">
        <img :src="imageSection" alt="" class="h-auto w-full object-cover md:h-full" />
        <div v-if="!isMobile" class="grid h-full w-full grid-cols-1 grid-rows-5">
          <div
            v-for="(card, index) in listCard"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 300"
            class="flex items-start justify-between gap-2 border-t border-[#3A8047] p-2 md:items-center md:gap-6 md:p-6"
          >
            <h4 class="w-1/2 text-label-14-bold text-neutral-secondary md:text-body-24-bold">{{ card.title }}</h4>
            <p class="flex-1 text-label-14-reg text-default-primary md:text-body-18-reg">
              {{ card.desc }}
            </p>
          </div>
        </div>
        <div v-else class="cs-collapse">
          <el-collapse v-model="nameActive" accordion>
            <el-collapse-item
              v-for="(item, index) in listCard"
              :key="index"
              :title="item.title"
              :name="index"
              :disabled="index === activeIndex"
            >
              <div>{{ item.desc }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageSection from '@/assets/images/image-section-six.webp'

const isMobile = useMobile()
const nameActive = ref(0)
const listCard = [
  {
    title: 'Nhà đầu tư',
    desc: 'Tiếp cận thị trường nông nghiệp thông qua các danh mục đầu tư đa dạng, với cơ chế pháp lý rõ ràng, dòng tiền ổn định và hệ thống theo dõi minh bạch.',
  },
  {
    title: 'Farmblock & các đơn vị sản xuất nông nghiệp',
    desc: 'Quản lý và vận hành dự án, áp dụng công nghệ blockchain để truy xuất nguồn gốc, sử dụng hệ thống AI để tối ưu năng suất và mở rộng quy mô vùng trồng.',
  },
  {
    title: 'Comblock & Các đối tác tổ chức thương mại',
    desc: 'Tối ưu hoạt động logistics và thúc đẩy thương mại để phân phối nông sản tại hệ thống siêu thị châu Âu và châu Á.',
  },
  {
    title: 'Tổ chức nghiên cứu & giáo dục',
    desc: 'Thử nghiệm sản phẩm, dịch vụ hoặc ý tưởng mới ngay trên vùng trồng thật – từ công nghệ nông nghiệp đến du lịch trải nghiệm, truyền thông, giáo dục.',
  },
  {
    title: 'Các đối tác phát triển nông nghiệp trong nước',
    desc: 'Trao đổi, tiếp nhận chuyển giao công nghệ cao cùng đội ngũ  Israel Agrotech và các chuyên gia đến từ châu Âu.',
  },
]

onMounted(() => {
  const iconWrapper = document.querySelectorAll('.cs-collapse .el-icon.el-collapse-item__arrow')
  Array.from(iconWrapper).forEach((item) => {
    item.innerHTML = ''
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9999 12.9499L7.0502 8.00012L5.63599 9.41432L11.9999 15.7783L18.3639 9.41432L16.9497 8.00012L11.9999 12.9499Z" fill="#3A8047"/>
</svg>`
  })
})
</script>

<style lang="scss">
.cs-collapse {
  .el-collapse {
    @apply border-none;

    .el-collapse-item {
      @apply border-t border-[#3a8047] px-3 py-2;

      &__header {
        @apply h-auto border-none bg-transparent text-left text-label-14-bold text-[#3a8047];
        .el-collapse-item__arrow {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0 !important;
          &.is-active {
            transform: rotate(-180deg);
          }
          svg {
            @apply size-6;
          }
        }
      }
      &__wrap {
        background: transparent;
        border-bottom: none;
      }
      &__content {
        @apply pb-0 text-label-14-reg text-[#06280c];
        line-height: 140%; /* 1.575rem */
      }
    }
  }
}
</style>
