## Usage

Add the block to a screen. The wrapper below is what the docs use: a scroll view that keeps the keyboard behaviour sensible on phones and centers the form on larger screens.

```tsx
import { UserMenu } from '@/components/user-menu';
import { View } from 'react-native';

export default function UserMenuScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <UserMenu />
    </View>
  );
}
```

## Two versions

Pick the integration when you take the block:

- **None (bring your own auth).** The UI, validation, and loading states are wired up, and the places where your own auth logic goes are marked with `// TODO:` comments. Nothing else needs to be installed.
- **Clerk.** The same screen with Clerk's Expo hooks (useUser and useClerk) doing the work. It needs `@clerk/expo`, a configured `ClerkProvider`, and a development build rather than Expo Go.

Both versions come in a Nativewind and a Uniwind flavor; pick the one matching your styling engine.

## What you still write

The `// TODO:` comments in the file mark app-specific logic and navigation. In the version without an auth provider:

- Sign out and navigate to sign in screen
- Navigate to account settings screen
- Navigate to add account screen

In the Clerk version:

- If your app does not use `Stack.Protected`, navigate to your sign-in screen
- Navigate to account settings screen
- Navigate to add account screen

## Clerk setup

Applies to the Clerk version only. After adding the block, follow steps 2 to 4 of Clerk's [Expo quick start](https://go.clerk.com/8e6CCee#set-your-clerk-api-keys) to wrap the app in `ClerkProvider` and set your keys. Use a development build so every Clerk Expo feature works. The [Clerk docs](https://go.clerk.com/Q1MKAz0) cover the hooks the block uses.

Starting a new project? The [clerk-auth template](https://github.com/founded-labs/react-native-reusables-templates/tree/main/clerk-auth#clerk-auth-template) ships with every Clerk block pre-configured:

```
npx @react-native-reusables/cli@latest init -t clerk-auth
```
