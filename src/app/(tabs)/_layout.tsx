import { NativeTabs } from 'expo-router/native-tabs';
import { UnistylesRuntime } from 'react-native-unistyles';

export default function TabsLayout() {
  const theme = UnistylesRuntime.getTheme();

  return (
    <NativeTabs
      backgroundColor={theme.colors.surface}
      indicatorColor={theme.colors.primary}
      labelStyle={{
        color: theme.colors.muted,
        selected: { color: theme.colors.primary },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house.fill"
          md="house"
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
