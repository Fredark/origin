import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Reset, Base } from './base';
import { SVGSprite } from './SVGSprite';

export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Base />
    <SVGSprite />
    {children}
  </ThemeProvider>
);
