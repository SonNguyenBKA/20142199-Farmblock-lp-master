# FarmBlock Academy

## Status

Design approved by Sếp in the current planning conversation on 2026-08-24. This document is the cross-repository design for `farmblock-lp-master` and `Farmblock-Admin`. It is not an implementation plan.

## Goal

Create a separate FarmBlock Academy content experience while preserving a separate, currently empty FarmBlock Blog experience.

Academy has the same editorial capabilities as the current Blog, plus title/excerpt search and fixed-tag filtering. Academy must be a separate Admin page and a separate backend resource; it must not share Blog's content table, model, controller, API resource, or Admin workflow.

## Decisions

- Keep both navigation items: `Bảng tin` links to `/blog`; `Học viện` links to `/academy`.
- Move every existing Blog record into Academy. The Blog list becomes empty and is reserved for future Blog posts.
- Do not redirect old `/blog/{slug}` URLs to Academy. Retire the old detail route; an old detail URL may return 404.
- Academy is a fully separate backend resource with its own database tables, model, controllers, requests, services, API endpoints, Admin views, and tests.
- Tags are fixed from the PM's [Academy Tags List](https://docs.google.com/spreadsheets/d/1CUnn0yZE7UTt987cJcxFHBHMduiWJa6eNflVkbPeX-I/edit?usp=sharing). No tag CRUD page is in scope.
- Each Academy article can have zero, one, or two tags. Existing migrated articles start with zero tags and are tagged gradually by Admin.
- Academy search matches `title` and `excerpt`, not HTML content.
- Selecting multiple tags uses OR semantics: an article matches when it has at least one selected tag.
- The PM copy typo `Học việt FarmBlock` is normalized to `Học viện FarmBlock`.
- Existing Blog-management authorization is reused for Academy Admin access for now; no new role matrix is introduced.

## Fixed Academy tags

The seeded, immutable tag set is:

1. Cơ bản
2. Nâng cao
3. Hóa học đất
4. Sinh học đất
5. Dinh dưỡng cây trồng
6. Nước
7. Hệ thống tưới
8. Sinh lý thực vật
9. Giống và nhân giống
10. Canh tác cà phê
11. Nền tảng bảo vệ thực vật
12. Quan sát và chẩn đoán
13. Nông nghiệp số
14. IoT và cảm biến
15. Camera và thị giác máy tính
16. Dữ liệu vận hành
17. Truy xuất nguồn gốc
18. Tiêu chuẩn và chứng nhận
19. Những khái niệm cơ bản
20. Hệ sinh thái nông nghiệp
21. Cấu tạo và tính chất đất

## User-facing experience

### Navigation

The desktop and mobile navigation expose both items:

- `Bảng tin` → `/blog`
- `Học viện` → `/academy`

The existing Blog navigation and copy remain independent from Academy.

### Academy listing

Route: `/academy`

Hero copy:

- Label/title: `Học viện FarmBlock`
- Subtitle: `Một nơi để hiểu thêm về nông nghiệp`
- Description: `Những kiến thức giúp bạn hiểu rõ hơn về đất, cây trồng và cách một vùng canh tác được vận hành.`

The listing reuses the Blog card visual language but is a separate page/component. It provides:

- Search input for title and excerpt.
- Fixed tag filter controls.
- OR filtering when more than one tag is selected.
- Pagination.
- Loading, error, empty Blog/Academy, and no-result states.

An Academy article with no tags appears in the default unfiltered list and is excluded only when a selected tag filter cannot match it.

### Academy detail

Route: `/academy/{slug}`

The detail page provides the current Blog detail capabilities: featured image, title, excerpt, author/date, sanitized rich-text content, metadata, and responsive rendering. It is a separate route and component so future Academy presentation changes do not change Blog.

### Blog

Route: `/blog`

Blog remains a separate page and resource. After migration it renders its existing empty state because no Blog records remain. Blog is available for future Blog posts created from the separate Blog Admin page.

## Backend design

### Academy tables

Create a new `academies` table with the editorial fields currently used by Blog:

- `id`, `user_id`, `title`, `slug`, `excerpt`, `content`
- `featured_image`, `locale`, `status`, `published_at`
- `meta_title`, `meta_description`, timestamps

Create `academy_tags` with a unique `name`, unique slug, and deterministic display order. Seed the 21 fixed tags above.

Create `academy_tag_assignments` with `academy_id` and `academy_tag_id`, a unique pair constraint, and indexes for both directions.

