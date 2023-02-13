import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Button from "./Button";

const Search = ({ setSearch, click }) => {
  return (
    <>
      {click ? (
        <SearchWrap>
          <SearchField>
            <SearchIcon />
            <SearchInput placeholder="Search Movies or TV Shows" />
          </SearchField>
          <Button>Search</Button>
        </SearchWrap>
      ) : (
        <SearchField>
          <SearchIcon />
          <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movies or TV Shows"
          />
        </SearchField>
      )}
    </>
  );
};

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(5)};
`;

const SearchField = styled.div`
  flex-shrink: 0;
  padding: ${rem(12)} ${rem(16)};
  display: flex;
  align-items: center;
  gap: ${rem(16)};
  width: 100%;
  height: ${rem(64)};
  border: 1px solid #323b54;
  border-radius: ${rem(12)};
  background: rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.i`
  flex-shrink: 0;
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z' stroke='%23475069' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22 22L20 20' stroke='%23475069' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat 0 0;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  font-family: "Poppins", Arial, Helvetica, sans-serif;

  &::placeholder {
    color: #475069;
  }
`;

export default Search;
