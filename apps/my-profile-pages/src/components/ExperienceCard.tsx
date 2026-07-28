import { ThemedText } from './themed-text';
import { View } from 'react-native';

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <View className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm mb-4">
      <ThemedText className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-100">
        {experience.role}
      </ThemedText>
      <View className="flex-row justify-between items-center mb-3 flex-wrap">
        <ThemedText className="text-base font-medium text-blue-600 dark:text-blue-400">
          {experience.company}
        </ThemedText>
        <ThemedText className="text-sm text-zinc-500 dark:text-zinc-400">
          {experience.period}
        </ThemedText>
      </View>

      <View className="gap-1.5">
        {experience.description.map((item, index) => (
          <View key={index} className="flex-row items-start pr-2">
            <ThemedText className="text-zinc-400 mr-2 mt-0.5">•</ThemedText>
            <ThemedText className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item}
            </ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}
