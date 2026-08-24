import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8')

test('publishes a separate Academy list page with search and tag filters', async () => {
  const page = await read('pages/academy/index.vue')

  assert.match(page, /useAcademyApi/)
  assert.match(page, /fetchAcademies/)
  assert.match(page, /fetchAcademyTags/)
  assert.match(page, /searchInput/)
  assert.match(page, /selectedTags/)
  assert.match(page, /\/academy\//)
})

test('publishes a separate Academy detail page and API proxy', async () => {
  const [page, api, detailApi] = await Promise.all([
    read('pages/academy/[slug].vue'),
    read('server/api/academies/index.get.ts'),
    read('server/api/academies/[slug].get.ts'),
  ])

  assert.match(page, /fetchAcademyBySlug/)
  assert.match(api, /\/academies/)
  assert.match(detailApi, /\/academies\//)
})

test('keeps Blog and adds Academy to the public navigation', async () => {
  const [header, footer, vi, en] = await Promise.all([
    read('components/layout/header.vue'),
    read('components/layout/footer.vue'),
    read('locales/vi.json').then(JSON.parse),
    read('locales/en.json').then(JSON.parse),
  ])

  assert.match(header, /link: '\/blog'/)
  assert.match(header, /link: '\/academy'/)
  assert.equal(vi.menu.academy, 'Học viện')
  assert.equal(en.menu.academy, 'Academy')
  assert.equal(vi.academy.hero.label, 'Học viện FarmBlock')
  assert.equal(vi.academy.hero.title, 'Một nơi để hiểu thêm về nông nghiệp')
})
