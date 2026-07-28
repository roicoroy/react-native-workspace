import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExperienceCard } from '@/components/ExperienceCard';
import { ThemedText } from '@/components/themed-text';
import { CV_DATA } from '@/data/cv';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-50 dark:bg-zinc-950" edges={['top']}>
      <ScrollView contentContainerClassName="p-6 w-full max-w-3xl self-center pb-12">
        
        {/* Header Section */}
        <View className="items-center mb-12 mt-6">
          <ThemedText className="text-4xl text-center mb-2 font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {CV_DATA.header.name}
          </ThemedText>
          <ThemedText className="text-blue-600 dark:text-blue-400 mb-4 text-lg font-medium">
            {CV_DATA.header.title}
          </ThemedText>
          <View className="flex-row flex-wrap justify-center gap-x-2 gap-y-1 opacity-80">
            <ThemedText className="text-sm text-zinc-600 dark:text-zinc-400">{CV_DATA.header.location}</ThemedText>
            <ThemedText className="text-sm text-zinc-400">•</ThemedText>
            <ThemedText className="text-sm text-zinc-600 dark:text-zinc-400">{CV_DATA.header.email}</ThemedText>
            <ThemedText className="text-sm text-zinc-400">•</ThemedText>
            <ThemedText className="text-sm text-zinc-600 dark:text-zinc-400">{CV_DATA.header.linkedin}</ThemedText>
          </View>
        </View>

        {/* Profile Section */}
        <View className="mb-10">
          <ThemedText className="mb-4 uppercase tracking-widest text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            Profile
          </ThemedText>
          <ThemedText className="leading-relaxed text-base text-zinc-600 dark:text-zinc-300">
            {CV_DATA.profile}
          </ThemedText>
        </View>

        {/* Experience Section */}
        <View className="mb-10">
          <ThemedText className="mb-4 uppercase tracking-widest text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            Experience
          </ThemedText>
          {CV_DATA.experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </View>

        {/* Skills Section */}
        <View className="mb-10">
          <ThemedText className="mb-4 uppercase tracking-widest text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            Skills
          </ThemedText>
          <View className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex-row flex-wrap gap-2">
            {CV_DATA.skills.map((skill, index) => (
              <View key={index} className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full">
                <ThemedText className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {skill}
                </ThemedText>
              </View>
            ))}
          </View>
        </View>

        {/* Projects Section */}
        <View className="mb-10">
          <ThemedText className="mb-4 uppercase tracking-widest text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            Projects
          </ThemedText>
          {CV_DATA.projects.map((project) => (
            <View
              key={project.id}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm mb-4"
            >
              <ThemedText className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                {project.name}
              </ThemedText>
              <ThemedText className="leading-relaxed text-base text-zinc-600 dark:text-zinc-300">
                {project.description}
              </ThemedText>
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View className="mb-10">
          <ThemedText className="mb-4 uppercase tracking-widest text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            Education
          </ThemedText>
          <View className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            {CV_DATA.education.map((edu, index) => (
              <View key={edu.id} className={index !== CV_DATA.education.length - 1 ? "mb-6" : ""}>
                <ThemedText className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </ThemedText>
                <ThemedText className="text-base font-medium text-blue-600 dark:text-blue-400 my-1">
                  {edu.school}
                </ThemedText>
                <ThemedText className="text-sm text-zinc-500 dark:text-zinc-400">
                  {edu.year}
                </ThemedText>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
