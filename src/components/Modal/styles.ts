import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.section`
  background-color: white;
  border-radius: ${rem(8)};
  box-shadow: ${(props) => props.theme.shadows.level4};
  margin: 0 auto;
  max-width: ${rem(560)};
  padding: ${rem(32)} ${rem(40)} ${rem(40)};
`;

export const Title = styled.div`
  align-items: flex-start;
  display: flex;
  margin-bottom: ${rem(24)};
`;

export const Icon = styled.svg`
  flex: 0 0 auto;
  height: ${rem(64)};
  margin-right: ${rem(16)};
  width: ${rem(64)};
`;

export const Info = styled.div`
  flex: 1 1 auto;
  padding-top: ${rem(3)};
`;

export const Type = styled.h2`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font: 500 ${rem(24)} / 1.2 ${(props) => props.theme.fonts.secondary};
  margin: 0 0 ${rem(4)};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.blueGray400};
  display: block;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;
