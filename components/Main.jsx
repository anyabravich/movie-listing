import React from "react";
import Container from "./Container";

const Main = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
