import '../../global.css';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'nativewind';

SplashScreen.preventAutoHideAsync();

import { ThemeProvider as CustomThemeProvider } from '../providers/ThemeProvider';
import ThemeToggle from '../components/ThemeToggle';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <CustomThemeProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaView className="flex-1 bg-background">
          <View className="flex-row justify-end p-4 bg-background">
            <ThemeToggle />
          </View>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'transparent' },
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="home" />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </CustomThemeProvider>
  );
}
