# Aerie → PlanDev/SeqDev Rebranding Plan

This document outlines the complete task plan for rebranding the documentation from "Aerie" to "PlanDev" (with "SeqDev" for sequencing-specific features).

---

## Phase 1: Prerequisites & Decisions

Before starting the technical work, these decisions need to be finalized:

### 1.1 Branding Decisions

- [x] Confirm final product name: **PlanDev**
- [x] Confirm sequencing product name: **SeqDev**
- [x] Decide tagline/description for homepage
- [x] Obtain new logo assets (SVG format, light/dark variants) (will do this later)
- [x] Obtain new favicon (will do this later)

### 1.2 Infrastructure Decisions

- [x] Repo is https://github.com/NASA-AMMOS/plandev-docs
- [x] New documentation URL will be https://nasa-ammos.github.io/plandev-docs/
- [x] Old documentation site https://github.com/NASA-AMMOS/aerie-docs will need to still be hosted at the existing url in order to redirect old documentation links to the new site. This will need some brainstorming.
- [ ] New support email address (replace `aerie-support@googlegroups.com`) (will do this later)
- [ ] New Google Group or community forum URL (will do this later)
- [x] New Algolia search index name (currently `aerie`)

### 1.3 Content Decisions

- [x] **Upgrade guides:** Preserve "Aerie" references for now (TODO: revisit later)
- [x] **ADR documents:** ✅ Updated all ADRs to PlanDev/SeqDev branding
- [x] **SeqDev scope:** Use "SeqDev" for ALL sequence-related content across all docs
- [x] **Phoenix editor:** Renamed to "SeqDev editor" throughout docs

---

## Phase 2: Configuration Files

**Estimated scope:** 4 files, ~15 changes

### 2.1 docusaurus.config.js

| Line | Current                                               | New                                        |
| ---- | ----------------------------------------------------- | ------------------------------------------ |
| 9    | `baseUrl: '/aerie-docs'`                              | `baseUrl: '/plandev-docs'`                 |
| 21   | `projectName: 'aerie-docs'`                           | `projectName: 'plandev-docs'`              |
| 28   | `editUrl: 'https://github.com/NASA-AMMOS/aerie-docs'` | Update to new repo URL                     |
| 45   | `indexName: 'aerie'`                                  | `indexName: 'plandev'`                     |
| 105  | `alt: 'Aerie Documentation'`                          | `alt: 'PlanDev Documentation'`             |
| 106  | `src: 'img/aerie-wordmark-light.svg'`                 | `src: 'img/plandev-wordmark-light.svg'`    |
| 107  | `srcDark: 'img/aerie-wordmark-dark.svg'`              | `srcDark: 'img/plandev-wordmark-dark.svg'` |
| 118  | `title: 'Aerie Documentation'`                        | `title: 'PlanDev Documentation'`           |

### 2.2 package.json

| Line | Current                | New                      |
| ---- | ---------------------- | ------------------------ |
| 2    | `"name": "aerie-docs"` | `"name": "plandev-docs"` |

### 2.3 README.md

- Line 1: `# Aerie Documentation` → `# PlanDev Documentation`
- Line 3: Update description text

### 2.4 sidebars.js

- Line 71: Update ADR reference if file is renamed

---

## Phase 3: Logo & Branding Assets

**Estimated scope:** 38+ image files

### 3.1 Primary Logos (Requires Design Work)

Create new assets to replace:
| Current File | New File |
|--------------|----------|
| `static/img/aerie-logo-dark.svg` | `static/img/plandev-logo-dark.svg` |
| `static/img/aerie-logo-light.svg` | `static/img/plandev-logo-light.svg` |
| `static/img/aerie-wordmark-dark.svg` | `static/img/plandev-wordmark-dark.svg` |
| `static/img/aerie-wordmark-light.svg` | `static/img/plandev-wordmark-light.svg` |

### 3.2 Favicon

- [x] Create new favicon with PlanDev branding
- [x] Update `static/img/favicon.ico` (if exists)

### 3.3 Homepage UI Screenshot

- [ ] Capture new screenshot from rebranded UI
- [ ] Replace `static/img/aerie-ui-light.png` → `static/img/plandev-ui-light.png`

### 3.4 Feature Card Images (31 files)

These images likely contain "Aerie" in UI screenshots and need recreation:

**Feature Cards (8 files):**

- `aerie-feature-planning-commanding-light.png` / `-dark.png`
- `aerie-feature-mission-modeling-light.png` / `-dark.png`
- `aerie-feature-collaboration-light.png` / `-dark.png`
- `aerie-feature-rule-checking-light.png` / `-dark.png`

**Get Started Cards (10 files):**

- `aerie-getstarted-mission-planners-light.png` / `-dark.png`
- `aerie-getstarted-systems-engineers-light.png` / `-dark.png`
- `aerie-getstarted-spacecraftops-light.png` / `-dark.png`
- `aerie-getstarted-opensource-light.png` / `-dark.png`
- `aerie-getstarted-customize-light.png` / `-dark.png`

**Learn Cards (8 files):**

