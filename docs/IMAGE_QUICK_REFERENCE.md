# Next.js Image Quick Reference

## Basic Usage

```tsx
import Image from 'next/image';

<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
/>
```

## Common Patterns

### Hero Image (Above the Fold)
```tsx
<Image
  src="/images/hero/background.jpg"
  alt="Sustainable livestock farming landscape"
  fill
  priority={true}
  quality={85}
  className="object-cover"
/>
```

### Profile Image
```tsx
<Image
  src="/images/leaders/name.jpg"
  alt="Person Name, Job Title"
  width={400}
  height={400}
  sizes="(max-width: 768px) 200px, 400px"
  className="rounded-full"
/>
```

### Decorative Icon (with text)
```tsx
<Image
  src="/images/icons/icon.svg"
  alt=""
  width={64}
  height={64}
/>
```

### Informative Icon (standalone)
```tsx
<Image
  src="/images/icons/icon.svg"
  alt="Description of what icon represents"
  width={64}
  height={64}
/>
```

## Props Cheat Sheet

| Prop | Required | Description | Example |
|------|----------|-------------|---------|
| `src` | ✅ Yes | Image path or URL | `/images/photo.jpg` |
| `alt` | ✅ Yes | Accessibility text | `"Description"` |
| `width` | ⚠️ Conditional | Width in pixels | `800` |
| `height` | ⚠️ Conditional | Height in pixels | `600` |
| `fill` | ❌ No | Fill parent container | `true` |
| `priority` | ❌ No | Load immediately | `true` |
| `quality` | ❌ No | Image quality (1-100) | `85` |
| `sizes` | ❌ No | Responsive sizes | `"(max-width: 768px) 100vw, 50vw"` |
| `placeholder` | ❌ No | Blur placeholder | `"blur"` |

**Note**: Either use `width`/`height` OR `fill`, not both.

## Alt Text Guidelines

✅ **Good Alt Text**
- `"Sustainable livestock grazing on pasture"`
- `"Bill Clinton, CEO of Fealess Company"`
- `"Chart showing 96% satisfaction rate"`

❌ **Bad Alt Text**
- `"image"` or `"img1"`
- `"Click here"`
- `"Picture of farm"` (avoid "picture of")

🎯 **Decorative Images**
- Use `alt=""` (empty string) for purely decorative images
- Example: Icons next to text labels

## Responsive Sizes

```tsx
// Full width on mobile, half on tablet, third on desktop
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

// Full width on mobile, half on desktop
sizes="(max-width: 768px) 100vw, 50vw"

// Fixed size
sizes="400px"
```

## Image Organization

```
public/images/
├── hero/          # Hero section backgrounds
├── leaders/       # Leadership profile photos
├── services/      # Service icons and images
├── values/        # Value icons and images
└── icons/         # General icons
```

## Utility Imports

```tsx
import {
  IMAGE_SIZES,
  IMAGE_QUALITY,
  IMAGE_DIMENSIONS,
  IMAGE_PATHS,
  getProfileAltText,
} from '@/lib/imageConfig';

// Use predefined configurations
<Image
  src={`${IMAGE_PATHS.LEADERS}/photo.jpg`}
  alt={getProfileAltText('Name', 'Title')}
  width={IMAGE_DIMENSIONS.PROFILE.width}
  height={IMAGE_DIMENSIONS.PROFILE.height}
  quality={IMAGE_QUALITY.HIGH}
/>
```

## Checklist

Before committing images, verify:

- [ ] Using `next/image` component (not `<img>` tag)
- [ ] Alt text is descriptive and meaningful
- [ ] Hero images have `priority={true}`
- [ ] Images are optimized and compressed
- [ ] Responsive sizes configured for large images
- [ ] Images tested on mobile, tablet, and desktop
- [ ] Keyboard navigation works with images
- [ ] Images load correctly in all browsers

## Performance Tips

1. **Compress images** before adding to project
2. **Use appropriate formats**: JPEG for photos, PNG for transparency, SVG for icons
3. **Set priority** only for above-the-fold images
4. **Use responsive sizes** to serve smaller images on mobile
5. **Lazy load** by default (don't set priority for below-the-fold images)

## Need Help?

See full documentation: `IMAGE_OPTIMIZATION_GUIDE.md`
See examples: `components/ImageExample.tsx`
