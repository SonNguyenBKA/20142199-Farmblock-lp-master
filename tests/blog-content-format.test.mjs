import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const pagePath = path.resolve(import.meta.dirname, '../pages/blog/[slug].vue')
const pageSource = fs.readFileSync(pagePath, 'utf8')
const styleBlock = pageSource.match(/<style lang="scss" scoped>([\s\S]*?)<\/style>/)?.[1] ?? ''

test('blog rich-text headings and bold marks have explicit typography', () => {
  const headingRules = [
    [/:deep\(h1\)[\s\S]*?font-size:\s*1\.875rem[\s\S]*?font-weight:\s*700/, 'h1'],
    [/:deep\(h2\)[\s\S]*?font-size:\s*1\.5rem[\s\S]*?font-weight:\s*700/, 'h2'],
    [/:deep\(h3\)[\s\S]*?font-size:\s*1\.25rem[\s\S]*?font-weight:\s*700/, 'h3'],
  ]

  for (const [rule, tag] of headingRules) {
    assert.match(styleBlock, rule, `${tag} must keep its editor heading hierarchy`)
  }

  assert.match(
    styleBlock,
    /:deep\(strong\),\s*:deep\(b\)\s*\{[\s\S]*?font-weight:\s*700/,
    'bold marks must remain visibly bold on the landing page',
  )
})
