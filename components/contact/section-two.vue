<template>
  <div
    class="flex h-fit min-h-screen w-screen flex-col overflow-hidden md:min-h-[40.1875rem]"
    :style="{
      backgroundImage: `linear-gradient(180deg, #0e3b16 0%, rgba(45, 102, 57, 0) 100%),
                 url(${imageBackground}),
                 linear-gradient(180deg, #0e3b16 0%, #2d6639 100%)`,
      backgroundBlendMode: 'normal, overlay, normal',
      backgroundSize: 'cover',
      backgroundPosition: 'center, auto',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div
      class="max-w-content flex h-full w-full flex-1 flex-col justify-between gap-6 py-6 md:gap-[11.25rem] md:py-[7.5rem]"
    >
      <div
        :class="isMobile ? 'bg-[linear-gradient(90deg,_#13331C_0%,_#2D6639_100%)]' : 'bg-transparent'"
        class="flex w-full flex-col gap-6 p-4 md:flex-row md:items-stretch md:gap-[2.625rem] md:p-0"
      >
        <div data-aos="fade-right" class="flex w-full flex-col gap-4 md:w-1/2 md:gap-6">
          <h3 class="text-heading-32-bold text-brand-primary md:text-heading-56-bold">
            {{ $t('contact.sectionTwo.title') }}
          </h3>
          <div class="flex flex-col gap-2 md:gap-4">
            <p class="text-label-14-reg text-inverse-primary md:text-body-18-reg">{{ $t('contact.sectionTwo.paragraph_1') }}</p>
            <p class="text-label-14-reg text-inverse-primary md:text-body-18-reg">{{ $t('contact.sectionTwo.paragraph_2') }}</p>
            <p class="text-label-14-reg text-inverse-primary md:text-body-18-reg">{{ $t('contact.sectionTwo.paragraph_3') }}</p>
            <p class="text-label-14-reg text-inverse-primary md:text-body-18-reg">{{ $t('contact.sectionTwo.paragraph_4') }}</p>
          </div>
        </div>
        <div data-aos="fade-left" class="flex w-full flex-1 flex-col justify-between gap-6 md:w-1/2">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            :inline-message="false"
            class="form-cs flex flex-col gap-2"
          >
            <div class="grid grid-cols-1 items-stretch gap-2 md:grid-cols-2">
              <el-form-item prop="gender">
                <el-select v-model="form.gender" :placeholder="$t('forms.gender')">
                  <el-option :label="$t('forms.male')" value="male" />
                  <el-option :label="$t('forms.female')" value="female" />
                  <el-option :label="$t('forms.other')" value="other" />
                </el-select>
              </el-form-item>
              <el-form-item prop="username">
                <el-input v-model="form.username" :placeholder="$t('forms.name')" />
              </el-form-item>
              <el-form-item prop="phone_number">
                <el-input v-model="form.phone_number" :placeholder="$t('forms.phone')" />
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" :placeholder="$t('forms.email')" />
              </el-form-item>
            </div>
            <el-form-item prop="message">
              <el-input v-model="form.message" :placeholder="$t('forms.message')" type="textarea" :rows="5" />
            </el-form-item>
          </el-form>
          <common-button :text="$t('btn.contact')" :extra-class="['']" @click="submitForm()">
            <template #append>
              <span class="size-[1.5rem]">
                <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
              </span>
            </template>
          </common-button>
        </div>
      </div>
      <!-- <div class="flex w-full flex-1 flex-col gap-6 md:flex-row md:items-stretch md:gap-[2.625rem]">
        <div class="flex w-full flex-1 items-center md:order-1 md:w-1/2">
          <div class="flex flex-col gap-4 md:gap-[2.625rem]">
            <h3 class="text-heading-32-bold text-brand-primary md:text-heading-56-bold">Thông tin liên hệ</h3>
            <div class="flex flex-col gap-2 md:gap-6">
              <p
                v-for="(item, index) in contact"
                :key="index"
                class="w-fit text-label-14-reg text-brand-secondary md:text-body-18-reg"
              >
                {{ `${item.key} ${item.value}` }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full bg-brand-secondary md:w-1/2">1</div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormRules, FormInstance } from 'element-plus'
import imageBackground from '@/assets/images/bg-contact.webp'

const isMobile = useMobile()
const { t } = useI18n()

const formRef = ref<FormInstance>()
const form = reactive({
  gender: '',
  username: '',
  phone_number: '',
  email: '',
  message: '',
})
const rules = reactive<FormRules>({
  gender: [{ required: true, message: '', trigger: ['change', 'blur'] }],
  username: [{ required: true, message: '', trigger: ['blur', 'change'] }],
  phone_number: [
    { required: true, message: '', trigger: ['blur', 'change'] },
    { pattern: /^\+?\d{7,15}$/, message: '', trigger: ['blur', 'change'] },
  ],
  email: [
    { required: true, message: '', trigger: ['blur', 'change'] },
    { type: 'email', message: '', trigger: ['blur', 'change'] },
  ],
  message: [{ required: false, message: '', trigger: ['blur', 'change'] }],
})
const submitForm = () => {
  formRef.value?.resetFields()
  messageInfo(t('common.coming_soon'))
  // formRef.value?.validate((valid: any) => {
  //   if (valid) {
  //     console.log(form)
  //   } else {
  //     console.warn('Form không hợp lệ')
  //   }
  // })
}
</script>

<style lang="scss" scoped>
.wrap {
  background:
    linear-gradient(180deg, #0e3b16 0%, rgba(45, 102, 57, 0) 100%),
    url(<path-to-image>) lightgray 50% / cover no-repeat,
    linear-gradient(180deg, #0e3b16 0%, #2d6639 100%);
  background-blend-mode: normal, overlay, normal;
}
/* Xóa margin mặc định */
.el-form-item {
  margin: 0 !important;
}
/* Cho el-select full height */
.el-select,
.el-select__wrapper {
  height: 100%;
}
/* Custom wrapper chung: input, textarea, select */
.form-cs ::v-deep(.el-input__wrapper),
.form-cs ::v-deep(.el-textarea__inner),
.form-cs ::v-deep(.el-select__wrapper) {
  @apply h-full bg-brand-secondary p-2 md:p-4;
  border-radius: 0 !important;
}
.form-cs ::v-deep(.el-select__selection) {
  @apply min-h-[1.875rem];
}
/* Bỏ box-shadow khi focus/hover */
.form-cs ::v-deep(.el-input__wrapper.is-focus),
.form-cs ::v-deep(.el-textarea__inner.is-focus),
.form-cs ::v-deep(.el-select__wrapper.is-hovering) {
  box-shadow: none !important;
}
</style>
