import styled from 'styled-components';
import { rem } from '../../../designSystem/tools';

export const TotalEnv = styled.div`
  border: ${rem(1)} solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${rem(8)};
  display: block;
  margin: 0 ${rem(8)} ${rem(32)};
  width: 100%;
`;

export const TotalLine = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: ${rem(24)} ${rem(24)} ${rem(26)};
  justify-content: space-between;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    padding: ${rem(24)} ${rem(30)} ${rem(16)} ${rem(32)};
  }
`;

export const TotalLabel = styled.span`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  flex: 0 0 auto;
  font-size: ${rem(18)};
  font-weight: 400;
  line-height: 120%;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: ${rem(24)};
  }
`;

export const TotalValue = styled.span`
  color: ${(props) => props.theme.colors.brandColorSecondary};
  display: block;
  font: 500 ${rem(24)} / 120% ${(props) => props.theme.fonts.secondary};
  flex: 0 0 auto;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    font-size: ${rem(32)};
  }
`;

export const Bottom = styled.p`
  background-color: ${(props) => props.theme.colors.blueGray10};
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(12)};
  font-weight: 400;
  flex: 0 0 100%;
  line-height: ${rem(16)};
  margin: 0;
  min-height: ${rem(16)};
  padding: ${rem(21)};
  text-align: center;
  width: 100%;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    padding: ${rem(23)} ${rem(32)};
    text-align: left;
  }
`;

export const Highlight = styled.span`
  font-weight: 600;
`;
