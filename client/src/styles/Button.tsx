import styled, { css } from "styled-components";

interface ButtonProps {
  red: boolean;
}
const Button = styled.button<ButtonProps>`
  padding: 10px 16px;
  border-radius: 1px;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  letter-spacing: 0.02857em;
  ${(props) =>
    props.red &&
    css`
      background: ${(props) => props.theme.darkRed};
      border: 1px solid ${(props) => props.theme.darkRed};
      color: white;
    `}
`;

export default Button;
