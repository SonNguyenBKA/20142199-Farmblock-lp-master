<template>
  <article class="policy-page">
    <div class="policy-page__paper">
      <header class="policy-page__header">
        <h1 class="policy-page__title">{{ privacyPolicyMeta.title }}</h1>
        <p class="policy-page__meta">
          <span>{{ $t('policy.effective_date') }}: {{ privacyPolicyMeta.effectiveDate }}</span>
        </p>
        <p class="policy-page__meta">
          <span>{{ $t('policy.last_updated') }}: {{ privacyPolicyMeta.lastUpdated }}</span>
        </p>
      </header>

      <section
        v-for="section in privacyPolicySections"
        :key="section.number"
        class="policy-page__section"
      >
        <h2 class="policy-page__section-title">
          <span class="policy-page__section-number">{{ section.number }}.</span>
          {{ section.title }}
        </h2>

        <template v-if="section.subsections?.length">
          <div
            v-for="subsection in section.subsections"
            :key="subsection.number"
            class="policy-page__subsection"
          >
            <h3 class="policy-page__subsection-title">
              <span class="policy-page__subsection-number">{{ subsection.number }}</span>
              <span>{{ subsection.title }}</span>
            </h3>
            <p v-if="subsection.intro" class="policy-page__paragraph">{{ subsection.intro }}</p>
            <ul v-if="subsection.items?.length" class="policy-page__list">
              <li v-for="(item, index) in subsection.items" :key="index">{{ item.text }}</li>
            </ul>
            <p
              v-for="(paragraph, index) in subsection.paragraphs"
              :key="`sub-p-${index}`"
              class="policy-page__paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </template>

        <template v-else>
          <p
            v-for="(paragraph, index) in section.paragraphs"
            :key="`p-${index}`"
            class="policy-page__paragraph"
          >
            {{ paragraph }}
          </p>

          <ul v-if="section.items?.length" class="policy-page__list">
            <li v-for="(item, index) in section.items" :key="index">{{ item.text }}</li>
          </ul>

          <template v-if="section.listGroups?.length">
            <div
              v-for="(group, groupIndex) in section.listGroups"
              :key="`group-${groupIndex}`"
              class="policy-page__list-group"
            >
              <p v-if="group.intro" class="policy-page__paragraph">{{ group.intro }}</p>
              <ul class="policy-page__list">
                <li v-for="(item, index) in group.items" :key="index">{{ item.text }}</li>
              </ul>
            </div>
          </template>

          <p
            v-for="(paragraph, index) in section.closingParagraphs"
            :key="`closing-${index}`"
            class="policy-page__paragraph"
          >
            {{ paragraph }}
          </p>
        </template>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import {
  privacyPolicyMeta as privacyPolicyMetaEn,
  privacyPolicySections as privacyPolicySectionsEn,
  privacyPolicyViMeta,
  privacyPolicyViSections,
} from '@/constants/privacy-policy'

const { locale, t } = useI18n()
const privacyPolicyMeta = computed(() => (locale.value === 'vi' ? privacyPolicyViMeta : privacyPolicyMetaEn))
const privacyPolicySections = computed(() => (locale.value === 'vi' ? privacyPolicyViSections : privacyPolicySectionsEn))

useHead(() => ({
  title: t('policy.title') + ' | FarmBlock',
  meta: [
    {
      name: 'description',
      content: t('policy.description'),
    },
  ],
}))
</script>

<style lang="scss" scoped>
.policy-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 6rem 1rem 4rem;

  @media (min-width: 768px) {
    padding: 8rem 1.5rem 5rem;
  }

  &__paper {
    max-width: 51rem;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 2px;
    box-shadow:
      0 1px 2px rgba(60, 64, 67, 0.15),
      0 1px 3px 1px rgba(60, 64, 67, 0.1);
    padding: 3rem 2.5rem 4rem;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 14px;
    color: #202124;

    @media (min-width: 768px) {
      padding: 4.5rem 4.5rem 5.5rem;
    }

    * {
      font-size: inherit;
    }
  }

  &__header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e8eaed;
  }

  &__title {
    font-size: 26px;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: 0;
    color: #202124;
    margin-bottom: 1rem;
  }

  &__meta {
    font-size: 13px;
    line-height: 1.6;
    color: #5f6368;
    margin: 0.125rem 0;
  }

  &__section {
    margin-bottom: 1.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__section-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    color: #202124;
    margin-bottom: 0.75rem;
  }

  &__section-number {
    margin-right: 0.25rem;
  }

  &__subsection {
    margin: 1rem 0 1.25rem;
    padding-left: 0;
  }

  &__subsection-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    color: #202124;
    margin-bottom: 0.5rem;
  }

  &__subsection-number {
    margin-right: 0.35rem;
  }

  &__paragraph {
    line-height: 1.65;
    color: #202124;
    margin-bottom: 0.65rem;
  }

  &__list {
    margin: 0.35rem 0 0.85rem 1.5rem;
    padding: 0;
    list-style-type: disc;

    li {
      line-height: 1.65;
      color: #202124;
      margin-bottom: 0.2rem;
      padding-left: 0.15rem;
    }
  }

  &__list-group {
    margin-bottom: 0.5rem;
  }
}
</style>
