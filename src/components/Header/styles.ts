import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.header`
  background-color: white;
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
  padding: ${rem(24)} ${rem(56)};
`;

export const Logo = styled.svg`
  height: ${rem(32)};
  width: ${rem(100)};
`;
