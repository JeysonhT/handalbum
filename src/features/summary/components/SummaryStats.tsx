import Card from '@/components/ui/Card';
import { Calendar, Heart } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export interface SummaryStatsProps {
  message: string;
}

const ICON_SIZE = 44;

export default function SummaryStats({ message }: SummaryStatsProps) {
  const theme = UnistylesRuntime.getTheme();

  return (
    <Card>
      {/* Fila principal dividida en 4/5 y 1/5 */}
      <View style={styles.contentRow}>
        {/* 4 quintas partes del espacio (80%) */}
        <View style={styles.welcomeMessageView}>
          <Text style={styles.badge}>Los recuerdos son eternos!</Text>
          <Text style={styles.title}>Bienvenido a la Familia Tellez!</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.body, styles.message]}
          >
            {message}
          </Text>
        </View>

        {/* 1 quinta parte del espacio (20%) */}
        <View style={styles.heartView}>
          <View style={styles.iconContainer}>
            <Heart size={24} color={theme.colors.primary} strokeWidth={2} />
          </View>
        </View>
      </View>

      {/* Pie del Card */}
      <View style={styles.footerRow}>
        <View style={styles.sectionFooter}>
          <Calendar size={18} color={theme.colors.muted} />
          <Text style={styles.body}>3 Generaciones Unidas</Text>
        </View>
        {/**
         * Aqui ira un pressable
         */}
        <Text style={[styles.body, styles.actionText]}>Ver Estadisticas</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create((theme) => ({
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  // 4 quintas partes (4 de 5 unidades flex = 80%)
  welcomeMessageView: {
    flex: 4,
    gap: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  // 1 quinta parte (1 de 5 unidades flex = 20%)
  heartView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: theme.radius.full(ICON_SIZE),
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: theme.spacing(0.5),
    paddingHorizontal: theme.spacing(1.5),
    backgroundColor: '#9FD1B8',
    borderRadius: theme.radius.lg,
    fontSize: 12,
    fontFamily: theme.fonts.plusJakartaSans.bold,
    color: '#064E3B',
  },
  title: {
    fontFamily: theme.fonts.literata.bold,
    fontSize: 24,
    color: theme.colors.typography,
  },
  body: {
    fontFamily: theme.fonts.plusJakartaSans.regular,
    fontSize: 14,
    color: theme.colors.typography,
  },
  message: {
    fontSize: 18,
    color: theme.colors.muted,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
  },
  sectionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  actionText: {
    fontFamily: theme.fonts.plusJakartaSans.bold,
    color: theme.colors.primary,
  },
}));
