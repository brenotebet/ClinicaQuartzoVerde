import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

const invoices = [
  {
    id: 'INV-2024-08',
    date: 'Nov 01, 2024',
    amount: 'R$ 389,00',
    status: 'Paid',
  },
  {
    id: 'INV-2024-07',
    date: 'Oct 01, 2024',
    amount: 'R$ 389,00',
    status: 'Paid',
  },
  {
    id: 'INV-2024-06',
    date: 'Sep 01, 2024',
    amount: 'R$ 389,00',
    status: 'Paid',
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Membership & billing</Text>
        <Text style={styles.subtitle}>Manage your clinic payments, add methods, and track invoices.</Text>

        <View style={styles.membershipCard}>
          <Text style={styles.membershipLabel}>Current plan</Text>
          <Text style={styles.membershipTitle}>Elite Hybrid Unlimited</Text>
          <Text style={styles.membershipMeta}>Unlimited hybrid sessions • 4 yoga drop-ins • 4 pilates reformer</Text>
          <View style={styles.membershipDivider} />
          <View style={styles.membershipFooter}>
            <View>
              <Text style={styles.membershipPrice}>R$ 389,00</Text>
              <Text style={styles.membershipCycle}>Monthly auto-renew • Next bill Dec 01</Text>
            </View>
            <View style={styles.membershipActions}>
              <Text style={styles.membershipAction}>Upgrade</Text>
              <Text style={styles.membershipAction}>Freeze</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment methods</Text>
          <Text style={styles.sectionAction}>Add new</Text>
        </View>
        <View style={styles.methodsCard}>
          {paymentMethods.map((method, index) => (
            <View key={method.last4} style={styles.methodRow}>
              <View>
                <Text style={styles.methodBrand}>{method.brand} •••• {method.last4}</Text>
                <Text style={styles.methodMeta}>Expires {method.exp}</Text>
              </View>
              <Text style={[styles.methodStatus, method.primary && styles.methodStatusPrimary]}>
                {method.primary ? 'Primary' : 'Backup'}
              </Text>
              {index < paymentMethods.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Invoice history</Text>
        </View>
        <View style={styles.invoiceCard}>
          {invoices.map((invoice, index) => (
            <View key={invoice.id} style={styles.invoiceRow}>
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
              {index < invoices.length - 1 && <View style={styles.divider} />}
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
  membershipCard: {
    backgroundColor: Colors.light.tint,
    borderRadius: 28,
    padding: 28,
    gap: 14,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.25,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
  },
  membershipLabel: {
    color: '#FFEEDA',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  membershipTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  membershipMeta: {
    color: '#FFD9B7',
    fontSize: 14,
    lineHeight: 20,
  },
  membershipDivider: {
    height: 1,
    backgroundColor: '#FF924E',
    opacity: 0.4,
    marginVertical: 4,
  },
  membershipFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  membershipPrice: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  membershipCycle: {
    color: '#FFEEDA',
    fontSize: 13,
    marginTop: 4,
  },
  membershipActions: {
    alignItems: 'flex-end',
    gap: 6,
  },
  membershipAction: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
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
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  methodsCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#FF6B00',
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
    color: '#1F1F24',
  },
  methodMeta: {
    fontSize: 13,
    color: '#6C6C70',
    marginTop: 2,
  },
  methodStatus: {
    fontSize: 12,
    fontWeight: '700',
    color: '#AA4F15',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  methodStatusPrimary: {
    color: Colors.light.tint,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3D6C0',
    marginTop: 16,
  },
  invoiceCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#FF6B00',
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
    color: '#1F1F24',
  },
  invoiceDate: {
    fontSize: 13,
    color: '#6C6C70',
    marginTop: 2,
  },
  invoiceRight: {
    alignItems: 'flex-end',
    gap: 8,
  },
  invoiceAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F1F24',
  },
  invoiceBadge: {
    backgroundColor: '#FFF4EA',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  invoiceBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#AA4F15',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
