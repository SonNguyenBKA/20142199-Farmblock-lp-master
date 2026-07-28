<template>
  <button type="button" :disabled="props.disabled" class="btn-common" :class="[props.extraClass, `btn-${props.size}`]">
    <slot v-if="slots['prefix']" name="prefix" />
    <p v-if="props.text" class="btn-common--text">{{ props.text }}</p>
    <slot v-if="slots['append']" name="append" />
  </button>
</template>

<script setup lang="ts">
type TSizeBtn = 'sm' | 'md' | 'lg'
interface Props {
  disabled?: boolean
  text?: string
  size?: TSizeBtn
  extraClass?: string | string[]
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  text: '',
  size: 'md',
  extraClass: '',
})
const slots: any = useSlots()
</script>

<style lang="scss" scoped>
.btn-common {
  @apply flex items-center justify-center gap-1 rounded;
  background: linear-gradient(90deg, #008242 0%, #7ed839 100%);

  &--text {
    @apply text-inverse-primary;
  }
  &.btn-sm,
  &.btn-md,
  &.btn-lg {
    p {
      @apply text-body-16-semi;
    }
  }
  &.btn-sm {
    @apply px-4 py-2;
    p {
      @apply md:text-body-24-med;
    }
  }
  &.btn-md {
    @apply px-4 py-2 md:p-4;
    p {
      @apply md:text-body-24-semi;
    }
  }
  &.btn-lg {
    @apply px-6 py-2 md:py-4;
    p {
      @apply md:text-heading-32-semi;
    }
  }
}
</style>
