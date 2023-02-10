import { useEffect, useState } from "react";
import styled from "styled-components";
import Films from "../components/Films";
import { H1Wrap } from "../components/H1";
import Main from "../components/Main";
import Search from "../components/Search";
import { rem } from "polished";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Movies({ data }) {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState("");
  const [page, setPage] = useState(1);
  const findFilm = films ? films.movies.length : data.movies.length;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}?page=${page}&search=${search}&category=Movies`
      );
      setFilms(data);
    };
    fetchData();
  }, [search, page]);

  return (
    <Main>
      <MoviesTitle>Movies</MoviesTitle>
      <Search search={search} setSearch={setSearch} />
      {findFilm ? (
        <Films data={films ? films : data} />
      ) : (
        <FilmNotFound>Фильм не найден</FilmNotFound>
      )}
      {findFilm !== 0 && (
        <Pagination
          total={findFilm ? films.total : data.total}
          page={page}
          limit={findFilm ? films.limit : data.limit}
          setPage={setPage}
        />
      )}
    </Main>
  );
}

const MoviesTitle = styled(H1Wrap)``;

const FilmNotFound = styled.h2`
  margin-bottom: ${rem(50)};
`;

export async function getStaticProps() {
  return fetch(`${process.env.API_KEY}?category=Movies`)
    .then((res) => res.json())
    .then((data) => {
      return {
        props: { data },
      };
    });
}
