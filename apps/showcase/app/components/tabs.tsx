import { TabsPreview } from '@/registry/examples/tabs';
import { View } from 'react-native';

export default function TabsScreen() {
  return (
    <View className="web:items-center web:justify-center flex-1 p-6">
      <TabsPreview />
    </View>
  );
}
