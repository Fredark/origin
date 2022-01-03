import { DefaultTheme } from 'styled-components';
import { rem } from './tools';

export const theme: DefaultTheme = {
  colors: {
    blueGray10: '#F4F8FA',
    blueGray50: '#E9EEF2',
    blueGray100: '#CBD5DC',
    blueGray300: '#8A9CA9',
    blueGray400: '#708797',
    blueGray600: '#4D6475',
    blueGray900: '#1E2A32',
    brandColorPrimary: '#1B31A8',
    brandColorSecondary: '#0079FF',
    neutralWhite: '#F4F8FA',
  },
  fonts: {
    primary: '"Work Sans", sans-serif',
    secondary: '"Rubik", sans-serif;',
  },
  shadows: {
    level1: `0 0 ${rem(5)} 0 rgba(0, 0, 0, .08)`,
    level4: `0 ${rem(16)} ${rem(32)} rgba(30, 42, 50, 0.08)`,
  },
  medias: {
    sm: rem(576),
    md: rem(992),
  },
};
