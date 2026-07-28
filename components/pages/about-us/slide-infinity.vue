<template>
  <section class="slide-option">
    <div id="infinite" class="slide-infinity">
      <div class="slide-infinity-block" :class="{'reverse': reverse}">
        <ul class="slide-lane" ref="slideInfinity">
          <slot />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineComponent({ name: 'SlideInfinity' })
const props = defineProps({
  cols: { type: Number, default: 3 },
  spaceItem: { type: String, default: '4rem' },
  reverse: { type: Boolean, default: false },
  time: { type: Number, default: 1 },
  offset: { type: Boolean, default: false }
})
const slideInfinity = ref<HTMLElement | null>(null)
const widthItem = ref('auto')
const offsetWidth = ref('auto')

const duration = computed(() => {
  return +Array.from(slideInfinity.value?.children).length * +props.time + 's'
})
onMounted(() => {
  nextTick()
  Array.from(slideInfinity.value?.children)?.forEach((item: any, index: number) => {
    item.classList.add('slide-infinity-item')
    item.style.setProperty('--i', index.toString())
  })
  const width = slideInfinity.value?.children[0].clientWidth
  widthItem.value = width ? `${width}px` : 'auto'
  offsetWidth.value = width ? `${width / 2}px` : 'auto'
})
</script>

<style lang="scss">
.slide-option {
  width: calc(v-bind(widthItem) * v-bind(cols) + v-bind(spaceItem) * (v-bind(cols) - 1));
  max-width: 100vw;
  overflow: hidden;
  div.slide-infinity {
    display: flex;
    justify-content: center;
    width: 100%;

    div.slide-infinity-block {
      overflow: hidden;
      position: relative;
    }

    ul.slide-lane {
      display: flex;
      height: 100%;
      gap: v-bind(spaceItem);
      margin-left: calc(v-bind(offsetWidth) + calc(v-bind(spaceItem) / 2));

      li.slide-infinity-item {
        width: fit-content;
        flex-shrink: 0;
      }
    }
  }

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-1 * v-bind(widthItem) * 12));
    }
  }

  #infinite div.slide-infinity-block {
    ul.slide-lane {
      width: calc(v-bind(widthItem) * 24);

      li.slide-infinity-item {
        animation: translateinfinite v-bind(duration) linear infinite;
      }
    }
    &.reverse {
      li.slide-infinity-item {
        animation: translateinfinite v-bind(duration) linear infinite reverse !important;
      }
    }
  }
}
</style>
