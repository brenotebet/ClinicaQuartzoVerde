import { Stack } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/theme';

export default function MoreStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="payments"
        options={{
          title: 'Pagamentos',
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerShadowVisible: false,
          headerTintColor: Colors.light.tint,
        }}
      />
    </Stack>
  );
}
