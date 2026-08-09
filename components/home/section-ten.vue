<template>
  <div class="section-ten flex min-h-screen w-screen flex-col overflow-hidden md:min-h-[69.375rem]">
    <div class="max-w-content flex h-full w-full flex-1 flex-col items-stretch py-6 md:flex-row md:py-[7.5rem]">
      <div class="w-full md:w-1/2">
        <img :src="imageBackground" alt="" class="h-full w-full object-cover md:scale-x-[-1]" />
      </div>
      <div class="section-content flex flex-1 flex-col gap-6 p-4 md:gap-[2.625rem] md:p-[2.625rem]">
        <div class="flex items-center justify-start gap-2">
          <img :src="iconLogo" alt="" class="size-[2rem] object-cover md:size-[4rem]" />
          <p class="text-body-24-semi uppercase text-[#F0F9E5] md:text-heading-32-semi">FARMBLOCK</p>
        </div>
        <div class="flex flex-col">
          <h3 class="pb-4 text-heading-32-bold text-brand-primary md:pb-6 md:text-heading-48-bold">
            {{ $t('home.sectionTen.title') }}
          </h3>
          <p class="pb-2 text-label-14-reg text-inverse-primary md:pb-4 md:text-body-18-reg">
            {{ $t('home.sectionTen.paragraph_1') }}
          </p>
          <p class="text-label-14-reg text-inverse-primary md:text-body-18-reg">
            {{ $t('home.sectionTen.paragraph_2') }}
          </p>
        </div>
        <div class="flex w-full flex-col gap-6">
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
          <common-button :text="$t('btn.submit')" :extra-class="['']" @click="submitForm()">
            <template #append>
              <span class="size-[1.5rem]">
                <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
              </span>
            </template>
          </common-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormRules, FormInstance } from 'element-plus'
import iconLogo from '@/assets/icons/common/logo-square.svg'
import imageBackground from '@/assets/images/image-section-ten.webp'

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
  messageInfo(trans('common.coming_soon'))
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
.section-ten {
  background:
    linear-gradient(
      180deg,
      #f0f9e5 0%,
      rgba(240, 249, 229, 0.6) 33.65%,
      rgba(240, 249, 229, 0) 66.35%,
      rgba(240, 249, 229, 0) 100%
    ),
    linear-gradient(180deg, rgba(0, 130, 66, 0) 41.83%, rgba(19, 51, 28, 0.6) 100%),
    url('@/assets/images/bg-section-ten.webp') lightgray 50% / cover no-repeat;
}
.section-content {
  background: linear-gradient(90deg, #13331c 0%, #2d6639 100%);
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
