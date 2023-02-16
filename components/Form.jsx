import React from "react";
import styled from "styled-components";
import { H1Wrap } from "./H1";
import { rem } from "polished";
import Input from "./Input";

const Form = () => {
  return (
    <FormWrap>
      <FromTitle>Login</FromTitle>
      <FormInner>
        <FormField>
          <FormFieldIcon icon={"email"} />
          <Input placeholder={"Email"} type={"email"} />
        </FormField>
        <FormField>
          <FormFieldIcon icon={"password"} />
          <Input placeholder={"Password"} type={"password"} />
          <FormFieldIcon icon={"password-show"} />
        </FormField>
      </FormInner>
    </FormWrap>
  );
};

const FormWrap = styled.div``;

const FromTitle = styled(H1Wrap)`
  margin-bottom: ${rem(40)};
  margin-left: ${rem(4)};
  margin-top: ${rem(-11)};
`;

const FormInner = styled.form`
  display: grid;
  gap: ${rem(16)};
`;

const FormField = styled.div`
  width: 100%;
  height: ${rem(64)};
  display: flex;
  align-items: center;
  gap: ${rem(16)};
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #323b54;
  border-radius: ${rem(12)};
  padding: 0 ${rem(16)};
`;

const FormFieldIcon = styled.i`
  flex-shrink: 0;
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("./${(props) => props.icon}.svg") no-repeat center center;
  background-size: cover;
`;

export default Form;
