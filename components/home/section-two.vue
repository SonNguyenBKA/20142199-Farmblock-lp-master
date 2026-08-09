<template>
  <div data-aos="fade-in" data-aos-delay="300" class="section-two w-screen">
    <div class="max-w-content flex w-full flex-col items-stretch justify-between py-6 md:flex-row md:py-[4rem]">
      <img
        :src="imageSection"
        alt=""
        class="h-auto w-full rounded-tl rounded-tr object-cover md:max-w-[50%] md:rounded-bl"
      />
      <div
        class="section-content flex w-full flex-1 flex-col justify-between gap-6 rounded-bl rounded-br p-4 md:gap-[3.38rem] md:rounded-tr md:px-[2.625rem] md:py-[4rem]"
      >
        <div class="flex flex-col gap-2 md:gap-6">
          <h3 class="type-target text-body-24-bold text-neutral-secondary md:text-heading-42-bold">
            {{ $t('home.sectionTwo.title_line_1') }} <br class="hidden md:block" />
            {{ $t('home.sectionTwo.title_line_2') }}
          </h3>
          <p id="two_block_1" class="text-label-14-reg text-default-primary md:text-body-18-reg">
            {{ $t('home.sectionTwo.paragraph_1') }}
          </p>
          <p id="two_block_2" class="text-label-14-reg text-default-primary md:text-body-18-reg">
            {{ $t('home.sectionTwo.paragraph_2') }}
          </p>
        </div>
        <common-button
          id="two_btn"
          :text="$t('btn.discover_journey')"
          class="w-fit"
          :size="'sm'"
          :extra-class="[]"
          @click="handleRedirect('/about-us', false, false)"
        >
          <template #append>
            <span class="size-[1.5rem]">
              <img src="@/assets/icons/arrow-right-default.svg" alt="" class="h-auto w-full object-cover" />
            </span>
          </template>
        </common-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imageSection from '@/assets/images/image-section-two.webp'

const { handleRedirect } = useRedirect()
gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  await nextTick()
  const content = document.querySelector('.section-content') as HTMLElement
  const target = document.querySelector('.type-target') as HTMLElement

  const originalHeight = content.offsetHeight
  content.style.minHeight = `${originalHeight}px`
  content.style.height = `${originalHeight}px`

  const fullText = target?.innerHTML || ''
  target.innerHTML = ''
  gsap.set(['#two_block_1', '#two_block_2', '#two_btn'], {
    opacity: 0,
    y: -20,
  })

  ScrollTrigger.create({
    trigger: target,
    start: 'top center',
    once: true,
    onEnter: () => {
      typeText(target, fullText, () => {
        gsap.to(['#two_block_1', '#two_block_2', '#two_btn'], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
        })
      })
    },
  })

  function typeText (el: HTMLElement, html: string, onComplete: () => void, speed = 30) {
    const tokens = html.match(/(<[^>]+>|[^<]+)/g) || []
    let output = ''
    let i = 0
    const typeToken = () => {
      if (i >= tokens.length) {
        el.innerHTML = output
        onComplete()
        return
      }
      const token = tokens[i]
      if (token.startsWith('<')) {
        output += token
        el.innerHTML = output + '<span class="cursor">|</span>'
        i++
        setTimeout(typeToken, 0)
      } else {
        let j = 0
        const typeChar = () => {
          if (j <= token.length) {
            el.innerHTML = output + token.slice(0, j) + '<span class="cursor">|</span>'
            j++
            setTimeout(typeChar, speed)
          } else {
            output += token
            i++
            setTimeout(typeToken, speed)
          }
        }
        typeChar()
      }
    }
    typeToken()
  }
})
</script>

<style lang="scss" scoped>
.section-two {
  background: linear-gradient(180deg, #204d2b 0%, #f0f9e5 100%);
}
.section-content {
  background: linear-gradient(180deg, #f0f9e5 0%, #fff 100%);
}

.cursor {
  position: absolute;
  display: inline-block;
  color: #008242;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  50% {
    opacity: 0;
  }
}
</style>
