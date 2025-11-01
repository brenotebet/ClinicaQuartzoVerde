import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

const managedClasses = [
  {
    name: 'Treino Híbrido Inferno',
    status: 'Confirmada',
    time: 'Hoje · 12:30',
    coach: 'Ricardo Lopes',
    location: 'Estúdio Pulse',
    actions: ['Reagendar', 'Adicionar convidado'],
  },
  {
    name: 'Pilates Reformer Align',
    status: 'Lista de espera',
    time: 'Amanhã · 18:00',
    coach: 'Helena Prado',
    location: 'Estúdio Core',
    actions: ['Ver status', 'Trocar aula'],
  },
  {
    name: 'Yoga Sunrise Flow',
    status: 'Reservada',
    time: 'Quinta · 06:30',
    coach: 'Camila Duarte',
    location: 'Estúdio Aura',
    actions: ['Cancelar', 'Convidar amigo'],
  },
];

const quickActions = [
  'Pausar plano ativo',
  'Atualizar meta de treinos',
  'Ajustar zonas de frequência',
  'Baixar histórico de visitas',
];

export default function ManageScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Gerencie sua agenda</Text>
        <Text style={styles.subtitle}>
          Mantenha o controle de cada sessão de yoga, treino híbrido e pilates.
        </Text>

        <View style={styles.alertCard}>
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>Vaga liberada!</Text>
          </View>
          <Text style={styles.alertTitle}>Pilates Reformer Align · Lista #2</Text>
          <Text style={styles.alertDescription}>
            Confirme em até 2 horas para garantir seu reformer antes de liberar a vaga.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Próximas reservas</Text>
          <Text style={styles.sectionAction}>Ver histórico</Text>
        </View>
        <View style={styles.card}>
          {managedClasses.map((item, index) => (
            <View key={item.name} style={styles.manageRow}>
              <View style={styles.manageHeader}>
                <View>
                  <Text style={styles.manageName}>{item.name}</Text>
                  <Text style={styles.manageMeta}>{item.time}</Text>
                  <Text style={styles.manageMeta}>{item.location}</Text>
                </View>
                <View style={[styles.statusTag, item.status === 'Lista de espera' && styles.statusWaitlist]}>
                  <Text
                    style={[
                      styles.statusText,
                      item.status === 'Lista de espera' && styles.statusTextDark,
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <Text style={styles.coachLabel}>Instrutor(a) {item.coach}</Text>
              <View style={styles.actionRow}>
                {item.actions.map((action) => (
                  <View key={action} style={styles.actionChip}>
                    <Text style={styles.actionChipText}>{action}</Text>
                  </View>
                ))}
              </View>
              {index < managedClasses.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ações rápidas</Text>
        </View>
        <View style={styles.quickActionGrid}>
          {quickActions.map((action) => (
            <View key={action} style={styles.quickActionCard}>
              <Text style={styles.quickActionText}>{action}</Text>
            </View>
          ))}
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
  alertCard: {
    backgroundColor: '#D7F5ED',
    borderRadius: 24,
    padding: 24,
    gap: 12,
  },
  alertBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  alertBadgeText: {
    color: Colors.light.tint,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#103831',
  },
  alertDescription: {
    fontSize: 14,
    color: '#3E7469',
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 24,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  manageRow: {
    gap: 16,
  },
  manageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  manageName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#103831',
  },
  manageMeta: {
    fontSize: 14,
    color: '#3E7469',
    marginTop: 2,
  },
  statusTag: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.light.tint,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  statusWaitlist: {
    backgroundColor: '#CDEFE5',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statusTextDark: {
    color: '#188B7A',
  },
  coachLabel: {
    fontSize: 13,
    color: '#188B7A',
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#CDEFE5',
  },
  actionChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F2F2B',
  },
  divider: {
    height: 1,
    backgroundColor: '#CDEFE5',
    marginTop: 16,
  },
  quickActionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    flexBasis: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#103831',
    lineHeight: 20,
  },
});
