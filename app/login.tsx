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

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.brandRow}>
            <View>
              <Text style={styles.brandTitle}>Quartzo Verde</Text>
              <Text style={styles.brandSubtitle}>Clínica Fitness</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Mente • Corpo • Potência</Text>
            </View>
          </View>

          <View style={styles.heroWrapper}>
            <View style={styles.heroOrbLarge} />
            <View style={styles.heroOrbSmall} />
            <Text style={styles.heroHeadline}>Mais forte a cada sessão</Text>
            <Text style={styles.heroTagline}>Yoga · Treino Híbrido · Pilates</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Bem-vindo(a) de volta</Text>
            <Text style={styles.cardSubtitle}>
              Entre para reservar experiências imersivas alinhadas ao seu ritmo de treino.
            </Text>
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
              <Text style={styles.fieldLabel}>Senha</Text>
              <TextInput placeholder="••••••••" placeholderTextColor="#8FC6BB" secureTextEntry style={styles.input} />
            </View>
            <Pressable style={styles.primaryButton} onPress={() => router.replace('/(tabs)')}>
              <Text style={styles.primaryButtonText}>Entrar</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.link}>Esqueceu a senha?</Text>
            </Pressable>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Novo na Quartzo Verde?</Text>
            <Link href="/signup" asChild>
              <Pressable>
                <Text style={styles.linkBold}>Crie uma conta</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.light.tint,
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    color: '#103831',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  badge: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  heroWrapper: {
    marginTop: 40,
    borderRadius: 28,
    padding: 28,
    backgroundColor: '#D7F5ED',
    overflow: 'hidden',
  },
  heroOrbLarge: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#A8E8DB',
    top: -100,
    right: -80,
    opacity: 0.4,
  },
  heroOrbSmall: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.light.tint,
    bottom: -40,
    left: -40,
    opacity: 0.18,
  },
  heroHeadline: {
    fontSize: 26,
    fontWeight: '800',
    color: '#103831',
  },
  heroTagline: {
    fontSize: 14,
    color: '#3E7469',
    marginTop: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginTop: 32,
    gap: 16,
    shadowColor: '#1AA18C',
    shadowOpacity: 0.12,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#103831',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#3E7469',
    lineHeight: 20,
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
    marginTop: 12,
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
  link: {
    marginTop: 8,
    color: Colors.light.tint,
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
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
