import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.header`
  background-color: white;
  width: 100%;
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
