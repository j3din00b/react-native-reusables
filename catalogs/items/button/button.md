## Usage

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
```

```tsx
<Button>
  <Text>Button</Text>
</Button>
```

### Link

You can use the `buttonVariants` and `buttonTextVariants` helpers to create a link that looks like a button.

```tsx
import { buttonVariants, buttonTextVariants } from "@/components/ui/button"
```

```tsx
<Link className={buttonVariants({ variant: 'outline' })}>
  <Text className={buttonTextVariants({ variant: 'outline' })}>Click here</Text>
</Link>
```

Alternatively, you can set the `asChild` parameter and nest the link component.

```tsx
<Link href="/login" asChild>
  <Button>
    <Text>Login</Text>
  </Button>
</Link>
```

## Examples

### Primary

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonPreview() {
  return (
    <Button>
      <Text>Button</Text>
    </Button>
  );
}
```

### Secondary

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonSecondaryPreview() {
  return (
    <Button variant="secondary">
      <Text>Secondary</Text>
    </Button>
  );
}
```

### Destructive

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonDestructivePreview() {
  return (
    <Button variant="destructive">
      <Text>Destructive</Text>
    </Button>
  );
}
```

### Outline

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonOutlinePreview() {
  return (
    <Button variant="outline">
      <Text>Outline</Text>
    </Button>
  );
}
```

### Ghost

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonGhostPreview() {
  return (
    <Button variant="ghost">
      <Text>Ghost</Text>
    </Button>
  );
}
```

### Link

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export function ButtonLinkPreview() {
  return (
    <Button variant="link">
      <Text>Link</Text>
    </Button>
  );
}
```

### Icon

```tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ChevronRight } from 'lucide-react-native';

export function ButtonIconPreview() {
  return (
    <Button variant="outline" size="icon">
      <Icon as={ChevronRight} />
    </Button>
  );
}
```

### With Icon

```tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Mail } from 'lucide-react-native';

export function ButtonWithIconPreview() {
  return (
    <Button>
      <Icon as={Mail} className="text-primary-foreground" />
      <Text>Login with Email</Text>
    </Button>
  );
}
```

### Loading

```tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Loader2 } from 'lucide-react-native';
import { View } from 'react-native';

export function ButtonLoadingPreview() {
  return (
    <Button disabled>
      <View className="pointer-events-none animate-spin">
        <Icon as={Loader2} className="text-primary-foreground" />
      </View>
      <Text>Please wait</Text>
    </Button>
  );
}
```
