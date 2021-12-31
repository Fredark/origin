import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.h1`
  color: ${(props) => props.theme.colors.brandColorPrimary};
  display: block;
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  margin: 0 0 ${rem(24)};
  text-align: center;
`;

export const Goal = styled.span`
  font-weight: 600;
`;
