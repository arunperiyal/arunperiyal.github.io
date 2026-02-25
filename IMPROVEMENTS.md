# Website Improvement Plan

This document outlines identified improvements for the Arun Periyal academic website, organized by priority and implementation phase.

**Last Updated:** 2026-02-25

---

## Priority 1: Critical Improvements

### 1. Migrate Remaining Pages with Inline Styles to Consolidated CSS ⚠️

**Status:** In Progress

**18 pages still have extensive inline `<style>` blocks:**
- `resources.html`
- `publications.html`
- `news.html` (has SEO meta tags - good!)
- `teaching.html` (has SEO meta tags - good!)
- `linux_tools.html` (uses legacy `styles.css`)
- `research/fluid_structure_interaction/energy-harvesting.html`
- `research/fluid_structure_interaction/marine-viv.html`
- `research/fluid_structure_interaction/rom-viv.html`
- `research/nonlinear_dynamics/approximation_methods.html`
- Plus 9 files in `trial/` and nested `approximation_methods/` folders

**Impact:** Huge maintainability issue - duplicated CSS in every file

**Action Required:** Migrate all styles to `css/main.css`, replace `<style>` blocks with `<link rel="stylesheet" href="...">`

---

### 2. Remove Legacy CSS Files

**Status:** Pending

**Found unused legacy files:**
- `styles.css` (2.8K) - referenced by `linux_tools.html`
- `index-style.css` (5.1K) - not referenced anywhere

**Action Required:**
1. Migrate any unique styles to `main.css`
2. Update `linux_tools.html` to use `css/main.css`
3. Delete legacy files

---

### 3. Fix Inline Styles in index.html

**Status:** Pending

**Lines with hard-coded inline styles:**
- Line 65: `<a href="research.html" style="text-decoration: none; color: #f4d35e;">`
- Line 85: `<a href="materials.html" style="text-decoration: none; color: #f4d35e;">`

**Action Required:** Create CSS class (e.g., `.card-link`) and use instead of inline styles

---

## Priority 2: Code Quality & Best Practices

### 4. Extract JavaScript to Separate Files

**Status:** Pending

**Current:** 40+ lines of inline JavaScript in `index.html` (lines 108-149)
- Carousel logic
- Sidebar toggle
- Auto-rotation

**Recommendation:** Create:
- `js/carousel.js`
- `js/sidebar.js`

**Benefits:** Better caching, code reuse, cleaner HTML

---

### 5. Add Semantic HTML5 Structure

**Status:** Pending

**Issue:** Most pages use generic `<div>` containers without semantic meaning

**Recommendation:** Use proper HTML5 semantic elements:
```html
<article>
<section>
<aside>
<figure>
<figcaption>
```

**Benefits:** Improved accessibility and SEO

---

### 6. Add Meta Tags for SEO

**Status:** Pending

**Currently:** Only `news.html` and `teaching.html` have proper meta tags

**Should add to all main pages:**
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Arun Periyal">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="...">
```

**Pages needing meta tags:**
- `index.html`
- `research.html`
- `materials.html`
- `about.html`
- `resources.html`
- `publications.html`
- `linux_tools.html`
- All research detail pages (4 files)
- All materials detail pages (4 files)
- Research sub-pages (energy-harvesting.html, etc.)

---

## Priority 3: Performance & Optimization

### 7. Optimize Image Loading

**Status:** Pending

**Current:** All images load immediately

**Recommendation:** Add lazy loading attribute:
```html
<img src="..." alt="..." loading="lazy">
```

**Apply to:**
- Carousel images
- Card images
- QR codes
- Research area images
- Cover images (consider using `<picture>` for responsive images)

---

### 8. Minify CSS for Production

**Status:** Pending

**Recommendation:** Create minified versions:
- `css/main.min.css`
- `css/homepage.min.css`

**Benefits:** Faster page load times

---

### 9. Add Favicon

**Status:** Pending

**Missing:** Browser tab icon

**Action Required:**
1. Create favicon images (16x16, 32x32, 180x180 for Apple)
2. Add to all HTML pages:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

---

### 10. Consolidate Font Awesome Loading

**Status:** Pending

**Issue:** Every page loads Font Awesome 6.0.0-beta3 from CDN separately

**Optimization Options:**
1. Self-host Font Awesome for better control
2. Use Font Awesome subsetting (only include needed icons)
3. Switch to lighter icon library (Feather Icons, Lucide)

**Benefits:** Reduced external dependencies, faster load times

---

## Priority 4: Accessibility

### 11. Add ARIA Labels

**Status:** Pending

**Missing accessibility attributes:**
```html
<nav aria-label="Main navigation">
<button aria-label="Toggle sidebar" aria-expanded="false">
<footer role="contentinfo">
<main role="main" id="main-content">
```

**Benefits:** Better screen reader support

---

### 12. Improve Link Text

**Status:** Pending

**Current generic link text:**
- "Learn More"
- "Know More"
- "Explore Materials"
- "View Code"

**Better alternatives:**
- "Learn more about my research"
- "Explore naval architecture materials"
- "View code for bifurcation analysis"

**Benefits:** Screen reader users get context without reading surrounding text

---

### 13. Add Skip to Main Content Link

**Status:** Pending

**Recommendation:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

**CSS:**
```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-gold);
    color: var(--primary-dark);
    padding: 8px;
    z-index: 100;
}
.skip-link:focus {
    top: 0;
}
```

**Benefits:** Keyboard navigation users can skip to content

---

### 14. Fix Heading Hierarchy

**Status:** Pending

**Issue in index.html line 100:** Closing `</h2>` tag without opening tag (after areas-of-interest list)

**Action Required:** Remove orphaned closing tag or add proper opening tag

---

## Priority 5: Consistency

### 15. Standardize Page Titles

**Status:** Pending

**Current inconsistent formats:**
- "Arun Periyal" (index.html)
- "Materials - Arun Periyal" (materials.html)
- "Arun Periyal - Research Overview" (linux_tools.html - WRONG!)

**Recommendation:** Consistent format: `"Page Name - Arun Periyal"`

**Exception:** Homepage can be just "Arun Periyal - Naval Architect & Ocean Engineer"

---

### 16. Add Breadcrumb Navigation

**Status:** Pending

**For nested pages:**
```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="../../index.html">Home</a></li>
    <li><a href="../research.html">Research</a></li>
    <li><a href="nonlinear_dynamics.html">Nonlinear Dynamics</a></li>
    <li aria-current="page">Approximation Methods</li>
  </ol>
