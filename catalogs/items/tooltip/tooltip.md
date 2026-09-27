## Usage

> **Portal Setup Required.** A `PortalHost` must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Text } from "@/components/ui/text"
```

```tsx
<Tooltip>
  <TooltipTrigger><Text>Hover</Text></TooltipTrigger>
  <TooltipContent>
    <Text>Add to library</Text>
  </TooltipContent>
</Tooltip>
```

## Examples

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Platform } from 'react-native';

export function TooltipPreview() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Text>{Platform.select({ web: 'Hover', default: 'Press' })}</Text>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text>Add to library</Text>
      </TooltipContent>
    </Tooltip>
  );
}
```
