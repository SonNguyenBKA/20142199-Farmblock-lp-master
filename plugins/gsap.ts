import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Draggable)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      Draggable,
    },
  }
})
