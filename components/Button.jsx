import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const Button = ({ children, fullHeight }) => {
  return <ButtonWrap fullHeight={fullHeight}>{children}</ButtonWrap>;
};

export const ButtonWrap = styled.button`
  height: ${(props) => (props.fullHeight ? "inherit" : rem(56))};
  background: #7b6ef6;
  border: 2px solid #7b6ef6;
  border-radius: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: ${rem(24)};
  min-width: ${rem(121)};
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
