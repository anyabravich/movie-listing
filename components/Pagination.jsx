import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const onClick = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <PaginationWrap>
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => (
          <PaginationButton
            onClick={() => onClick(index)}
            active={page === index + 1 ? true : false}
            key={index}
          >
            {index + 1}
          </PaginationButton>
        ))}
    </PaginationWrap>
  );
};

const PaginationWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${rem(20)};
  margin-bottom: ${rem(50)};
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${rem(8)};
  padding: ${rem(8)};
`;

const PaginationButton = styled.button`
  cursor: pointer;
  width: ${rem(40)};
  height: ${rem(40)};
  font-weight: 600;
  font-size: ${rem(16)};
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #ebe9fe;
  background: ${(props) => (props.active ? "#7b6ef6" : "transparent")};
  border-radius: ${rem(8)};
  border: none;
  outline: none;
`;

export default Pagination;