The Academy model owns its author relation, published scope, slug generation, featured-image URL, tag relation, and content-image lifecycle. It does not reuse the Blog model or Blog table.

### Admin routes and screens

Add a separate Admin navigation item and resource:

- `GET /admin/academies`
- `GET /admin/academies/create`
- `POST /admin/academies`
- `GET /admin/academies/{academy}/edit`
- `PUT/PATCH /admin/academies/{academy}`
- `DELETE /admin/academies/{academy}`
- Separate Academy content-image upload endpoint.

The list screen has search by title/slug, status and locale filters, tag visibility, publication state, and separate edit/delete actions. The form mirrors Blog's editorial fields and adds a fixed multi-select tag control with server-side maximum-two validation. Blog screens and routes remain unchanged except that their data becomes empty after migration.

### Public API

Add separate endpoints:

- `GET /api/v1/academies?locale=vi&page=1&per_page=12&q=...&tags[]=...`
- `GET /api/v1/academies/{slug}?locale=vi`

The list endpoint returns only published Academy records, applies locale and pagination, searches title/excerpt, and applies selected tags with OR semantics. The detail endpoint returns the sanitized HTML content and Academy metadata. Blog endpoints remain separate and query only the Blog table.

## Migration and media handling

Before the data migration, capture a database backup and record the source Blog count and slug set.

The migration process must:

1. Create Academy tables and seed the fixed tags idempotently.
2. Copy every Blog record to Academy, preserving title, slug, excerpt, rich-text content, locale, publication state/date, author, and SEO fields.
3. Copy featured images and managed content images into Academy-owned storage paths and rewrite the copied HTML image URLs.
4. Leave all migrated Academy records without tags.
5. Verify source/destination counts, unique slugs, key content fields, and every referenced image before destructive cleanup.
6. Delete the old Blog rows only after verification succeeds, so the Blog resource is empty as requested. Any mismatch must fail before cleanup.

The old `/blog/{slug}` route is not redirected. `/blog` remains a valid empty listing route.

## Error handling and security

- All public Academy queries enforce published status and locale behavior matching the existing public Blog contract.
- Admin mutations use the existing Blog-management authorization boundary.
- Server-side validation, not only the UI, enforces fixed tag membership and the maximum of two tags.
- Academy content is sanitized using an Academy-owned path/service so Blog sanitation behavior cannot drift unexpectedly.
- Failed image/database operations must clean up newly created Academy files and leave the source Blog data intact until migration verification completes.
- Empty and no-result states distinguish an empty Blog/Academy resource from a failed API request.

## Verification plan

### Admin and backend

- Academy authorization and route access.
- Academy create, edit, publish, draft, delete, and slug uniqueness.
- Fixed tag validation and maximum-two-tag validation.
- Academy search, locale/status filters, and tag OR filtering.
- Published-only public API behavior, pagination, detail response, and HTML content.
- Academy featured/content image lifecycle and cleanup.
- Migration count, slug, content, metadata, image rewrite, zero initial tags, and Blog-empty outcome.

### Landing

- Header/footer desktop and mobile navigation show both Blog and Academy.
- Academy hero copy and routes render correctly.
- Academy search matches title/excerpt and ignores content-only matches.
- One and multiple tag filters use OR semantics.
- Academy cards, pagination, detail, loading, error, empty, and no-result states.
- `/blog` renders its empty state after migration.
- No redirect is emitted for `/blog/{slug}`.
- Build, focused tests, browser UI verification, and console error checks pass.

## Acceptance criteria

1. Admin shows independent Blog and Academy pages at the same navigation level.
2. Academy CRUD and rich-text editing work without changing Blog CRUD behavior.
3. Academy uses its own tables/models/controllers/API and fixed 21-tag seed.
4. Each Academy article accepts at most two fixed tags; migrated articles initially have none.
5. Academy search uses title + excerpt; multi-tag filtering uses OR.
6. All existing Blog data is present in Academy with content/media/SEO preserved, and Blog is empty afterward.
7. `/academy` and `/academy/{slug}` render the Academy experience; `/blog` remains a valid empty page.
8. The old `/blog/{slug}` route is not redirected.
9. The agreed Admin, API, migration, landing, build, and browser verification gates pass.

## Out of scope

- Tag creation/edit/delete UI.
- Full-content search.
- Redirecting or preserving old Blog detail URLs.
- A shared Blog/Academy content table or shared Admin editor.
- Redesigning the existing Blog experience beyond its empty state and independent future workflow.
