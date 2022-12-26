import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const H1 = ({ children }) => {
  return <H1Wrap>{children}</H1Wrap>;
};

export const H1Wrap = styled.h1`
  font-weight: 600;
  font-size: ${rem(64)};
  letter-spacing: -0.02em;
  line-height: ${rem(80)};
`;

export default H1;
