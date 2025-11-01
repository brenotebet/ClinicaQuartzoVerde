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
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
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
                <TextInput placeholder="Ana" placeholderTextColor="#8FC6BB" style={styles.input} />
              </View>
              <View style={styles.fieldHalf}>
                <Text style={styles.fieldLabel}>Sobrenome</Text>
                <TextInput placeholder="Silva" placeholderTextColor="#8FC6BB" style={styles.input} />
              </View>
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>E-mail</Text>
              <TextInput
                placeholder="voce@exemplo.com"
                placeholderTextColor="#8FC6BB"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Celular</Text>
              <TextInput placeholder="(11) 99999-9999" placeholderTextColor="#8FC6BB" style={styles.input} />
            </View>
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Senha</Text>
              <TextInput placeholder="Crie uma senha" placeholderTextColor="#8FC6BB" secureTextEntry style={styles.input} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    paddingTop: 48,
    paddingBottom: 36,
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
    color: '#3E7469',
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
    backgroundColor: '#CDEFE5',
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
    color: '#1A8F7A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  progressConnector: {
    width: 16,
    height: 2,
    backgroundColor: '#BCEFE3',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    gap: 20,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.12,
    shadowRadius: 22,
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
    color: '#103831',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#CDEFE5',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#103831',
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
    color: '#3E7469',
    fontSize: 14,
  },
  linkBold: {
    color: Colors.light.tint,
    fontSize: 14,
    fontWeight: '700',
  },
});
