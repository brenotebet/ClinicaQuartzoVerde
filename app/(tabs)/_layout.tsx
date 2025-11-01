import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#BCEFE3',
          height: 84,
          paddingBottom: 16,
          paddingTop: 12,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.5,
        },
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="clock.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: 'Gerenciar',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="square.and.pencil" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Mais',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="line.3.horizontal" color={color} />,
        }}
      />
    </Tabs>
  );
}
