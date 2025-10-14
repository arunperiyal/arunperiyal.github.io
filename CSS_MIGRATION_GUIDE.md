# CSS Migration Guide

## Overview

This guide explains how to migrate from inline styles and scattered CSS files to the new consolidated CSS structure.

## New CSS Structure

```
css/
├── main.css      - Shared styles for all pages
└── homepage.css  - Homepage-specific styles (carousel, sidebar)
```

## Migration Steps

### For Standard Pages (research, materials, about, etc.)

**Before:**
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        /* 100+ lines of inline CSS */
    </style>
</head>
```

**After:**
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
```

### For Homepage (index.html)

**After:**
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/homepage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
```

### For Subdirectory Pages (research/, materials/)

Use relative paths:
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
```

### For Deep Nested Pages (research/fluid_structure_interaction/)

```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
```

## CSS Classes Available

### Layout
- `.content` - Max-width content container (1000px)
- `main` - Standard main container (1200px)

### Cards
- `.cards` - Flexbox card container
- `.card` - Individual card
- `.card-container` - Grid-based card layout
- `.code-card` - Code/materials specific cards
- `.topic-card` - Research topic cards

### Components
- `.flip-card` - 3D flip cards for research areas
- `.carousel-container`, `.carousel`, `.carousel-item` - Homepage carousel
- `.research-box` - Research content box with left border
- `.code-section` - Section for code examples

### Utilities
- `.language-tag` - Programming language tags
- `.code-link`, `.view-link` - Call-to-action buttons

## Benefits

1. **Reduced File Size**: Removing ~100+ lines of inline CSS from each page
2. **Consistency**: Single source of truth for styling
3. **Maintainability**: Update once, apply everywhere
4. **Performance**: Browser can cache CSS files
5. **Responsive**: Mobile-first responsive design built-in

## Old Files to Remove/Deprecate

After migration complete:
- `styles.css` (173 lines) - merged into main.css
- `index-style.css` (267 lines) - merged into homepage.css
- All `<style>` tags from HTML files

## Testing Checklist

For each migrated page:
- [ ] Header displays correctly with background image
- [ ] Navigation bar works and is sticky
- [ ] Card layouts are responsive
- [ ] Links have correct colors (gold #f4d35e)
- [ ] Footer displays properly
- [ ] Mobile view works (test at 768px and 480px)
- [ ] No console errors for missing CSS files

## Priority Order

1. Homepage (index.html)
2. Main category pages (research.html, materials.html, about.html)
3. Research subdirectory pages
4. Materials subdirectory pages
5. Deep nested pages