- `aerie-learn-extensions.png` / `-dark.png`
- `aerie-learn-github.png` / `-dark.png`
- `aerie-learn-googlegroup.png` / `-dark.png`
- `aerie-learn-slack.png` / `-dark.png`

### 3.5 Cleanup

- [ ] Delete old `aerie-*` image files after replacements are in place
- [ ] Update all references in code to new filenames

---

## Phase 4: Architecture Diagrams ✅

**Estimated scope:** 3 PlantUML files, 6 generated images

### 4.1 Update PlantUML Source Files ✅

| File                                                          | Changes                                                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `docs/overview/design/assets/c4-plandev-context.puml`         | ✅ Replaced "Aerie" in title, System definitions, boundaries                        |
| `docs/overview/design/assets/c4-plandev-container.puml`       | ✅ Replaced "Aerie" in System_Boundary, containers (PlanDev UI, PlanDev File Store) |
| `docs/overview/design/assets/c4-merlin-server-component.puml` | ✅ Replaced "Aerie File Store" reference                                            |

### 4.2 Rename PlantUML Files ✅

- ✅ `c4-aerie-context.puml` → `c4-plandev-context.puml`
- ✅ `c4-aerie-container.puml` → `c4-plandev-container.puml`

### 4.3 Regenerate Diagram Images

After editing PlantUML sources:

- [x] Generate `c4-plandev-context.png` and `.jpg`
- [x] Generate `c4-plandev-container.png` and `.jpg`
- [x] Delete old `c4-aerie-*` images

### 4.4 Update Documentation References ✅

- [x] Update all markdown files that reference these diagrams (software-design-document.mdx)

---

## Phase 5: React Components (Homepage)

**Estimated scope:** 5 files, ~100 changes

### 5.1 src/pages/index.js

- [ ] Update navigation paths (`/aerie-docs/` → `/plandev-docs/`)
- [ ] Update support email
- [ ] Update image imports
- [ ] Update alt text

### 5.2 src/components/HomepageCards/index.js

- [ ] Update all image imports (31 image references)
- [ ] Update all navigation links
- [ ] Update all text content mentioning "Aerie"
- [ ] Change "Aerie quick start" → "PlanDev quick start"
- [ ] Update GitHub links
- [ ] Update Google Group links

### 5.3 src/components/HomepageFooter/index.js

- [ ] Update documentation links
- [ ] Update GitHub repository link
- [ ] Update Google Group link
- [ ] Update support email
- [ ] Update logo image path

### 5.4 src/components/HomepageVideo/index.js

- [ ] Update video file import path
- [ ] Update video still image path

### 5.5 src/components/HomepageTestimonials/index.js

- [ ] Update image references
- [ ] Update any "Aerie" text in testimonials

---

## Phase 6: Documentation Content

**Estimated scope:** ~225 files

### 6.1 High-Priority Core Documents

| File                                           | Priority | Notes                                 |
| ---------------------------------------------- | -------- | ------------------------------------- |
| `docs/introduction.md`                         | Critical | Main entry point, multiple references |
| `docs/glossary.md`                             | Critical | Define PlanDev/SeqDev terms           |
| `docs/overview/concept-of-operations.md`       | High     | Core concepts                         |
| `docs/overview/design/arch-design-overview.md` | High     | Architecture overview                 |

### 6.2 Planning Documentation

Directory: `docs/planning/`

- [ ] All files in this directory use "PlanDev" branding
- [ ] Bulk find/replace "Aerie" → "PlanDev"

### 6.3 Sequencing Documentation (SeqDev)

Directory: `docs/sequencing/`

- [ ] Determine which references become "SeqDev" vs "PlanDev"
- [ ] `docs/sequencing/introduction.md`
- [ ] `docs/sequencing/seqn.mdx`
- [ ] `docs/sequencing/editor.mdx`
- [ ] `docs/sequencing/actions.mdx`

### 6.4 Mission Modeling Documentation

Directory: `docs/mission-modeling/`

- [ ] `docs/mission-modeling/introduction.mdx`
- [ ] All tutorial and advanced files

### 6.5 Deployment Documentation

Directory: `docs/deployment/`

- [ ] `production-deployment.md`
- [ ] `upgrade-process.md`
- [ ] All advanced deployment guides

### 6.6 Scheduling & Constraints

Directory: `docs/scheduling-and-constraints/`

- [ ] All declarative and procedural scheduling files

### 6.7 API Documentation

Directory: `docs/api/`

- [ ] `introduction.mdx`
- [ ] All example files

### 6.8 Command Expansion

Directory: `docs/command-expansion/`

- [ ] `introduction.md`
- [ ] `sequences.mdx`

### 6.9 Tutorials (60+ files)

Directory: `docs/tutorials/`

- [ ] Mission modeling tutorials
- [ ] External events tutorials
- [ ] All other tutorial files

### 6.10 Upgrade Guides (47 files)

Directory: `docs/upgrade-guides/`

- [ ] Decide: preserve historical "Aerie" references or update all?
- [ ] If updating: bulk replace in all files

### 6.11 Architecture Decision Records ✅

