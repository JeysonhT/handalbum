import { StyleSheet } from 'react-native-unistyles';

export const fonts = {
  literata: {
    regular: 'Literata-Regular',
    bold: 'Literata-Bold',
  },
  plusJakartaSans: {
    regular: 'PlusJakartaSans-Regular',
    bold: 'PlusJakartaSans-Bold',
  },
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  full: (size: number) => size / 2,
} as const;

export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F4F4F5',
    border: '#E4E4E7',
    primary: '#9a442d',
    secondary: '#386753',
    tertiary: '#765a28',
    primaryForeground: '#FFFFFF',
    typography: '#09090B',
    muted: '#71717A',
  },
  fonts,
  spacing: (multiplier = 1) => multiplier * 4,
  radius,
} as const;

export const darkTheme = {
  colors: {
    background: '#09090B',
    surface: '#18181B',
    border: '#27272A',
    primary: '#9a442d',
    secondary: '#386753',
    tertiary: '#765a28',
    primaryForeground: '#09090B',
    typography: '#FAFAFA',
    muted: '#A1A1AA',
  },
  fonts,
  spacing: (multiplier = 1) => multiplier * 4,
  radius,
} as const;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  breakpoints,
});

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
