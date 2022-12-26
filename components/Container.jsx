import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  max-width: ${rem(1200)};
  margin: 0 auto;
  padding: 0 ${rem(20)};
  box-sizing: content-box;
`;

export default Container;
