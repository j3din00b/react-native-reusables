## Usage

```tsx
import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { FadeIn, FadeOut } from 'react-native-reanimated';
```

```tsx
<NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
  <Text>I am only animated on native</Text>
</NativeOnlyAnimatedView>
```

On iOS and Android this renders a Reanimated `Animated.View` and accepts every Reanimated prop, including `entering` and `exiting`. On web it renders the children as they are, with no wrapper and no animation, so CSS transitions can handle motion there instead.

## Props

- `as`: `"View"` (default) or `"Pressable"`. With `"Pressable"` the wrapper is an animated `Pressable`, so press handlers work on the animated element itself.
- All `Animated.View` (or animated `Pressable`) props are forwarded on native.

## Where it is used

The overlay components in this collection (dialogs, menus, popovers, tooltips, select) wrap their content in this view so native gets enter and exit animations while web stays untouched.
