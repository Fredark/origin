import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueGray10: string;
      blueGray50: string;
      blueGray100: string;
      blueGray300: string;
      blueGray400: string;
      blueGray600: string;
      blueGray900: string;
      brandColorPrimary: string;
      brandColorSecondary: string;
      neutralWhite: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    shadows: {
      level1: string;
      level4: string;
    };
    medias: {
      sm: string;
      md: string;
    };
  }
}
