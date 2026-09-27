## Usage

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
```

```tsx
<Badge>
  <Text>Badge</Text>
</Badge>
```

### Link

You can use the `badgeVariants` and `badgeTextVariants` helpers to create a link that looks like a badge.

```tsx
import { badgeVariants, badgeTextVariants } from "@/components/ui/badge"
```

```tsx
<Link className={badgeVariants({ variant: 'outline' })}>
  <Text className={badgeTextVariants({ variant: 'outline' })}>Badge</Text>
</Link>
```

## Examples

```tsx
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { BadgeCheckIcon } from 'lucide-react-native';
import { View } from 'react-native';

export function BadgePreview() {
  return (
    <View className="flex flex-col items-center gap-2">
      <View className="flex w-full flex-row flex-wrap gap-2">
        <Badge>
          <Text>Badge</Text>
        </Badge>
        <Badge variant="secondary">
          <Text>Secondary</Text>
        </Badge>
        <Badge variant="destructive">
          <Text>Destructive</Text>
        </Badge>
        <Badge variant="outline">
          <Text>Outline</Text>
        </Badge>
      </View>
      <View className="flex w-full flex-row flex-wrap gap-2">
        <Badge variant="secondary" className="bg-blue-500 dark:bg-blue-600">
          <Icon as={BadgeCheckIcon} className="text-white" />
          <Text className="text-white">Verified</Text>
        </Badge>
        <Badge className="min-w-5 rounded-full px-1">
          <Text>8</Text>
        </Badge>
        <Badge className="min-w-5 rounded-full px-1" variant="destructive">
          <Text>99</Text>
        </Badge>
        <Badge className="min-w-5 rounded-full px-1" variant="outline">
          <Text>20+</Text>
        </Badge>
      </View>
    </View>
  );
}
```
