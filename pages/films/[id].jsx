import Main from "../../components/Main";
import styled from "styled-components";
import { rem } from "polished";
import Header from "../../components/Header";

export default function Film({ film }) {
  const { img } = film;
  return (
    <>
      <Main>
        <FilmBgBox>
          <FilmBg src={img} />
        </FilmBgBox>
      </Main>
    </>
  );
}

const FilmBgBox = styled.div`
  position: relative;
  aspect-ratio: 1200 / 480;
  border-radius: ${rem(40)};
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(54, 44, 146, 0.4) 0%,
      rgba(18, 98, 151, 0.4) 100%
    );
  }
`;

const FilmBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export async function getServerSideProps(context) {
  return fetch(
    `https://movie-listing-server.vercel.app/api/movies/${context.query.id}`
  )
    .then((res) => res.json())
    .then((film) => {
      return {
        props: { film },
      };
    });
}
