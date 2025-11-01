/**
 * Updated brand colors for the Quartzo Verde Fitness Clinic app.
 */

import { Platform } from 'react-native';

const tintColorLight = '#2FB89B';
const tintColorDark = '#44D5B8';

export const Colors = {
  light: {
    text: '#0F2F2B',
    background: '#F4FCFA',
    tint: tintColorLight,
    icon: '#5FA89A',
    tabIconDefault: '#9FD7C9',
    tabIconSelected: tintColorLight,
    card: '#FFFFFF',
    muted: '#E3F6F1',
  },
  dark: {
    text: '#E9FFFA',
    background: '#061914',
    tint: tintColorDark,
    icon: '#84E7D0',
    tabIconDefault: '#21443C',
    tabIconSelected: tintColorDark,
    card: '#0F2B25',
    muted: '#143C34',
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