Directory: `docs/overview/design/arch-decision-records/`

- [x] All ADR files updated: Aerie → PlanDev, Phoenix → SeqDev
- [x] `adr-0101-aerie-actions.md` → `adr-0101-seqdev-actions.md` (renamed & updated)
- [x] `adr-0100-phoenix-sde.md` → `adr-0100-seqdev-sde.md` (renamed & updated)
- [x] `adr-0006-phoenix-editor.md` → `adr-0006-seqdev-editor.md` (renamed & updated)
- [x] Updated sidebars.js with new ADR paths

### 6.12 Contributing Guide

- [ ] `CONTRIBUTING.md` - Update all references

---

## Phase 7: Video Content

**Estimated scope:** 2 files (101+ MB)

### 7.1 Promotional Video

- [ ] Assess if video contains "Aerie" branding (audio/visual)
- [ ] If yes: Commission new video or re-edit existing
- [ ] Replace `static/video/aerie-video-subtitles.mp4` → `plandev-video-subtitles.mp4`

### 7.2 Video Thumbnail

- [ ] Create new thumbnail without "Aerie" branding
- [ ] Replace `static/video/aerie-video-still.png` → `plandev-video-still.png`

---

## Phase 8: External URLs & Infrastructure

**Dependency:** Requires new infrastructure to be set up first

### 8.1 GitHub Repository URLs

| Current                                                      | Action                      |
| ------------------------------------------------------------ | --------------------------- |
| `https://github.com/NASA-AMMOS/aerie`                        | Update to new repo or keep? |
| `https://github.com/NASA-AMMOS/aerie-docs`                   | Update to new repo          |
| `https://github.com/NASA-AMMOS/plandev-ui`                     | Update to new repo          |
| `https://github.com/NASA-AMMOS/plandev-mission-model-template` | Update to new repo          |
| `https://github.com/NASA-AMMOS/plandev-gateway`                | Update to new repo          |

### 8.2 Email Addresses

| Current                          | New |
| -------------------------------- | --- |
| `aerie-support@googlegroups.com` | TBD |
| `support@aerie.ammos.nasa.gov`   | TBD |

### 8.3 Community Links

| Current                                       | New |
| --------------------------------------------- | --- |
| `https://groups.google.com/u/3/g/aerie-users` | TBD |

### 8.4 Documentation Site URL

| Current                                    | New |
| ------------------------------------------ | --- |
| `https://nasa-ammos.github.io/plandev-docs/` | TBD |

---

## Phase 9: Testing & Verification

### 9.1 Search Verification

After all changes:

```bash
# Verify no "Aerie" references remain (except intentional historical ones)
grep -ri "aerie" --include="*.md" --include="*.mdx" --include="*.js" --include="*.json"
```

### 9.2 Build Verification

- [x] Run `npm run build` - verify no broken links
- [x] Run `npm run serve` - visual inspection of all pages
- [x] Test search functionality with new Algolia index

### 9.3 Link Verification

- [ ] All internal navigation links work
- [ ] All image references resolve
- [ ] All external links are updated (or intentionally preserved)

### 9.4 Visual Verification

- [x] Homepage displays correctly (light/dark mode)
- [x] All feature cards display new branding
- [x] Logo appears correctly in header
- [x] Architecture diagrams display correctly

---

## Execution Order (Recommended)

1. **Phase 1** - Get all decisions finalized
2. **Phase 3.1-3.2** - Create new logo assets (can be done in parallel with other work)
3. **Phase 2** - Update configuration files
4. **Phase 4** - Update architecture diagrams
5. **Phase 5** - Update React components
6. **Phase 6** - Bulk update documentation content
7. **Phase 3.3-3.5** - Update/recreate screenshots (requires rebranded UI)
8. **Phase 7** - Video content (may be deferred)
9. **Phase 8** - External URLs (when infrastructure ready)
10. **Phase 9** - Testing and verification

---

## Automation Opportunities

### Bulk Text Replacement

Many changes can be automated with find/replace:

- `Aerie` → `PlanDev` (case-sensitive)
- `aerie` → `plandev` (for URLs, paths, identifiers)
- `aerie-docs` → `plandev-docs`
- `AERIE` → `PLANDEV` (if any uppercase instances)

### File Renaming Script

```bash
# Example: Rename all aerie-* images to plandev-*
for f in static/img/**/aerie-*; do
  mv "$f" "${f/aerie-/plandev-}"
done
```

### Reference Update Script

After renaming files, update all references:

```bash
# Find and replace in all source files
find . -type f \( -name "*.js" -o -name "*.md" -o -name "*.mdx" \) \
  -exec sed -i '' 's/aerie-/plandev-/g' {} \;
```

---

## Notes

- **SeqDev Usage:** Clarify exactly which documents/features should use "SeqDev" vs "PlanDev"
- **Historical Accuracy:** Consider adding a note in docs explaining the Aerie → PlanDev transition
- **Redirects:** Set up redirects from old URLs to new URLs if changing paths
- **Algolia:** Will need to reconfigure Algolia search with new index after content updates
