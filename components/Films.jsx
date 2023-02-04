import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Film from "./Film";
import Link from "next/link";

const Films = ({ data }) => {
  const { movies: films } = data;
  return (
    <FilmsWrap>
      {films.map((props, index) => (
        <FilmsLink href={`./films/${props._id}`} key={index}>
          <Film {...props} />
        </FilmsLink>
      ))}
    </FilmsWrap>
  );
};

const FilmsWrap = styled.section`
  display: grid;
  gap: ${rem(20)} ${rem(24)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(282)}, auto));
  margin-bottom: ${rem(100)};
`;

const FilmsLink = styled(Link)`
  display: grid;
  text-decoration: none;
`;

export default Films;
