import Main from "../../components/Main";
import styled from "styled-components";
import { rem } from "polished";
import Head from "next/head";
import axios from "axios";

export default function Film({ film }) {
  const { img, name, category, genre, rating } = film;
  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
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
            <FilmTextWrapTitle>
              Part of the journey is the end.
            </FilmTextWrapTitle>
            <FilmTextWrapText>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </FilmTextWrapText>
            <FilmTextWrapRating>
              <FilmTextWrapRatingIcon />
              <FilmTextWrapRatingCount>{rating}</FilmTextWrapRatingCount>
            </FilmTextWrapRating>
            <FilmTextWrapItem>
              <FilmTextWrapItemTitle>Type</FilmTextWrapItemTitle>
              <FilmTextWrapItemValue>{category}</FilmTextWrapItemValue>
            </FilmTextWrapItem>
            <FilmTextWrapItem>
              <FilmTextWrapItemTitle>Release Date:</FilmTextWrapItemTitle>
              <FilmTextWrapItemValue>2019-04-24</FilmTextWrapItemValue>
            </FilmTextWrapItem>
            <FilmTextWrapItem>
              <FilmTextWrapItemTitle>Run time</FilmTextWrapItemTitle>
              <FilmTextWrapItemValue>181 min</FilmTextWrapItemValue>
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

const FilmTextWrapTitle = styled.p`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 133%;
  letter-spacing: -0.015em;
  color: #ebeef5;
  margin-bottom: ${rem(24)};
`;

const FilmTextWrapText = styled.p`
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: 160%;
  color: ${(props) => props.theme.colors.grey.var300};
  margin-bottom: ${rem(24)};
`;

const FilmTextWrapRating = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${rem(4)} ${rem(8)};
  gap: ${rem(4)};
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(${rem(4)});
  border-radius: ${rem(8)};
  margin-bottom: ${rem(24)};
`;

const FilmTextWrapRatingIcon = styled.i`
  width: ${rem(16)};
  height: ${rem(16)};
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z' stroke='%23FFAD49' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

const FilmTextWrapRatingCount = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
  color: #ffad49;
`;

const FilmTextWrapItem = styled.div`
  margin-bottom: ${rem(24)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilmTextWrapItemTitle = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
  color: ${(props) => props.theme.colors.grey.var400};
  margin-bottom: ${rem(8)};
`;

const FilmTextWrapItemValue = styled.div`
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: 160%;
  color: ${(props) => props.theme.colors.grey.var100};
`;

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
  margin-bottom: ${rem(160)};
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

export const getStaticPaths = async () => {
  const { data: films } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return {
    paths: films.movies.map((p) => "/films/" + p._id),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data: film } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/${params.id}`
  );

  return {
    props: {
      film,
    },
  };
};
