import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.header`
  background-color: white;
  box-shadow: ${(props) => props.theme.shadows.level1};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
`;

export const Center = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${rem(1432)};
  padding: ${rem(16)};

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    padding: ${rem(24)} ${rem(56)};
  }
`;

export const Logo = styled.svg`
  height: ${rem(24)};
  width: ${rem(75)};

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    height: ${rem(32)};
    width: ${rem(100)};
  }
`;
