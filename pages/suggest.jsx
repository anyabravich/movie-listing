import React from "react";
import styled from "styled-components";
import { H1Wrap } from "../components/H1";
import Main from "../components/Main";
import Text, { TextWrap } from "../components/Text";
import { rem } from "polished";
import Search from "../components/Search";

export default function Suggest() {
  return (
    <Main>
      <SuggestTitle>Suggest me</SuggestTitle>
      <SuggestText>
        I will really appericiate it if you take time to suggest me something
        good to watch.
      </SuggestText>
      <SuggestSearch>
        <Search click />
      </SuggestSearch>
    </Main>
  );
}

const SuggestTitle = styled(H1Wrap)`
  margin-bottom: ${rem(16)};
`;

const SuggestText = styled(TextWrap)`
  margin-bottom: ${rem(24)};
`;

const SuggestSearch = styled.div`
  width: ${rem(384)};
`;
