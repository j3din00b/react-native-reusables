## Usage

```tsx
import { ArrowRight } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
```

```tsx
<Icon as={ArrowRight} className="text-red-500" size={16} />
```

Pass any Lucide icon through the `as` prop. `className` styles the icon with utility classes, so `text-*` colors and `size-*` classes work the same way they do on `Text`. Extra props go straight to the Lucide icon.

## Props

- `as` (required): the Lucide icon component to render.
- `size`: icon size in pixels. Defaults to 14.
- `className`: utility classes for the icon. The icon also inherits the surrounding `TextClassContext` from components like `Button`, so an icon inside a button picks up the button's text color.
- All other `LucideProps` are forwarded to the icon.

## Why a wrapper

Lucide icons take `color` and `size` props, not `className`. This wrapper maps `className` to those props once, so every icon in the app can be styled with utility classes without wrapping each icon individually.
