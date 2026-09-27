## Usage

> **Portal Setup Required.** A `PortalHost` must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

```tsx
 <Select>
  <SelectTrigger className='w-[180px]'>
    <SelectValue placeholder='Select a fruit' />
  </SelectTrigger>
  <SelectContent insets={contentInsets} className='w-[180px]'>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem label='Apple' value='apple'>
        Apple
      </SelectItem>
      <SelectItem label='Banana' value='banana'>
        Banana
      </SelectItem>
      <SelectItem label='Blueberry' value='blueberry'>
        Blueberry
      </SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Scrollable select

> **React Native Gesture Handler required.** Install `react-native-gesture-handler` in your project and add the following `NativeSelectScrollView` component to your `@/components/ui/select.tsx` file or the file using the scrollable select.

```tsx
import { ScrollView } from 'react-native-gesture-handler';
/**
 * @platform Native only
 * Returns the children on the web
 */
function NativeSelectScrollView({ className, ...props }: React.ComponentProps<typeof ScrollView>) {
  if (Platform.OS === 'web') {
    return <>{props.children}</>;
  }
  return <ScrollView className={cn('max-h-52', className)} {...props} />;
}
```

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import type { TriggerRef } from '@rn-primitives/select';
import * as React from 'react';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Orange', value: 'orange' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pomegranate', value: 'pomegranate' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Plum', value: 'plum' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Tangerine', value: 'tangerine' },
];

export function ScrollableSelectPreview() {
  const ref = React.useRef<TriggerRef>(null);

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  return (
    <Select>
      <SelectTrigger ref={ref} className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent insets={contentInsets} className="w-[180px]">
        <NativeSelectScrollView>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((fruit) => (
              <SelectItem key={fruit.value} label={fruit.label} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </NativeSelectScrollView>
      </SelectContent>
    </Select>
  );
}

/**
 * @platform Native only
 * Returns the children on the web
 */
function NativeSelectScrollView({ className, ...props }: React.ComponentProps<typeof ScrollView>) {
  if (Platform.OS === 'web') {
    return <>{props.children}</>;
  }
  return <ScrollView className={cn('max-h-52', className)} {...props} />;
}
```

## Examples

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { TriggerRef } from '@rn-primitives/select';
import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

export function SelectPreview() {
  const ref = React.useRef<TriggerRef>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  return (
    <Select>
      <SelectTrigger ref={ref} className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent insets={contentInsets} className="w-[180px]">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} label={fruit.label} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```
