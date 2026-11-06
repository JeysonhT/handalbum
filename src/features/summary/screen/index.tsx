import { View } from 'react-native';
import { UnistylesRuntime } from 'react-native-unistyles';
import SummaryStats from '../components/SummaryStats';

export default function SummaryPage() {
  const theme = UnistylesRuntime.getTheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: theme.spacing(2) }}>
      <SummaryStats message={"Sabias que tenemos 'n' Fotos Atesoradas?"} />
    </View>
  );
}
