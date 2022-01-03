import styled, { css } from 'styled-components';
import { rem } from '../../designSystem/tools';

interface FormElement {
  readonly isActive: boolean;
}

export const Tag = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-8)};
  width: calc(100% + ${rem(16)});
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.blueGray900};
  display: block;
  font-size: ${rem(12)};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: ${rem(4)};

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    font-size: ${rem(14)};
  }
`;

export const Box = styled.label`
  align-items: center;
  border: ${rem(1)} solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${rem(4)};
  display: flex;
  padding: ${rem(14)} ${rem(12)};
  transition: all 150ms ease-in-out;
  width: 100%;

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    padding: ${rem(12)};
  }
`;

export const Button = styled.button<FormElement>`
  background-color: ${(props) => props.theme.colors.blueGray50};
  border: 0 none;
  border-radius: ${rem(32)};
  color: white;
  cursor: pointer;
  display: block;
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: ${rem(20)};
  margin: 0 auto;
  max-width: none;
  outline: none;
  padding: ${rem(18)};
  pointer-events: none;
  text-align: center;
  transition: all 150ms ease-in-out;
  user-select: none;
  width: 100%;

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.colors.brandColorPrimary};
      pointer-events: auto;
    `}

  @media (min-width: ${(props) => props.theme.medias.sm}) {
    max-width: ${rem(320)};
  }
`;
