import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const loadLocale = async (name) => JSON.parse(await readFile(path.join(root, 'locales', name), 'utf8'))

test('uses international partners wording on the home page in both locales', async () => {
  const [vi, en] = await Promise.all([loadLocale('vi.json'), loadLocale('en.json')])

  assert.equal(
    vi.home.sectionThree.cards.global.desc,
    'Cùng các đối tác và các chuyên gia nông nghiệp quốc tế, chúng tôi đưa nông sản Việt Nam đến bữa ăn của các gia đình toàn cầu, nâng tầm giá trị nông nghiệp.',
  )
  assert.equal(
    en.home.sectionThree.cards.global.desc,
    'Together with international agricultural partners and experts, we bring Vietnamese produce to families around the world, elevating the value of agriculture.',
  )
})

test('uses the revised About Us wording in both locales', async () => {
  const [vi, en] = await Promise.all([loadLocale('vi.json'), loadLocale('en.json')])

  assert.equal(
    vi.about.sectionTwo.paragraph_1,
    'Tây Nguyên là vùng đất đỏ bazan nơi những hạt cà phê đậm đà và những trái sầu riêng ngọt ngào lớn lên với khí hậu nhiệt đới gió mùa cao nguyên. Những mảnh đất trù phú ở đây là nơi chúng tôi bắt đầu, không chỉ để trồng cây, mà để gieo trồng những hạt giống của một nền nông nghiệp bền vững.',
  )
  assert.equal(
    vi.about.sectionTwo.paragraph_3,
    'Với tâm huyết của nông dân Tây Nguyên và công nghệ tiên phong từ quốc tế, chúng tôi chăm sóc từng luống đất, minh bạch từng vụ mùa, từ đó dẫn đường để mang nông sản Việt đến bàn ăn của các gia đình trên thế giới.',
  )
  assert.equal(
    en.about.sectionTwo.paragraph_1,
    'The Central Highlands is a red-basalt region where bold coffee beans and sweet durian grow in a tropical highland climate. These fertile lands are where we began—not simply to grow crops, but to plant the seeds of sustainable agriculture.',
  )
  assert.equal(
    en.about.sectionTwo.paragraph_3,
    'With the dedication of Central Highlands farmers and pioneering international technology, we care for every stretch of soil and make every harvest transparent, opening a path for Vietnamese produce to reach family tables around the world.',
  )
})

test('uses the requested bilingual news naming', async () => {
  const [vi, en] = await Promise.all([loadLocale('vi.json'), loadLocale('en.json')])

  assert.equal(vi.menu.technology, 'Bảng tin')
  assert.equal(vi.footer.blog, 'Bảng tin FarmBlock')
  assert.equal(vi.about.sectionSix.title, 'Bảng tin FarmBlock')
  assert.equal(vi.blog.hero.label, 'Bảng tin FarmBlock')
  assert.equal(vi.blog.back, 'Quay lại Bảng tin FarmBlock')
  assert.equal(vi.blog.detail_fallback_title, 'Bảng tin FarmBlock | FarmBlock')

  assert.equal(en.menu.technology, 'News')
  assert.equal(en.footer.blog, 'FarmBlock News')
  assert.equal(en.about.sectionSix.title, 'FarmBlock News')
  assert.equal(en.blog.hero.label, 'FarmBlock News')
  assert.equal(en.blog.back, '← Back to FarmBlock News')
  assert.equal(en.blog.detail_fallback_title, 'FarmBlock News | FarmBlock')
})

test('uses the supplied farm image as a local model section asset', async () => {
  const component = await readFile(path.join(root, 'components/pages/model/section-4.vue'), 'utf8')
  const imagePath = path.join(root, 'assets/images/pages/model/bg-section-4-farm.png')

  assert.match(component, /bg-section-4-farm\.png/)
  assert.ok((await stat(imagePath)).size > 0)
})
