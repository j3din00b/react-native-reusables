## Usage

Add the block to a screen. The wrapper below is what the docs use: a scroll view that keeps the keyboard behaviour sensible on phones and centers the form on larger screens.

```tsx
import { VerifyEmailForm } from '@/components/verify-email-form';
import { ScrollView, View } from 'react-native';

export default function VerifyEmailScreen() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
      keyboardDismissMode="interactive">
      <View className="w-full max-w-sm">
        <VerifyEmailForm />
      </View>
    </ScrollView>
  );
}
```

## Two versions

Pick the integration when you take the block:

- **None (bring your own auth).** The UI, validation, and loading states are wired up, and the places where your own auth logic goes are marked with `// TODO:` comments. Nothing else needs to be installed.
- **Clerk.** The same screen with Clerk's Expo hooks (useSignUp) doing the work. It needs `@clerk/expo`, a configured `ClerkProvider`, and a development build rather than Expo Go.

Both versions come in a Nativewind and a Uniwind flavor; pick the one matching your styling engine.

## What you still write

The `// TODO:` comments in the file mark app-specific logic and navigation. In the version without an auth provider:

- Submit form and navigate to protected screen if successful
- Resend code
- Navigate to sign up screen

In the Clerk version:

- Handle other statuses
- Navigate to sign up screen

## Clerk setup

Applies to the Clerk version only. After adding the block, follow steps 2 to 4 of Clerk's [Expo quick start](https://go.clerk.com/8e6CCee#set-your-clerk-api-keys) to wrap the app in `ClerkProvider` and set your keys. Use a development build so every Clerk Expo feature works. The [Clerk docs](https://go.clerk.com/Q1MKAz0) cover the hooks the block uses.

Starting a new project? The [clerk-auth template](https://github.com/founded-labs/react-native-reusables-templates/tree/main/clerk-auth#clerk-auth-template) ships with every Clerk block pre-configured:

```
npx @react-native-reusables/cli@latest init -t clerk-auth
```
