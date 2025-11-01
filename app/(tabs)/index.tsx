import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

const featuredClasses = [
  {
    title: 'Sunrise Flow Yoga',
    time: '06:30 • Studio Aura',
    focus: 'Mobility & Breathwork',
  },
  {
    title: 'Hybrid Ignite',
    time: '12:30 • Studio Pulse',
    focus: 'Row • Strength • Tread',
  },
  {
    title: 'Reformer Pilates Align',
    time: '18:00 • Studio Core',
    focus: 'Stability & Tone',
  },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroGreeting}>Olá, atleta!</Text>
          <Text style={styles.heroTitle}>Your balanced week is ready</Text>
          <Text style={styles.heroSubtitle}>Three disciplines. Endless energy.</Text>
          <View style={styles.heroPillsRow}>
            <View style={[styles.heroPill, styles.heroPillPrimary]}>
              <Text style={styles.heroPillText}>Yoga</Text>
            </View>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillTextDark}>Hybrid</Text>
            </View>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillTextDark}>Pilates</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured sessions</Text>
          <Text style={styles.sectionAction}>See all</Text>
        </View>
        <View style={styles.cardGrid}>
          {featuredClasses.map((item) => (
            <View key={item.title} style={styles.sessionCard}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionTime}>{item.time}</Text>
              <Text style={styles.sessionFocus}>{item.focus}</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '68%' }]} />
              </View>
              <Text style={styles.spotsLabel}>8 spots left</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Weekly split</Text>
          <Text style={styles.sectionAction}>Edit goal</Text>
        </View>
        <View style={styles.splitCard}>
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#FF9152' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Hybrid Training</Text>
              <Text style={styles.splitMeta}>2 of 4 booked</Text>
            </View>
            <Text style={styles.splitValue}>50%</Text>
          </View>
          <View style={styles.splitDivider} />
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#FFC49B' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Yoga</Text>
              <Text style={styles.splitMeta}>1 of 2 booked</Text>
            </View>
            <Text style={styles.splitValue}>50%</Text>
          </View>
          <View style={styles.splitDivider} />
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#FFE6D1' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Pilates</Text>
              <Text style={styles.splitMeta}>0 of 1 booked</Text>
            </View>
            <Text style={styles.splitValue}>0%</Text>
          </View>
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
  hero: {
    backgroundColor: Colors.light.tint,
    borderRadius: 28,
    padding: 28,
    gap: 8,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  heroGreeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 32,
  },
  heroSubtitle: {
    color: '#FFEEDA',
    fontSize: 14,
    marginTop: 4,
  },
  heroPillsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  heroPill: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#FFE1CA',
  },
  heroPillPrimary: {
    backgroundColor: '#fff',
  },
  heroPillText: {
    color: Colors.light.tint,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroPillTextDark: {
    color: '#AA4F15',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1F24',
  },
  sectionAction: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.light.tint,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardGrid: {
    gap: 16,
  },
  sessionCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 8,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F1F24',
  },
  sessionTime: {
    fontSize: 14,
    color: '#6C6C70',
  },
  sessionFocus: {
    fontSize: 14,
    color: '#AA4F15',
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#F1D9C6',
    borderRadius: 999,
    marginTop: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: Colors.light.tint,
  },
  spotsLabel: {
    fontSize: 13,
    color: '#6C6C70',
    marginTop: 8,
  },
  splitCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 18,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  splitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  splitDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  splitTextGroup: {
    flex: 1,
    marginLeft: 12,
  },
  splitLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F1F24',
  },
  splitMeta: {
    fontSize: 13,
    color: '#6C6C70',
    marginTop: 2,
  },
  splitValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.tint,
  },
  splitDivider: {
    height: 1,
    backgroundColor: '#F1D9C6',
  },
});
