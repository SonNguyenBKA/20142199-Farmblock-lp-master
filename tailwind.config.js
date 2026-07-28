/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {},
      backgroundColor: {
        default: {
          primary: 'var(--bg-default-primary)',
        },
        brand: {
          primary: 'var(--bg-brand-primary)',
          secondary: 'var(--bg-brand-secondary)',
        },
      },
      colors: {
        default: {
          primary: 'var(--text-default-primary)',
          secondary: 'var(--text-default-secondary)',
        },
        inverse: {
          primary: 'var(--text-inverse-primary)',
        },
        neutral: {
          primary: 'var(--text-neutral-primary)',
          secondary: 'var(--text-neutral-secondary)',
        },
        brand: {
          primary: 'var(--text-brand-primary)',
          secondary: 'var(--text-brand-secondary)',
        },
      },
      fontSize: {
        'label-14-reg': [
          '0.875rem',
          {
            fontWeight: 400,
            lineHeight: '140%',
          },
        ],
        'label-14-bold': [
          '0.875rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'body-16-reg': [
          '1rem',
          {
            fontWeight: 400,
            lineHeight: '140%',
          },
        ],
        'body-16-med': [
          '1rem',
          {
            fontWeight: 500,
            lineHeight: '140%',
          },
        ],
        'body-16-semi': [
          '1rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'body-16-bold': [
          '1rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'body-18-reg': [
          '1.125rem',
          {
            fontWeight: 400,
            lineHeight: '140%',
          },
        ],
        'body-18-med': [
          '1.125rem',
          {
            fontWeight: 500,
            lineHeight: '140%',
          },
        ],
        'body-18-semi': [
          '1.125rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'body-18-bold': [
          '1.125rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'body-20-reg': [
          '1.25rem',
          {
            fontWeight: 400,
            lineHeight: '140%',
          },
        ],
        'body-20-med': [
          '1.25rem',
          {
            fontWeight: 500,
            lineHeight: '140%',
          },
        ],
        'body-20-semi': [
          '1.25rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'body-20-bold': [
          '1.25rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'body-24-reg': [
          '1.5rem',
          {
            fontWeight: 400,
            lineHeight: '140%',
          },
        ],
        'body-24-med': [
          '1.5rem',
          {
            fontWeight: 500,
            lineHeight: '140%',
          },
        ],
        'body-24-semi': [
          '1.5rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'body-24-bold': [
          '1.5rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'body-28-bold': [
          '1.75rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-32-semi': [
          '2rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'heading-32-bold': [
          '2rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-36-bold': [
          '2.25rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-40-semi': [
          '2.5rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'heading-42-semi': [
          '2.625rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'heading-42-bold': [
          '2.625rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-48-bold': [
          '3rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-52-semi': [
          '3.25rem',
          {
            fontWeight: 600,
            lineHeight: '140%',
          },
        ],
        'heading-56-bold': [
          '3.5rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-64-bold': [
          '4rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-72-bold': [
          '4.5rem',
          {
            fontWeight: 700,
            lineHeight: '140%',
          },
        ],
        'heading-84-med': [
          '5.25rem',
          {
            fontWeight: 500,
            lineHeight: '140%',
          },
        ],
        'heading-96-ex-bold': [
          '6rem',
          {
            fontWeight: 800,
            lineHeight: '140%',
          },
        ],
      },
    },
    screens: {
      xs: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1440p': '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      mobile: { max: '639px' },
      'mobile-sm': { max: '375px' },
      ipad: '1025px',
    },
  },
  plugins: [],
}
