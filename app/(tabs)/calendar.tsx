import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const calendarMatrix = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

const classByDate: Record<number, { title: string; discipline: 'Yoga' | 'Hybrid' | 'Pilates'; time: string }[]> = {
  2: [
    { title: 'Sunset Flow', discipline: 'Yoga', time: '18:30' },
  ],
  4: [
    { title: 'Hybrid Inferno', discipline: 'Hybrid', time: '12:30' },
    { title: 'Pilates Align', discipline: 'Pilates', time: '19:00' },
  ],
  8: [
    { title: 'Hybrid Base', discipline: 'Hybrid', time: '07:00' },
  ],
  14: [
    { title: 'Power Vinyasa', discipline: 'Yoga', time: '06:30' },
    { title: 'Hybrid Boost', discipline: 'Hybrid', time: '13:00' },
  ],
  19: [
    { title: 'Reformer Sculpt', discipline: 'Pilates', time: '18:30' },
  ],
  22: [
    { title: 'Grounded Yin', discipline: 'Yoga', time: '20:00' },
  ],
};

const disciplineColors = {
  Yoga: '#FFC49B',
  Hybrid: Colors.light.tint,
  Pilates: '#FFE6D1',
};

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Clinic calendar</Text>
        <Text style={styles.subtitle}>Visualize every Yoga, Hybrid Training, and Pilates session this month.</Text>

        <View style={styles.calendarCard}>
          <View style={styles.monthHeader}>
            <View>
              <Text style={styles.monthLabel}>November 2024</Text>
              <Text style={styles.monthSubLabel}>Balanced program cadence</Text>
            </View>
            <View style={styles.legendRow}>
              {(['Yoga', 'Hybrid', 'Pilates'] as const).map((discipline) => (
                <View key={discipline} style={styles.legendItem}>
                  <View
                    style={[styles.legendDot, { backgroundColor: disciplineColors[discipline] }]} />
                  <Text style={styles.legendLabel}>{discipline}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.weekRow}>
            {weekDays.map((day) => (
              <Text key={day} style={styles.weekLabel}>
                {day}
              </Text>
            ))}
          </View>

          {calendarMatrix.map((week, index) => (
            <View key={index} style={styles.weekRow}>
              {week.map((date, columnIndex) => {
                if (!date) {
                  return <View key={`${index}-${columnIndex}`} style={styles.emptyCell} />;
                }
                const classes = classByDate[date] ?? [];
                const isToday = date === 14;
                return (
                  <View key={date} style={[styles.dayCell, isToday && styles.dayCellToday]}>
                    <View style={styles.dayHeader}>
                      <Text style={[styles.dayNumber, isToday && styles.dayNumberToday]}>{date}</Text>
                      {isToday && <Text style={styles.todayBadge}>Today</Text>}
                    </View>
                    <View style={styles.classesColumn}>
                      {classes.map((item) => (
                        <View
                          key={`${date}-${item.title}`}
                          style={[styles.classTag, { backgroundColor: disciplineColors[item.discipline] }]}
                        >
                          <Text style={styles.classTagTitle}>{item.title}</Text>
                          <Text style={styles.classTagTime}>{item.time}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
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
  calendarCard: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 24,
    gap: 18,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  monthLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F1F24',
  },
  monthSubLabel: {
    fontSize: 13,
    color: '#6C6C70',
    marginTop: 4,
  },
  legendRow: {
    flexDirection: 'row',
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6C6C70',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekLabel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: '#AA4F15',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  emptyCell: {
    flex: 1,
    padding: 12,
  },
  dayCell: {
    flex: 1,
    backgroundColor: '#FFF7EF',
    borderRadius: 18,
    marginHorizontal: 4,
    padding: 12,
    minHeight: 96,
  },
  dayCellToday: {
    borderWidth: 2,
    borderColor: Colors.light.tint,
    backgroundColor: '#FFE9D6',
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F1F24',
  },
  dayNumberToday: {
    color: Colors.light.tint,
  },
  todayBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.light.tint,
    textTransform: 'uppercase',
  },
  classesColumn: {
    marginTop: 8,
    gap: 8,
  },
  classTag: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  classTagTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1F1F24',
  },
  classTagTime: {
    fontSize: 12,
    color: '#6C6C70',
    marginTop: 2,
  },
});
