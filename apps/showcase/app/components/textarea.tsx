import { TextareaPreview } from '@/registry/examples/textarea';
import { View, Platform } from 'react-native';
import { KeyboardAwareScrollView, KeyboardGestureArea } from 'react-native-keyboard-controller';

const WEB_CENTERED = {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
} as const;

export default function InputScreen() {
  return (
    <KeyboardGestureArea interpolator="ios" style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerClassName="flex-1 justify-center items-center p-6"
        contentContainerStyle={Platform.select({ web: WEB_CENTERED })}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <View className="max-auto w-full max-w-sm">
          <TextareaPreview />
        </View>
      </KeyboardAwareScrollView>
    </KeyboardGestureArea>
  );
}
