/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useTheme as useCustomTheme } from '@/providers/ThemeProvider';

export function useTheme() {
  const { theme } = useCustomTheme();

  return Colors[theme];
}
