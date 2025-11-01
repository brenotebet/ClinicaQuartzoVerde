import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

const filters = ['All', 'Yoga', 'Hybrid', 'Pilates'];

const schedule = [
  {
    day: 'Today',
    classes: [
      {
        name: 'Power Vinyasa',
        time: '07:00 - 07:50',
        coach: 'Camila Duarte',
        studio: 'Studio Aura',
        mood: 'Sunrise reset',
      },
      {
        name: 'Hybrid Inferno',
        time: '12:30 - 13:20',
        coach: 'Ricardo Lopes',
        studio: 'Studio Pulse',
        mood: 'Performance push',
      },
      {
        name: 'Reformer Foundations',
        time: '18:15 - 19:05',
        coach: 'Helena Prado',
        studio: 'Studio Core',
        mood: 'Alignment focus',
      },
    ],
  },
  {
    day: 'Tomorrow',
    classes: [
      {
        name: 'Slow Flow + Breath',
        time: '06:30 - 07:15',
        coach: 'Thais Rocha',
        studio: 'Studio Aura',
        mood: 'Grounded energy',
      },
      {
        name: 'Hybrid Power Base',
        time: '13:00 - 13:50',
        coach: 'Daniel Costa',
        studio: 'Studio Pulse',
        mood: 'Strength endurance',
      },
      {
        name: 'Pilates Sculpt',
        time: '19:00 - 19:50',
        coach: 'Lais Figueiredo',
        studio: 'Studio Core',
        mood: 'Core + mobility',
      },
    ],
  },
];

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Book your next burn</Text>
        <Text style={styles.subtitle}>Pick a class, lock in your spot, and feel the clinic energy.</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}>
          {filters.map((filter) => (
            <View
              key={filter}
              style={[styles.filterChip, filter === 'All' && styles.filterChipActive]}>
              <Text style={[styles.filterText, filter === 'All' && styles.filterTextActive]}>{filter}</Text>
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
                    <Text style={styles.coachLabel}>Coach</Text>
                    <Text style={styles.coachName}>{item.coach}</Text>
                  </View>
                  {index < section.classes.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.muted,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F1F24',
  },
  subtitle: {
    fontSize: 15,
    color: '#5C5C63',
    lineHeight: 22,
  },
  filterRow: {
    gap: 12,
  },
  filterChip: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#F5D9C4',
  },
  filterChipActive: {
    backgroundColor: Colors.light.tint,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#A35B28',
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
    color: '#6C6C70',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    gap: 20,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  classRow: {
    gap: 12,
  },
  className: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F1F24',
  },
  classMeta: {
    fontSize: 14,
    color: '#6C6C70',
  },
  classMood: {
    fontSize: 13,
    color: '#AA4F15',
    marginTop: 4,
    fontWeight: '600',
  },
  coachBadge: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#FFF4EA',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  coachLabel: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#AA4F15',
    fontWeight: '700',
  },
  coachName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F1F24',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3D6C0',
    marginTop: 16,
  },
});
