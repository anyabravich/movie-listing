import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const Button = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.button`
  height: ${rem(64)};
  /* Primary/400 */

  background: #7b6ef6;
  /* Primary/400 */

  border: 2px solid #7b6ef6;
  border-radius: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  min-width: ${rem(121)};
  cursor: pointer;
  /* identical to box height, or 150% */

  /* White/100 */

  color: #ffffff;
`;

export default Button;
