import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Colors } from '@/constants/theme';

const profileShortcuts = [
  {
    title: 'Editar dados pessoais',
    description: 'Atualize nome, contato e preferências para manter seu cadastro atual.',
  },
  {
    title: 'Formas de pagamento',
    description: 'Gerencie cartões salvos, pix recorrente e notas fiscais.',
    href: '/(tabs)/more/payments',
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

const billingHighlights = [
  { label: 'Plano ativo', value: 'Assinatura Equilíbrio • ilimitado' },
  { label: 'Próxima cobrança', value: '12 de novembro • R$420,00' },
  { label: 'Forma de pagamento', value: 'Visa •••• 2048 • Parcelamento mensal' },
];

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
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
            {profileShortcuts.map((item) => {
              const content = (
                <>
                  <View style={styles.listBullet} />
                  <View style={styles.listContent}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.listDescription}>{item.description}</Text>
                  </View>
                </>
              );

              if (item.href) {
                return (
                  <Link key={item.title} href={item.href} asChild>
                    <Pressable
                      style={({ pressed }) => [
                        styles.listItem,
                        styles.listItemInteractive,
                        pressed && styles.listItemPressed,
                      ]}>
                      {content}
                    </Pressable>
                  </Link>
                );
              }

              return (
                <View key={item.title} style={styles.listItem}>
                  {content}
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pagamentos e faturamento</Text>
          <Text style={styles.cardSubtitle}>
            Consulte a assinatura atual, atualize cobranças e mantenha os comprovantes salvos.
          </Text>

          <View style={styles.list}>
            {billingHighlights.map((item) => (
              <View key={item.label} style={styles.billingRow}>
                <Text style={styles.billingLabel}>{item.label}</Text>
                <Text style={styles.billingValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.billingActions}>
            <View style={styles.billingPill}>
              <Text style={styles.billingPillText}>Atualizar cartão</Text>
            </View>
            <View style={styles.billingPillSecondary}>
              <Text style={styles.billingPillTextSecondary}>Baixar última nota</Text>
            </View>
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
  header: {
    gap: 12,
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 18,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#103831',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#3E7469',
    lineHeight: 20,
  },
  list: {
    gap: 16,
  },
  listItem: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  listItemInteractive: {
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  listItemPressed: {
    backgroundColor: '#D7F5ED',
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
    color: '#103831',
  },
  listDescription: {
    fontSize: 13,
    color: '#3E7469',
    lineHeight: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridItem: {
    flexBasis: '48%',
    backgroundColor: '#D7F5ED',
    borderRadius: 18,
    padding: 18,
  },
  gridText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#103831',
    lineHeight: 20,
  },
  billingRow: {
    gap: 4,
  },
  billingLabel: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#1A8F7A',
  },
  billingValue: {
    fontSize: 14,
    color: '#103831',
  },
  billingActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  billingPill: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: Colors.light.tint,
  },
  billingPillText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  billingPillSecondary: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#CDEFE5',
  },
  billingPillTextSecondary: {
    color: '#0F2F2B',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  footerCard: {
    backgroundColor: '#CDEFE5',
    borderRadius: 24,
    padding: 24,
    gap: 12,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#103831',
  },
  footerText: {
    fontSize: 14,
    color: '#3E7469',
    lineHeight: 20,
  },
});
