import styled from "styled-components";
import { rem } from "polished";
import Container from "../components/Container";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Login() {
  return (
    <Container>
      <LoginInner>
        <LoginImageWrap>
          <LoginImage src={"./login.png"} />
        </LoginImageWrap>
        <LoginFormWrap>
          <Form />
          <Button>Login</Button>
        </LoginFormWrap>
      </LoginInner>
    </Container>
  );
}

const LoginInner = styled.div`
  display: grid;
  align-items: center;
  gap: ${rem(20)};
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LoginImageWrap = styled.div`
  max-width: ${rem(486)};
  width: 100%;
  @media (max-width: 768px) {
    max-width: ${rem(250)};
    margin-bottom: ${rem(30)};
  }
`;

const LoginImage = styled.img`
  width: 100%;
  display: block;
`;

const LoginFormWrap = styled.div`
  display: grid;
  gap: ${rem(42)};
  max-width: ${rem(486)};
  width: 100%;
  margin-top: ${rem(-15)};
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
