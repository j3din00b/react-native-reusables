## Bringing the shadcn/ui experience to React Native

Built with familiar tools and libraries, it follows consistent styling, structure, and naming conventions, letting you use your favorite design system to create beautiful universal apps. Every item is a file you own: add it, then change it.

## Key differences from shadcn/ui

- **Nativewind or Uniwind:** a Tailwind-like experience adapted for React Native. Every item ships in both flavors; pick the one matching your styling engine.
- **RN Primitives:** a universal port of Radix UI primitives for React Native with an almost identical API, enabling consistent composition on native platforms. See https://rnprimitives.com
- **Portals:** React Native doesn't support DOM portals. On native platforms, components like modals and menus need a `PortalHost` mounted at the root of the app.
- **No cascading styles:** child elements like `Text` can't inherit styles from a parent class. Each element must be styled directly. A small `TextClassContext` workaround lets `Text` inherit from components like `Button`.
- **No data attributes:** React Native doesn't support `data-*` attributes, so variants rely on props or state on native platforms.
- **Reanimated:** uses `react-native-reanimated` for smooth, native performance.
- **Icons:** a wrapper component combined with a Lucide icon avoids wrapping every imported icon individually, for example `<Icon as={LeftArrowIcon} />`.
- **Programmatic control:** some components, such as `DropdownMenu`, can't be controlled with `open` or `onOpenChange` props. Instead, a `ref` manages open and close behavior after layout calculation.

React Native Reusables aims to stay true to the spirit of shadcn/ui while adapting it to the unique constraints of mobile and universal development.

## Getting started

New project: `npx @react-native-reusables/cli@latest init` creates an Expo app with everything configured. Existing project: add any item and follow the guide that comes with it.
