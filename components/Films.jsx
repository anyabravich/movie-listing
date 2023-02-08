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
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: ${rem(100)};
  @media (max-width: 1178px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 549px) {
    grid-template-columns: 1fr;
  }
`;

const FilmsLink = styled(Link)`
  display: grid;
  text-decoration: none;
`;

export default Films;
