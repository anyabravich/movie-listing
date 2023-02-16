import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Input = ({ placeholder, type }) => {
  return <InputWrap placeholder={placeholder} type={type} />;
};

const InputWrap = styled.input`
  width: 100%;
  outline: none;
  padding: ${rem(12)} 0;
  border: none;
  background: none;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #475069;
  &::placeholder {
    color: #475069;
  }
`;

export default Input;
