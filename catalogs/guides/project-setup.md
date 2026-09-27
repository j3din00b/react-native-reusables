The files import `cn` from `@/lib/utils`:

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Class names such as `bg-background`, `text-muted-foreground`, `border-border`, `bg-primary`, and `rounded-lg` resolve through these theme variables. Define them in the global CSS and map each color in the Tailwind theme as `hsl(var(--name))`, with `--radius` mapped to `borderRadius.lg` (`md` is `calc(var(--radius) - 2px)`, `sm` is `calc(var(--radius) - 4px)`).

Light:

| Variable | Value |
| --- | --- |
| `--background` | `hsl(0 0% 100%)` |
| `--foreground` | `hsl(0 0% 3.9%)` |
| `--card` | `hsl(0 0% 100%)` |
| `--card-foreground` | `hsl(0 0% 3.9%)` |
| `--popover` | `hsl(0 0% 100%)` |
| `--popover-foreground` | `hsl(0 0% 3.9%)` |
| `--primary` | `hsl(0 0% 9%)` |
| `--primary-foreground` | `hsl(0 0% 98%)` |
| `--secondary` | `hsl(0 0% 96.1%)` |
| `--secondary-foreground` | `hsl(0 0% 9%)` |
| `--muted` | `hsl(0 0% 96.1%)` |
| `--muted-foreground` | `hsl(0 0% 45.1%)` |
| `--accent` | `hsl(0 0% 96.1%)` |
| `--accent-foreground` | `hsl(0 0% 9%)` |
| `--destructive` | `hsl(0 84.2% 60.2%)` |
| `--border` | `hsl(0 0% 89.8%)` |
| `--input` | `hsl(0 0% 89.8%)` |
| `--ring` | `hsl(0 0% 63%)` |
| `--radius` | `0.625rem` |

Dark:

| Variable | Value |
| --- | --- |
| `--background` | `hsl(0 0% 3.9%)` |
| `--foreground` | `hsl(0 0% 98%)` |
| `--card` | `hsl(0 0% 3.9%)` |
| `--card-foreground` | `hsl(0 0% 98%)` |
| `--popover` | `hsl(0 0% 3.9%)` |
| `--popover-foreground` | `hsl(0 0% 98%)` |
| `--primary` | `hsl(0 0% 98%)` |
| `--primary-foreground` | `hsl(0 0% 9%)` |
| `--secondary` | `hsl(0 0% 14.9%)` |
| `--secondary-foreground` | `hsl(0 0% 98%)` |
| `--muted` | `hsl(0 0% 14.9%)` |
| `--muted-foreground` | `hsl(0 0% 63.9%)` |
| `--accent` | `hsl(0 0% 14.9%)` |
| `--accent-foreground` | `hsl(0 0% 98%)` |
| `--destructive` | `hsl(0 70.9% 59.4%)` |
| `--border` | `hsl(0 0% 14.9%)` |
| `--input` | `hsl(0 0% 14.9%)` |
| `--ring` | `hsl(300 0% 45%)` |
| `--radius` | `0.625rem` |

Nativewind projects: the files assume 1rem is 16px, so pass `inlineRem: 16` to Nativewind in `metro.config.js`:

```js
module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });
```
