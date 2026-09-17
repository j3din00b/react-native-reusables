import { MenubarPreview } from '@/registry/examples/menubar';
import * as React from 'react';
import { View } from 'react-native';

export default function MenubarScreen() {
  return (
    <View className="web:justify-center flex-1 items-center p-4">
      <MenubarPreview />
    </View>
  );
}
