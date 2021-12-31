import styled from 'styled-components';
import { rem } from '../../designSystem/tools';

export const Tag = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-8)};
  width: calc(100% + ${rem(16)});
`;

export const MoneyEnv = styled.div`
  display: block;
  flex: 1 1 ${rem(272)};
  margin: 0 ${rem(8)} ${rem(24)};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(14)};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: ${rem(4)};
`;

export const Box = styled.label`
  align-items: center;
  border: ${rem(1)} solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${rem(4)};
  display: flex;
  width: 100%;
  padding: ${rem(12)};
`;

export const Money = styled.svg`
  flex: 0 0 auto;
  height: ${rem(24)};
  margin-right: ${rem(8)};
  width: ${rem(24)};
`;

export const Amount = styled.input`
  border: 0 none;
  color: ${(props) => props.theme.colors.blueGray600};
  display: block;
  flex: 1 1 auto;
  font: 500 ${rem(24)} / ${rem(26.8)} ${(props) => props.theme.fonts.secondary};
  padding: ${rem(2)} 0 0;
  outline: none;
  width: 100%;
`;

export const MonthEnv = styled.div`
  flex: 1 1 ${rem(192)};
  margin: 0 ${rem(8)} ${rem(24)};

  ${Box} {
    padding: ${rem(4)};
  }
`;

export const Item = styled.div`
  display: block;
  flex: 0 0 100%;
`;

export const Month = styled.span`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: ${rem(23)};
  text-align: center;
`;

export const Year = styled(Month)`
  color: ${(props) => props.theme.colors.blueGray400};
  font-weight: 400;
`;

export const TotalEnv = styled.div`
  border: ${rem(1)} solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${rem(4)};
  display: block;
  margin: 0 ${rem(8)} ${rem(32)};
`;

export const TotalLine = styled.div`
  align-items: center;
  display: flex;
  padding: ${rem(24)} ${rem(30)} ${rem(16)} ${rem(32)};
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  flex: 0 0 auto;
  font-size: ${rem(20)};
  font-weight: 400;
  line-height: ${rem(24)};
`;

export const TotalValue = styled.span`
  color: ${(props) => props.theme.colors.brandColorSecondary};
  display: block;
  font: 500 ${rem(32)} / ${rem(38.4)} ${(props) => props.theme.fonts.secondary};
  flex: 0 0 auto;
`;

export const Bottom = styled.p`
  background-color: ${(props) => props.theme.colors.blueGray10};
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(12)};
  font-weight: 400;
  line-height: ${rem(16)};
  margin: 0;
  padding: ${rem(23)} ${rem(32)};
`;

export const Highlight = styled.span`
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.brandColorPrimary};
  border: 0 none;
  border-radius: ${rem(32)};
  color: white;
  cursor: pointer;
  display: block;
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: ${rem(20)};
  margin: 0 auto;
  max-width: ${rem(320)};
  outline: none;
  padding: ${rem(18)};
  text-align: center;
  width: 100%;
`;
