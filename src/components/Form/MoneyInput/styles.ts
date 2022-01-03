import styled, { css } from 'styled-components';
import { rem } from '../../../designSystem/tools';
import { Box } from '../styles';

interface FormElement {
  readonly isActive: boolean;
}

export const Money = styled.svg`
  fill: ${(props) => props.theme.colors.blueGray100};
  flex: 0 0 auto;
  height: ${rem(24)};
  margin-right: ${rem(8)};
  transition: all 150ms ease-in-out;
  width: ${rem(24)};
`;

export const Amount = styled.input`
  border: 0 none;
  color: ${(props) => props.theme.colors.blueGray600};
  display: block;
  flex: 1 1 auto;
  font: 500 ${rem(20)} / 1.2 ${(props) => props.theme.fonts.secondary};
  padding: ${rem(2)} 0 0;
  outline: none;
  transition: all 150ms ease-in-out;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.colors.blueGray100};
    font: 500 ${rem(20)} / 1.2;
    ${(props) => props.theme.fonts.secondary};
  }

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    font-size: ${rem(24)};

    &::placeholder {
      font-size: ${rem(24)};
    }
  }
`;

export const MoneyEnv = styled.div<FormElement>`
  display: block;
  flex: 1 1 ${rem(272)};
  margin: 0 ${rem(8)} ${rem(16)};
  outline: none;

  &:hover {
    ${Box} {
      border-color: ${(props) => props.theme.colors.blueGray300};
    }

    ${Money} {
      fill: ${(props) => props.theme.colors.blueGray300};
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      &,
      &:hover {
        ${Box} {
          border-color: ${(props) => props.theme.colors.brandColorSecondary};
        }

        ${Money} {
          fill: ${(props) => props.theme.colors.brandColorSecondary};
        }

        ${Amount} {
          color: ${(props) => props.theme.colors.blueGray900};
        }
      }
    `}

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    margin-bottom: ${rem(24)};
  }
`;
