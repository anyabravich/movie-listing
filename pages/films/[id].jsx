import Main from "../../components/Main";
import styled from "styled-components";
import { rem } from "polished";
import Header from "../../components/Header";

export default function Film({ film }) {
  const { img, name, category, genre } = film;
  return (
    <>
      <Main>
        <FilmBgBox>
          <FilmBg src={img} />
        </FilmBgBox>
        <FilmInfo>
          <FilmBreadcrumbs>
            <FilmBreadcrumbsItem>MaileHereko</FilmBreadcrumbsItem>
            <FilmBreadcrumbsItem>/</FilmBreadcrumbsItem>
            <FilmBreadcrumbsItem>{category}</FilmBreadcrumbsItem>
          </FilmBreadcrumbs>
          <FilmTitle>{name}</FilmTitle>
        </FilmInfo>
        <FilmContent>
          <FilmCoverWrap>
            <FilmCover src={img} />
          </FilmCoverWrap>
          <FilmTextWrap>
            <FilmTextWrapItem>
              <FilmTextWrapItemTitle>Type</FilmTextWrapItemTitle>
              <FilmTextWrapItemValue>{category}</FilmTextWrapItemValue>
            </FilmTextWrapItem>
            <FilmTextWrapItem>
              <FilmTextWrapItemTitle>Genres</FilmTextWrapItemTitle>
              <FilmTextWrapItemValue>{genre.join(", ")}</FilmTextWrapItemValue>
            </FilmTextWrapItem>
          </FilmTextWrap>
        </FilmContent>
      </Main>
    </>
  );
}

const FilmTextWrapItem = styled.div``;

const FilmTextWrapItemTitle = styled.div``;

const FilmTextWrapItemValue = styled.div``;

const FilmBgBox = styled.div`
  position: relative;
  aspect-ratio: 1200 / 480;
  border-radius: ${rem(40)};
  overflow: hidden;
  margin-top: ${rem(-40)};
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

const FilmInfo = styled.div`
  padding: ${rem(40)};
  display: flex;
  flex-direction: column;
  max-width: ${rem(560)};
  width: 100%;
  height: ${rem(144)};
  margin-top: ${rem(-70)};
  margin-left: calc(80 / 1200 * 100%);
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(${rem(12)});
  border-radius: ${rem(24)};
  z-index: 1;
  position: relative;
`;

const FilmBreadcrumbs = styled.div`
  display: flex;
  gap: ${rem(8)};
  align-items: center;
  margin-bottom: ${rem(8)};
`;

const FilmBreadcrumbsItem = styled.div`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 133%;
  color: #beb7fb;
`;

const FilmContent = styled.div`
  max-width: ${rem(1040)};
  margin: 0 auto;
  margin-top: ${rem(80)};
  display: grid;
  gap: ${rem(80)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(300)}, 1fr));
`;

const FilmCoverWrap = styled.div`
  border-radius: ${rem(24)};
  overflow: hidden;
`;

const FilmCover = styled.img`
  width: 100%;
  object-position: top center;
`;

const FilmTitle = styled.div`
  font-weight: 600;
  font-size: ${rem(32)};
  line-height: ${rem(40)};
  letter-spacing: -0.02em;
`;

const FilmTextWrap = styled.div``;

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