</nav>
```

**Benefits:** Better navigation, SEO, user orientation

---

### 17. Standardize Card Styling

**Status:** Pending

**Current inconsistent classes:**
- `.card`
- `.card-content`
- `.detail-card`
- `.code-card`
- `.topic-card`

**Recommendation:** Consolidate into unified card system:
- `.card` (base)
- `.card--detail` (modifier)
- `.card--code` (modifier)
- `.card--topic` (modifier)

Use BEM methodology for consistency

---

## Priority 6: Content & Structure

### 18. File Naming Migration

**Status:** Pending (See FILE_NAMING_STANDARD.md)

**Files needing rename to kebab-case:**
- `linux_tools.html` → `linux-tools.html`
- `research/nonlinear_dynamics.html` → `research/nonlinear-dynamics.html`
- `research/fluid_structure_interaction.html` → `research/fluid-structure-interaction.html`
- `research/machine_learning.html` → `research/machine-learning.html`
- `research/naval_architecture.html` → `research/naval-architecture.html`

**Requires:** Git mv to preserve history, update all links

---

### 19. Clean Up Trial/Backup Directories

**Status:** Pending

**Directories to address:**
- `trial/` folder (7 experimental files)
- `backups/14102025/` (old duplicates)

**Options:**
1. Delete if no longer needed
2. Add to `.gitignore` if keeping locally
3. Move to separate branch

**Benefits:** Cleaner repository, faster deployments

---

### 20. Add 404 Error Page

**Status:** Pending

**Missing:** Custom 404.html for GitHub Pages

**Recommendation:** Create branded 404 page with:
- Clear error message
- Search functionality
- Links to main sections
- Consistent styling with rest of site

---

## Priority 7: JavaScript Improvements

### 21. Remove Duplicate Carousel Code

**Status:** Pending

**Issue:** Two different carousel implementations:
- `index.html` - manual controls, auto-rotation
- `research.html` - simple auto-rotation only

**Recommendation:** Create unified carousel component in `js/carousel.js` with options

---

### 22. Add Form Validation

**Status:** Future Enhancement

**Note:** Currently no forms on site, but plan for:
- Contact form
- Newsletter subscription
- Comment system

---

## Quick Wins (5-Minute Fixes)

### ✅ Can Do Immediately:

1. **Fix heading hierarchy bug** (index.html:100)
2. **Add missing `alt` attributes** to images
3. **Add `lang="en"` to all HTML tags** (some are missing)
4. **Auto-update copyright year:**
   ```html
   <p>&copy; <span id="year"></span> Arun Periyal. All rights reserved.</p>
   <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
   ```
5. **Fix page title in linux_tools.html** (currently says "Research Overview")

---

## Implementation Phases

### Phase 1 (High Impact, Low Effort) - CURRENT PHASE

**Goals:**
1. ✅ Migrate inline styles from 18 pages → `main.css`
2. ✅ Remove legacy CSS files (`styles.css`, `index-style.css`)
3. ✅ Fix inline styles in index.html
4. ✅ Add SEO meta tags to all main pages

**Estimated Time:** 2-3 hours
**Impact:** Massive improvement in maintainability and SEO

---

### Phase 2 (Medium Impact, Medium Effort)

**Goals:**
1. Extract JavaScript to separate files
2. Add lazy loading to images
3. Fix file naming (kebab-case migration)
4. Clean up trial/backup directories
5. Add favicon

**Estimated Time:** 3-4 hours
**Impact:** Better performance and organization

---

### Phase 3 (Long-term Quality)

**Goals:**
1. Add accessibility features (ARIA, skip links)
2. Add breadcrumb navigation
3. Create minified CSS
4. Add 404 page
5. Standardize card components
6. Improve link text for accessibility

**Estimated Time:** 4-5 hours
**Impact:** Professional polish, accessibility compliance

---

## Completed Improvements ✅

### Recent Refactoring (2026-02-25)

1. ✅ **CSS Architecture:** Added carousel and about page styles to `main.css`
2. ✅ **Navigation Paths:** Fixed incorrect relative paths in all materials detail pages
3. ✅ **Footer Consistency:** Standardized footer across all pages (12 pages updated)
4. ✅ **Font Awesome:** Added to materials.html, now consistent across site
5. ✅ **Inline Styles Removal:** Migrated about.html inline styles to main.css
6. ✅ **Testing:** Verified all changes with local server

**Files Modified:** 13 HTML files, 1 CSS file

---

## Notes

- All improvements should maintain consistency with `CLAUDE.md` guidelines
- Follow CSS consolidation strategy from `CSS_MIGRATION_GUIDE.md`
- File naming should follow `FILE_NAMING_STANDARD.md`
- Test all changes locally before committing
- Update this document as improvements are completed
- Consider creating separate branch for major refactoring work

---

## Resources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [HTML5 Semantic Elements](https://www.w3.org/TR/html5/sections.html)
- [BEM Methodology](http://getbem.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
