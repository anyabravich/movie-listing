import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Text = ({ children }) => {
  return <TextWrap>{children}</TextWrap>;
};

export const TextWrap = styled.p`
  max-width: ${rem(588)};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
  color: ${(props) => props.theme.colors.grey.threeHundred};
`;

export default Text;
