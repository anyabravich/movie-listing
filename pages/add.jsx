import React from "react";
import styled from "styled-components";
import { H1Wrap } from "../components/H1";
import Main from "../components/Main";
import Text, { TextWrap } from "../components/Text";
import { rem } from "polished";
import Search from "../components/Search";

export default function Add() {
  return (
    <Main>
      <AddTitle>Add new item</AddTitle>
      <AddSearch>
        <Search click />
      </AddSearch>
    </Main>
  );
}

const AddTitle = styled(H1Wrap)`
  margin-bottom: ${rem(24)};
`;

const AddSearch = styled.div`
  width: ${rem(384)};
`;
