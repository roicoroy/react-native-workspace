import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SplashScreenComponent() {
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Hide the native splash screen
    SplashScreen.hideAsync();

    // Start fade in, delay, and fade out animation
    opacity.value = withSequence(
      withTiming(1, { duration: 1000 }),
      withDelay(
        1500,
        withTiming(0, { duration: 800 }, () => {
          // Navigate to home after fade out
          runOnJS(router.replace)('/home');
        }),
      ),
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <ThemedText type="title" style={styles.title}>
          Ricardo Bento
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Portfolio
        </ThemedText>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    opacity: 0.8,
  },
});
