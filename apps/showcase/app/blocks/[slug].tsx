import {
  ForgotPasswordForm,
  ResetPasswordForm,
  SignInForm,
  SignUpForm,
  SocialConnections,
  UserMenu,
  VerifyEmailForm,
} from '@/registry/blocks';
import { BLOCKS } from '@showcase/lib/constants';
import { Redirect, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { cn } from '@/registry/nativewind/lib/utils';

type BlockSlug = (typeof BLOCKS)[number]['slug'];

// Blocks are web-only in the showcase (used for iframe previews).
const BLOCK_COMPONENTS: Record<BlockSlug, () => React.JSX.Element> = {
  'sign-in-form': SignInForm,
  'sign-up-form': SignUpForm,
  'forgot-password-form': ForgotPasswordForm,
  'reset-password-form': ResetPasswordForm,
  'verify-email-form': VerifyEmailForm,
  'social-connections': SocialConnections,
  'user-menu': UserMenu,
};

export default function BlockScreen() {
  const { slug } = useLocalSearchParams();
  const item = Array.isArray(slug) ? slug[0] : slug;

  if (Platform.OS !== 'web' || !item || !isBlockSlug(item)) {
    return <Redirect href="/" />;
  }

  const Block = BLOCK_COMPONENTS[item];

  return (
    <ScrollView contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className={cn('w-full max-w-sm', item === 'user-menu' && 'items-center')}>
        <Block />
      </View>
    </ScrollView>
  );
}

function isBlockSlug(slug: string): slug is BlockSlug {
  return BLOCKS.some((block) => block.slug === slug);
}
