import gsap from 'gsap'

interface AnimationStep {
  target: gsap.TweenTarget | ((index: number) => gsap.TweenTarget)
  props: gsap.TweenVars | ((index: number) => gsap.TweenVars)
  position?: gsap.Position
}

export function useGsap() {
  const sectionLabel = (val: number) => {
    return 'section_' + val
  }

  const createTimelineAnimation = (steps: AnimationStep[]) => {
    const tl: gsap.core.Timeline = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut', duration: 0.3 } })

    for (const [index, step] of steps.entries()) {
      tl.addLabel(sectionLabel(index), tl.duration())
      const { target, props, position } = step
      tl.to(target, props, index === 0 ? sectionLabel(index) : position)
    }
    tl.addLabel(sectionLabel(steps.length), tl.duration())
    return tl
  }

  const effectParallax = (el: HTMLElement) => {
    el.addEventListener('mousemove', (e) => {
      const bounds = el.getBoundingClientRect()
      const x = e.clientX - bounds.left
      const y = e.clientY - bounds.top
      const centerX = bounds.width / 2
      const centerY = bounds.height / 2

      const rotateX = -(y - centerY) / 50
      const rotateY = (x - centerX) / 50

      gsap.to(el, {
        duration: 0.4,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformOrigin: 'center',
        ease: 'power2.out',
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        duration: 0.6,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out',
      })
    })
  }

  return {
    createTimelineAnimation,
    effectParallax,
  }
}
