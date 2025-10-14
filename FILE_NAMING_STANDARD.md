# File Naming Standardization Plan

## Chosen Convention: Kebab-case (hyphens)

**Rationale:**
- Industry standard for web URLs
- Better for SEO (search engines treat hyphens as word separators)
- More readable in URLs
- Already used in `materials/` directory
- Consistent with modern web development practices

## Current State Analysis

### Inconsistencies Found:

| Location | Current Pattern | Examples |
|----------|----------------|----------|
| Root | Mixed | `linux_tools.html` (underscores) |
| materials/ | Hyphens ✓ | `fluid-structure-codes.html` |
| research/ | Underscores | `fluid_structure_interaction.html` |
| research/subdirs | Hyphens ✓ | `energy-harvesting.html` |
| trial/ | Underscores | `side_navigation.html` |

## Standardization Plan

### Files to Rename:

#### Root Level
```
linux_tools.html → linux-tools.html
```

#### Research Directory
```
research/fluid_structure_interaction.html → research/fluid-structure-interaction.html
research/machine_learning.html → research/machine-learning.html
research/naval_architecture.html → research/naval-architecture.html
research/nonlinear_dynamics.html → research/nonlinear-dynamics.html
research/nonlinear_dynamics/ → research/nonlinear-dynamics/
```

#### Research Subdirectories
```
research/nonlinear_dynamics/approximation_methods.html → research/nonlinear-dynamics/approximation-methods.html
```

#### Trial Directory (if keeping)
```
trial/aside_element.html → trial/aside-element.html
trial/flip_card_effect.html → trial/flip-card-effect.html
trial/latex_rendering.html → trial/latex-rendering.html
trial/side_navigation.html → trial/side-navigation.html
trial/scrollable_content.html → trial/scrollable-content.html
```

### CSS Files (already correct)
```
css/main.css ✓
css/homepage.css ✓
```

### Old CSS files to deprecate
```
index-style.css → css/index-style.css (keep for backward compatibility temporarily)
styles.css → css/styles.css (keep for backward compatibility temporarily)
```

## Implementation Steps

### Phase 1: Rename Files
1. Use `git mv` to preserve history
2. Rename directories first, then files within
3. Update internal links in affected HTML files

### Phase 2: Update References
Update all `href` and `src` attributes in HTML files:
- Navigation links
- Relative paths in subdirectories
- Asset references

### Phase 3: Testing
- Test all navigation links
- Verify all pages load correctly
- Check browser console for 404 errors
- Test on local server before deploying

### Phase 4: Cleanup
- Remove old CSS files after migration complete
- Update `.gitignore` if needed
- Update CLAUDE.md with new conventions

## Git Commands

```bash
# Research directory files
git mv research/fluid_structure_interaction.html research/fluid-structure-interaction.html
git mv research/machine_learning.html research/machine-learning.html
git mv research/naval_architecture.html research/naval-architecture.html
git mv research/nonlinear_dynamics.html research/nonlinear-dynamics.html
git mv research/nonlinear_dynamics research/nonlinear-dynamics

# Root level files
git mv linux_tools.html linux-tools.html

# Trial directory (if renaming)
git mv trial/aside_element.html trial/aside-element.html
git mv trial/flip_card_effect.html trial/flip-card-effect.html
git mv trial/latex_rendering.html trial/latex-rendering.html
git mv trial/side_navigation.html trial/side-navigation.html
git mv trial/scrollable_content.html trial/scrollable-content.html
```

## Impact Analysis

### High Impact (need updates):
- `research.html` - Links to all research pages
- `index.html` - Links to research pages
- Any page with navigation to renamed files

### Medium Impact:
- Research pages linking to each other
- Materials pages (already correct)

### Low Impact:
- Trial pages (experimental, low traffic)
- External links (if any)

## Future Convention

All new files should follow:
- **kebab-case** for HTML files: `my-new-page.html`
- **kebab-case** for directories: `my-directory/`
- **lowercase** only (no capitals)
- **descriptive** names (avoid abbreviations)

## Exceptions

Single-word filenames don't need separators:
- `index.html` ✓
- `about.html` ✓
- `research.html` ✓
- `materials.html` ✓

## Recommendation

**Proceed with renaming?**
- [ ] Yes - Begin with research directory (highest impact)
- [ ] No - Document current state and enforce for new files only
- [ ] Partial - Rename only research directory, keep others as-is

**Recommended:** Start with research directory files as they are most visible and have the most inconsistency.
