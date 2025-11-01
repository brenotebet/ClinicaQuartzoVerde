import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

type Disciplina = 'Yoga' | 'Híbrido' | 'Pilates';

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const calendarMatrix = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

const classByDate: Record<number, { title: string; discipline: Disciplina; time: string }[]> = {
  2: [
    { title: 'Yoga Sunset Flow', discipline: 'Yoga', time: '18:30' },
  ],
  4: [
    { title: 'Treino Híbrido Inferno', discipline: 'Híbrido', time: '12:30' },
    { title: 'Pilates Align', discipline: 'Pilates', time: '19:00' },
  ],
  8: [
    { title: 'Treino Híbrido Base', discipline: 'Híbrido', time: '07:00' },
  ],
  14: [
    { title: 'Power Vinyasa', discipline: 'Yoga', time: '06:30' },
    { title: 'Treino Híbrido Boost', discipline: 'Híbrido', time: '13:00' },
  ],
  19: [
    { title: 'Pilates Reformer Sculpt', discipline: 'Pilates', time: '18:30' },
  ],
  22: [
    { title: 'Yoga Grounded Yin', discipline: 'Yoga', time: '20:00' },
  ],
};

const disciplineColors: Record<Disciplina, string> = {
  Yoga: '#6BD9C7',
  'Híbrido': Colors.light.tint,
  Pilates: '#BCEFE3',
};

const monthLabel = 'Novembro 2024';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<number | null>(14);
  const todayDate = 14;

  const selectedClasses = useMemo(() => {
    if (!selectedDate) return [];
    const items = classByDate[selectedDate] ?? [];
    return [...items].sort((a, b) => a.time.localeCompare(b.time));
  }, [selectedDate]);

  const selectedDateLabel = selectedDate ? `${selectedDate} de novembro` : 'este dia';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Calendário da clínica</Text>
        <Text style={styles.subtitle}>
          Visualize todas as sessões de Yoga, Treino Híbrido e Pilates deste mês.
        </Text>

        <View style={styles.calendarCard}>
          <View style={styles.monthHeader}>
            <View>
              <Text style={styles.monthLabel}>{monthLabel}</Text>
              <Text style={styles.monthSubLabel}>Cadência equilibrada do programa</Text>
            </View>
            <View style={styles.legendRow}>
              {(Object.keys(disciplineColors) as Disciplina[]).map((discipline) => (
                <View key={discipline} style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: disciplineColors[discipline] }]} />
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
                const isToday = date === todayDate;
                const isSelected = date === selectedDate;

                return (
                  <Pressable
                    key={date}
                    style={[styles.dayCell, isSelected && styles.dayCellSelected, isToday && styles.dayCellToday]}
                    onPress={() => setSelectedDate(date)}>
                    <Text
                      style={[
                        styles.dayNumber,
                        isToday && styles.dayNumberToday,
                        isSelected && styles.dayNumberSelected,
                      ]}>
                      {date}
                    </Text>
                    <View style={styles.dotRow}>
                      {classes.map((item) => (
                        <View
                          key={`${date}-${item.title}`}
                          style={[styles.dayDot, { backgroundColor: disciplineColors[item.discipline] }]}
                        />
                      ))}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          ))}
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Aulas em {selectedDateLabel}</Text>
          {selectedClasses.length > 0 ? (
            <View style={styles.detailsList}>
              {selectedClasses.map((item) => (
                <View key={`${selectedDate}-${item.title}`} style={styles.classDetailRow}>
                  <View style={[styles.classBadge, { backgroundColor: disciplineColors[item.discipline] }]} />
                  <View style={styles.classInfo}>
                    <Text style={styles.classTitle}>{item.title}</Text>
                    <Text style={styles.classMeta}>
                      {item.discipline} • {item.time}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>Nenhuma aula agendada para este dia.</Text>
          )}
        </View>
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
  calendarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    gap: 18,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.12,
    shadowRadius: 22,
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
    color: '#103831',
  },
  monthSubLabel: {
    fontSize: 13,
    color: '#3E7469',
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
    color: '#3E7469',
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
    color: '#188B7A',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  emptyCell: {
    flex: 1,
    padding: 12,
  },
  dayCell: {
    flex: 1,
    backgroundColor: '#E0F7F1',
    borderRadius: 16,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 8,
  },
  dayCellSelected: {
    borderWidth: 2,
    borderColor: Colors.light.tint,
    backgroundColor: '#C0EEE3',
  },
  dayCellToday: {
    shadowColor: Colors.light.tint,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#103831',
  },
  dayNumberToday: {
    color: Colors.light.tint,
  },
  dayNumberSelected: {
    color: '#0F2F2B',
  },
  dotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
  dayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 16,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#103831',
  },
  detailsList: {
    gap: 16,
  },
  classDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  classBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  classInfo: {
    flex: 1,
    gap: 4,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#103831',
  },
  classMeta: {
    fontSize: 13,
    color: '#3E7469',
  },
  emptyText: {
    fontSize: 14,
    color: '#3E7469',
  },
});
