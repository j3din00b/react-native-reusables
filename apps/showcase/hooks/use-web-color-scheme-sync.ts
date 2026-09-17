import { colorScheme } from 'nativewind';
import * as React from 'react';
import { Platform } from 'react-native';

/**
 * Web only. Keeps NativeWind's color scheme (and everything derived from it, like the
 * navigation theme) in sync with the page, so the showcase can be embedded in an iframe:
 * 1. `?theme=dark|light` query param (what a host page can pass to an iframe)
 * 2. the `dark` class on <html> (toggled by a host that shares the document)
 * 3. otherwise the OS `prefers-color-scheme`, kept in sync when it changes
 */
function useWebColorSchemeSync() {
  React.useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;

    const html = document.documentElement;
    const theme = new URLSearchParams(window.location.search).get('theme');
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    const hasThemeParam = theme === 'dark' || theme === 'light';

    if (hasThemeParam) {
      colorScheme.set(theme);
    } else if (!html.classList.contains('dark') && media?.matches) {
      colorScheme.set('dark');
    }

    const observer = new MutationObserver(() => {
      const next = html.classList.contains('dark') ? 'dark' : 'light';
      // NativeWind rewrites the class attribute when set, which fires this observer again.
      // Only update on a real change to avoid an infinite loop.
      if (colorScheme.get() !== next) {
        colorScheme.set(next);
      }
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    function onMediaChange(event: MediaQueryListEvent) {
      if (hasThemeParam) return;
      colorScheme.set(event.matches ? 'dark' : 'light');
    }
    media?.addEventListener('change', onMediaChange);

    return () => {
      observer.disconnect();
      media?.removeEventListener('change', onMediaChange);
    };
  }, []);
}

export { useWebColorSchemeSync };
