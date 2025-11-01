import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

const featuredClasses = [
  {
    title: 'Yoga Amanhecer',
    time: '06:30 • Estúdio Aura',
    focus: 'Mobilidade e respiração',
  },
  {
    title: 'Treino Híbrido Ignite',
    time: '12:30 • Estúdio Pulse',
    focus: 'Remo • Força • Corrida',
  },
  {
    title: 'Pilates Reformer Align',
    time: '18:00 • Estúdio Core',
    focus: 'Estabilidade e tônus',
  },
];

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroGreeting}>Olá, atleta!</Text>
          <Text style={styles.heroTitle}>Sua semana equilibrada está pronta</Text>
          <Text style={styles.heroSubtitle}>Três disciplinas. Energia infinita.</Text>
          <View style={styles.heroPillsRow}>
            <View style={[styles.heroPill, styles.heroPillPrimary]}>
              <Text style={styles.heroPillText}>Yoga</Text>
            </View>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillTextDark}>Híbrido</Text>
            </View>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillTextDark}>Pilates</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sessões em destaque</Text>
          <Text style={styles.sectionAction}>Ver tudo</Text>
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
              <Text style={styles.spotsLabel}>Restam 8 vagas</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Divisão da semana</Text>
          <Text style={styles.sectionAction}>Editar meta</Text>
        </View>
        <View style={styles.splitCard}>
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#2FB89B' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Treino híbrido</Text>
              <Text style={styles.splitMeta}>2 de 4 agendados</Text>
            </View>
            <Text style={styles.splitValue}>50%</Text>
          </View>
          <View style={styles.splitDivider} />
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#6ADBC8' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Yoga</Text>
              <Text style={styles.splitMeta}>1 de 2 agendados</Text>
            </View>
            <Text style={styles.splitValue}>50%</Text>
          </View>
          <View style={styles.splitDivider} />
          <View style={styles.splitRow}>
            <View style={[styles.splitDot, { backgroundColor: '#CDEFE5' }]} />
            <View style={styles.splitTextGroup}>
              <Text style={styles.splitLabel}>Pilates</Text>
              <Text style={styles.splitMeta}>0 de 1 agendado</Text>
            </View>
            <Text style={styles.splitValue}>0%</Text>
          </View>
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
  hero: {
    backgroundColor: Colors.light.tint,
    borderRadius: 28,
    padding: 28,
    gap: 8,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.18,
    shadowRadius: 22,
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
    color: '#DAF7EF',
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
    backgroundColor: '#C9F1E6',
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
    color: '#0F2F2B',
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
    color: '#103831',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 8,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#103831',
  },
  sessionTime: {
    fontSize: 14,
    color: '#3E7469',
  },
  sessionFocus: {
    fontSize: 14,
    color: '#1A8F7A',
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#CDEFE5',
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
    color: '#3E7469',
    marginTop: 8,
  },
  splitCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 18,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
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
    color: '#103831',
  },
  splitMeta: {
    fontSize: 13,
    color: '#3E7469',
    marginTop: 2,
  },
  splitValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.tint,
  },
  splitDivider: {
    height: 1,
    backgroundColor: '#CDEFE5',
  },
});
