import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const H2 = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export const Wrap = styled.h2`
  font-weight: 600;
  font-size: ${rem(48)};
  line-height: 117%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ebeef5;
`;

export default H2;
