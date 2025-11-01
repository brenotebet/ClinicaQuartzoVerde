import { Link, useRouter } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Colors } from '@/constants/theme';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.brandTitle}>Crie sua assinatura na clínica</Text>
          <Text style={styles.subtitle}>
            Monte um plano equilibrado com rotações de Yoga, Treino Híbrido e Pilates.
          </Text>

          <View style={styles.progressRow}>
            <View style={[styles.progressStep, styles.progressStepActive]}>
              <Text style={styles.progressLabel}>Conta</Text>
            </View>
            <View style={styles.progressConnector} />
            <View style={styles.progressStep}>
              <Text style={styles.progressLabelInactive}>Metas</Text>
            </View>
            <View style={styles.progressConnector} />
            <View style={styles.progressStep}>
              <Text style={styles.progressLabelInactive}>Pagamento</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.fieldRow}>
              <View style={styles.fieldHalf}>
                <Text style={styles.fieldLabel}>Nome</Text>
                <TextInput placeholder="Ana" placeholderTextColor="#B0B0B5" style={styles.input} />
              </View>
              <View style={styles.fieldHalf}>
                <Text style={styles.fieldLabel}>Sobrenome</Text>
                <TextInput placeholder="Silva" placeholderTextColor="#B0B0B5" style={styles.input} />
              </View>
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>E-mail</Text>
              <TextInput
                placeholder="voce@exemplo.com"
                placeholderTextColor="#B0B0B5"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Celular</Text>
              <TextInput placeholder="(11) 99999-9999" placeholderTextColor="#B0B0B5" style={styles.input} />
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Senha</Text>
              <TextInput placeholder="Crie uma senha" placeholderTextColor="#B0B0B5" secureTextEntry style={styles.input} />
            </View>
            <Pressable style={styles.primaryButton} onPress={() => router.replace('/(tabs)')}>
              <Text style={styles.primaryButtonText}>Continuar</Text>
            </Pressable>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Já tem cadastro?</Text>
            <Link href="/login" asChild>
              <Pressable>
                <Text style={styles.linkBold}>Faça login</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#FFF7EF',
  },
  content: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 24,
    gap: 24,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.light.tint,
  },
  subtitle: {
    fontSize: 15,
    color: '#5C5C63',
    lineHeight: 22,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressStep: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#FFE1CA',
  },
  progressStepActive: {
    backgroundColor: Colors.light.tint,
  },
  progressLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  progressLabelInactive: {
    color: '#B35C2E',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  progressConnector: {
    width: 16,
    height: 2,
    backgroundColor: '#FFC49B',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#FF7A1A',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 4,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 16,
  },
  fieldHalf: {
    flex: 1,
    gap: 8,
  },
  fieldGroup: {
    gap: 8,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F1F24',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#FDFDFE',
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: Colors.light.tint,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  footerText: {
    color: '#6C6C70',
    fontSize: 14,
  },
  linkBold: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: '700',
  },
});
