import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";

const Nav = () => {
  return (
    <NavWrap>
      <Logo href={"/"} />
      <Menu>
        <MenuItem>
          <MenuLink href={"/movies"}>Movies</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={"/tv-shows"}>TV Shows</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={"/suggest"}>
            Suggest me
            <MenuLinkArrow />
          </MenuLink>
        </MenuItem>
      </Menu>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${rem(80)};
  margin-bottom: ${rem(80)};
`;

const Logo = styled(Link)`
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background: url("./logo.svg") no-repeat center center;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${rem(16)};
`;

const MenuItem = styled.li`
  padding: ${rem(12)} ${rem(16)};
  &:last-of-type {
    padding: ${rem(12)} ${rem(32)};
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const MenuLinkArrow = styled.i`
  display: inline-block;
  width: ${rem(16)};
  height: ${rem(16)};
  background: url("./arrow.svg") no-repeat 0 center;
  margin-left: ${rem(8)};
`;

export default Nav;
