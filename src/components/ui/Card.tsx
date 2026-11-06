import type { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.background,
    padding: theme.spacing(2),
    borderRadius: theme.radius.lg,
    elevation: 1,
  },
}));
