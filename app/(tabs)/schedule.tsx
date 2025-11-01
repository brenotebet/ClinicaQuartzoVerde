import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

const filters = ['Todas', 'Yoga', 'Híbrido', 'Pilates'];

const schedule = [
  {
    day: 'Hoje',
    classes: [
      {
        name: 'Power Vinyasa',
        time: '07:00 - 07:50',
        coach: 'Camila Duarte',
        studio: 'Estúdio Aura',
        mood: 'Recarregar ao amanhecer',
      },
      {
        name: 'Treino Híbrido Inferno',
        time: '12:30 - 13:20',
        coach: 'Ricardo Lopes',
        studio: 'Estúdio Pulse',
        mood: 'Explosão de performance',
      },
      {
        name: 'Pilates Reformer Foundations',
        time: '18:15 - 19:05',
        coach: 'Helena Prado',
        studio: 'Estúdio Core',
        mood: 'Foco em alinhamento',
      },
    ],
  },
  {
    day: 'Amanhã',
    classes: [
      {
        name: 'Slow Flow + Respiração',
        time: '06:30 - 07:15',
        coach: 'Thais Rocha',
        studio: 'Estúdio Aura',
        mood: 'Energia centrada',
      },
      {
        name: 'Treino Híbrido Power Base',
        time: '13:00 - 13:50',
        coach: 'Daniel Costa',
        studio: 'Estúdio Pulse',
        mood: 'Força e resistência',
      },
      {
        name: 'Pilates Sculpt',
        time: '19:00 - 19:50',
        coach: 'Lais Figueiredo',
        studio: 'Estúdio Core',
        mood: 'Core e mobilidade',
      },
    ],
  },
];

export default function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Agende seu próximo treino</Text>
        <Text style={styles.subtitle}>
          Escolha a aula, garanta sua vaga e sinta a energia da clínica.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}>
          {filters.map((filter) => (
            <View
              key={filter}
              style={[styles.filterChip, filter === 'Todas' && styles.filterChipActive]}>
              <Text style={[styles.filterText, filter === 'Todas' && styles.filterTextActive]}>{filter}</Text>
            </View>
          ))}
        </ScrollView>

        {schedule.map((section) => (
          <View key={section.day} style={styles.section}>
            <Text style={styles.sectionLabel}>{section.day}</Text>
            <View style={styles.sectionCard}>
              {section.classes.map((item, index) => (
                <View key={item.name} style={styles.classRow}>
                  <View>
                    <Text style={styles.className}>{item.name}</Text>
                    <Text style={styles.classMeta}>{item.time}</Text>
                    <Text style={styles.classMeta}>{item.studio}</Text>
                    <Text style={styles.classMood}>{item.mood}</Text>
                  </View>
                  <View style={styles.coachBadge}>
                    <Text style={styles.coachLabel}>Instrutor(a)</Text>
                    <Text style={styles.coachName}>{item.coach}</Text>
                  </View>
                  {index < section.classes.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.muted,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    gap: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#103831',
  },
  subtitle: {
    fontSize: 15,
    color: '#3E7469',
    lineHeight: 22,
  },
  filterRow: {
    gap: 12,
  },
  filterChip: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#CDEFE5',
  },
  filterChipActive: {
    backgroundColor: Colors.light.tint,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#1C6F62',
  },
  filterTextActive: {
    color: '#fff',
  },
  section: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A8F7A',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    gap: 20,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  classRow: {
    gap: 12,
  },
  className: {
    fontSize: 18,
    fontWeight: '700',
    color: '#103831',
  },
  classMeta: {
    fontSize: 14,
    color: '#3E7469',
  },
  classMood: {
    fontSize: 13,
    color: '#1A8F7A',
    marginTop: 4,
    fontWeight: '600',
  },
  coachBadge: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#DAF7F0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  coachLabel: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#188B7A',
    fontWeight: '700',
  },
  coachName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#103831',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#CDEFE5',
    marginTop: 16,
  },
});
