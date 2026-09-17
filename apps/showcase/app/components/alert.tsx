import { AlertPreview } from '@/registry/examples/alert';
import { View } from 'react-native';

export default function AlertScreen() {
  return (
    <View className="web:flex-1 web:justify-center items-center p-6">
      <AlertPreview />
    </View>
  );
}
