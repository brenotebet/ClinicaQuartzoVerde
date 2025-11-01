import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

const invoices = [
  {
    id: 'FAT-2024-08',
    date: '01 nov 2024',
    amount: 'R$ 389,00',
    status: 'Pago',
  },
  {
    id: 'FAT-2024-07',
    date: '01 out 2024',
    amount: 'R$ 389,00',
    status: 'Pago',
  },
  {
    id: 'FAT-2024-06',
    date: '01 set 2024',
    amount: 'R$ 389,00',
    status: 'Pago',
  },
];

const paymentMethods = [
  {
    brand: 'Visa',
    last4: '9824',
    exp: '08/27',
    primary: true,
  },
  {
    brand: 'Mastercard',
    last4: '4412',
    exp: '02/26',
    primary: false,
  },
];

export default function PaymentsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Assinatura e cobrança</Text>
        <Text style={styles.subtitle}>
          Administre suas formas de pagamento, ajuste o plano e acompanhe recibos recentes da
          clínica.
        </Text>

        <View style={styles.membershipCard}>
          <Text style={styles.membershipLabel}>Plano atual</Text>
          <Text style={styles.membershipTitle}>Equilíbrio Total Ilimitado</Text>
          <Text style={styles.membershipMeta}>
            Sessões híbridas ilimitadas • 4 aulas de yoga avulsas • 4 pilates reformer
          </Text>
          <View style={styles.membershipDivider} />
          <View style={styles.membershipFooter}>
            <View>
              <Text style={styles.membershipPrice}>R$ 389,00</Text>
              <Text style={styles.membershipCycle}>
                Renovação mensal automática • Próxima cobrança 01 dez 2024
              </Text>
            </View>
            <View style={styles.membershipActions}>
              <View style={styles.membershipPill}>
                <Text style={styles.membershipPillText}>Alterar plano</Text>
              </View>
              <View style={styles.membershipPillSecondary}>
                <Text style={styles.membershipPillSecondaryText}>Pausar ciclo</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Formas de pagamento</Text>
          <Text style={styles.sectionAction}>Adicionar novo</Text>
        </View>
        <View style={styles.methodsCard}>
          {paymentMethods.map((method, index) => (
            <View key={method.last4}>
              <View style={styles.methodRow}>
                <View>
                  <Text style={styles.methodBrand}>{method.brand} •••• {method.last4}</Text>
                  <Text style={styles.methodMeta}>Vencimento {method.exp}</Text>
                </View>
                <View style={[styles.methodBadge, method.primary && styles.methodBadgePrimary]}>
                  <Text
                    style={[styles.methodBadgeText, method.primary && styles.methodBadgeTextPrimary]}>
                    {method.primary ? 'Principal' : 'Reserva'}
                  </Text>
                </View>
              </View>
              {index < paymentMethods.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Histórico de faturas</Text>
        </View>
        <View style={styles.invoiceCard}>
          {invoices.map((invoice, index) => (
            <View key={invoice.id}>
              <View style={styles.invoiceRow}>
                <View>
                  <Text style={styles.invoiceId}>{invoice.id}</Text>
                  <Text style={styles.invoiceDate}>{invoice.date}</Text>
                </View>
                <View style={styles.invoiceRight}>
                  <Text style={styles.invoiceAmount}>{invoice.amount}</Text>
                  <View style={styles.invoiceBadge}>
                    <Text style={styles.invoiceBadgeText}>{invoice.status}</Text>
                  </View>
                </View>
              </View>
              {index < invoices.length - 1 && <View style={styles.divider} />}
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
  membershipCard: {
    backgroundColor: Colors.light.card,
    borderRadius: 28,
    padding: 28,
    gap: 18,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  membershipLabel: {
    color: Colors.light.tint,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  membershipTitle: {
    color: '#103831',
    fontSize: 22,
    fontWeight: '800',
  },
  membershipMeta: {
    color: '#3E7469',
    fontSize: 14,
    lineHeight: 20,
  },
  membershipDivider: {
    height: 1,
    backgroundColor: '#D6F0EA',
  },
  membershipFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  membershipPrice: {
    color: '#0F2F2B',
    fontSize: 24,
    fontWeight: '800',
  },
  membershipCycle: {
    color: '#3E7469',
    fontSize: 13,
    marginTop: 4,
  },
  membershipActions: {
    alignItems: 'flex-end',
    gap: 10,
  },
  membershipPill: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: Colors.light.tint,
  },
  membershipPillText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  membershipPillSecondary: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: '#CDEFE5',
  },
  membershipPillSecondaryText: {
    color: '#0F2F2B',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
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
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  methodsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  methodBrand: {
    fontSize: 16,
    fontWeight: '700',
    color: '#103831',
  },
  methodMeta: {
    fontSize: 13,
    color: '#3E7469',
    marginTop: 2,
  },
  methodBadge: {
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#E1F7F1',
  },
  methodBadgePrimary: {
    backgroundColor: Colors.light.tint,
  },
  methodBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A6F60',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  methodBadgeTextPrimary: {
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#D6F0EA',
    marginTop: 18,
  },
  invoiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  invoiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invoiceId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#103831',
  },
  invoiceDate: {
    fontSize: 13,
    color: '#3E7469',
    marginTop: 2,
  },
  invoiceRight: {
    alignItems: 'flex-end',
    gap: 8,
  },
  invoiceAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#103831',
  },
  invoiceBadge: {
    backgroundColor: '#E1F7F1',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  invoiceBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.light.tint,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
