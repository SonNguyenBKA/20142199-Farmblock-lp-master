# FarmBlock landing brief updates

## Scope

Apply the first five Google Slides brief items to the existing Nuxt landing project in both Vietnamese and English. Preserve the current layout, animation, responsive behavior, and route structure.

## Content changes

1. Home / global vision: replace the Israel-and-Europe wording with international agricultural partners and experts.
2. About Us / red-basalt paragraph: remove the specific “30ha” claim and use the broader “fertile lands” wording.
3. About Us / technology paragraph: replace “Israeli technology” with international technology wording.
4. Operating Model: replace the section-four background image with the supplied `Real FB Farm.png` asset from Drive file `1eHt-XYRhCiEPjr-DJAaSc0X6nWuU4l9D`.
5. News naming: replace “Sổ Tay Nhà Nông” throughout the Vietnamese content surfaces with “Bảng tin FarmBlock”; use “Bảng tin” in the Vietnamese header. In English, use “FarmBlock News” for the content/footer/blog surfaces and “News” in the header.

## Implementation boundaries

- Keep existing i18n keys and component boundaries to avoid unrelated refactoring.
- Store the supplied image locally under `assets/images/pages/model/` instead of hotlinking Google Drive.
- Update only `locales/vi.json`, `locales/en.json`, the model section-four image reference, the new image asset, and focused acceptance tests.

## Acceptance criteria

- The focused requirements test passes for all Vietnamese and English copy mappings and the local model asset reference.
- The Nuxt project builds without errors.
- Routes `/`, `/about-us`, `/model`, and `/blog` render successfully in both locales.
- The model section displays the supplied farm image, and no browser console errors appear on the verified routes.
