/**
 * Updated brand colors for the Quartzo Verde Fitness Clinic app.
 */

import { Platform } from 'react-native';

const tintColorLight = '#FF6B00';
const tintColorDark = '#FF8F33';

export const Colors = {
  light: {
    text: '#1A1A1A',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#8E8E93',
    tabIconDefault: '#C7C7CC',
    tabIconSelected: tintColorLight,
    card: '#F9F9FB',
    muted: '#F2F2F7',
  },
  dark: {
    text: '#F5F5F7',
    background: '#0E0E10',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#3A3A3C',
    tabIconSelected: tintColorDark,
    card: '#1C1C1E',
    muted: '#2C2C2E',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
