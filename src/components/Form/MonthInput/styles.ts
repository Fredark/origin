import styled, { css } from 'styled-components';
import { rem } from '../../../designSystem/tools';
import { Box } from '../styles';

interface FormElement {
  readonly isActive: boolean;
}

export const MonthEnv = styled.div<FormElement>`
  flex: 1 1 ${rem(192)};
  margin: 0 ${rem(8)} ${rem(24)};
  outline: none;
  user-select: none;

  &:hover {
    ${Box} {
      border-color: ${(props) => props.theme.colors.blueGray300};
    }
  }

  ${Box} {
    padding: ${rem(6)};
  }

  ${(props) =>
    props.isActive &&
    css`
      &,
      &:hover {
        ${Box} {
          border-color: ${(props) => props.theme.colors.brandColorSecondary};
        }
      }
    `}

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    ${Box} {
      padding: ${rem(4)};
    }
  }
`;

export const Icon = styled.svg`
  fill: ${(props) => props.theme.colors.blueGray300};
  height: ${rem(14)};
  transition: all 150ms ease-in-out;
  width: ${rem(8)};
`;

export const Item = styled.div`
  display: block;
  flex: 0 0 100%;
  outline: none;
  position: relative;
`;

export const Month = styled.span`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(14)};
  font-weight: 600;
  line-height: ${rem(21)};
  text-align: center;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  }
`;

export const Year = styled(Month)`
  color: ${(props) => props.theme.colors.blueGray400};
  font-weight: 400;
`;

export const HiddenDate = styled.input`
  display: none;
`;

export const LeftArrow = styled.span<FormElement>`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${rem(46)};

  &:hover ${Icon} {
    fill: ${(props) => props.theme.colors.brandColorSecondary};
  }

  ${(props) =>
    props.isActive === false &&
    css`
      cursor: default;

      ${Icon} {
        fill: ${(props) => props.theme.colors.blueGray100};
      }

      &:hover ${Icon} {
        fill: ${(props) => props.theme.colors.blueGray100};
      }
    `}
`;

export const RightArrow = styled(LeftArrow)<FormElement>`
  left: auto;
  right: 0;

  ${Icon} {
    transform: scaleX(-1);
  }
`;
