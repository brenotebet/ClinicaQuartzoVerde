import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

const profileShortcuts = [
  {
    title: 'Editar dados pessoais',
    description: 'Atualize nome, contato e preferências para manter seu cadastro atual.',
  },
  {
    title: 'Formas de pagamento',
    description: 'Gerencie cartões salvos, pix recorrente e notas fiscais.',
  },
  {
    title: 'Histórico de cobranças',
    description: 'Acompanhe mensalidades, pacotes avulsos e recibos anteriores.',
  },
];

const supportOptions = [
  'Plano de treinos personalizados',
  'Preferências de notificações',
  'Suporte e WhatsApp da equipe',
  'Políticas da clínica e LGPD',
];

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Mais opções</Text>
          <Text style={styles.subtitle}>
            Centralize as configurações da sua experiência Quartzo Verde e mantenha tudo sob
            controle em um só lugar.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sua conta</Text>
          <Text style={styles.cardSubtitle}>
            Ajuste rapidamente informações e preferências importantes.
          </Text>

          <View style={styles.list}>
            {profileShortcuts.map((item) => (
              <View key={item.title} style={styles.listItem}>
                <View style={styles.listBullet} />
                <View style={styles.listContent}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ferramentas rápidas</Text>
          <View style={styles.grid}>
            {supportOptions.map((option) => (
              <View key={option} style={styles.gridItem}>
                <Text style={styles.gridText}>{option}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Precisa de ajuda agora?</Text>
          <Text style={styles.footerText}>
            Fale com a equipe da clínica pelo WhatsApp (11) 90000-0000 ou envie um e-mail para
            atendimento@quartzoverde.com.
          </Text>
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
  header: {
    gap: 12,
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
  card: {
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
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1F24',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6C6C70',
    lineHeight: 20,
  },
  list: {
    gap: 16,
  },
  listItem: {
    flexDirection: 'row',
    gap: 16,
  },
  listBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.tint,
    marginTop: 8,
  },
  listContent: {
    flex: 1,
    gap: 4,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F1F24',
  },
  listDescription: {
    fontSize: 13,
    color: '#6C6C70',
    lineHeight: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridItem: {
    flexBasis: '48%',
    backgroundColor: '#FFF4EA',
    borderRadius: 18,
    padding: 18,
  },
  gridText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F1F24',
    lineHeight: 20,
  },
  footerCard: {
    backgroundColor: '#FFE9D6',
    borderRadius: 24,
    padding: 24,
    gap: 12,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F1F24',
  },
  footerText: {
    fontSize: 14,
    color: '#6C6C70',
    lineHeight: 20,
  },
});
