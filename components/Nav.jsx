import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const links = [
    {
      href: "/movies",
      name: "Movies",
    },
    {
      href: "/tv-shows",
      name: "TV Shows",
    },
    {
      href: "/suggest",
      name: "Suggest me",
      arrow: true,
    },
  ];

  const linksLogin = [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/suggestions",
      name: "Suggestions",
    },
    {
      href: "/add",
      name: "Add",
    },
    {
      href: "/logout",
      name: "Logout",
    },
  ];

  return (
    <NavWrap path={router.pathname}>
      <Logo href={"/"} />
      <Menu>
        {router.pathname !== "/login"
          ? links.map(({ href, name, arrow }) =>
              !arrow ? (
                <MenuItem key={name}>
                  <MenuLink href={href}>{name}</MenuLink>
                </MenuItem>
              ) : (
                <MenuItem key={name}>
                  <MenuLink href={href}>
                    {name}
                    <MenuLinkArrow />
                  </MenuLink>
                </MenuItem>
              )
            )
          : linksLogin.map(({ href, name, arrow }) =>
              !arrow ? (
                <MenuItem key={name}>
                  <MenuLink href={href}>{name}</MenuLink>
                </MenuItem>
              ) : (
                <MenuItem key={name}>
                  <MenuLink href={href}>
                    {name}
                    <MenuLinkArrow />
                  </MenuLink>
                </MenuItem>
              )
            )}
      </Menu>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${rem(80)};
  margin-bottom: ${(props) => (props.path === "/login" ? rem(40) : rem(80))};
`;

const Logo = styled(Link)`
  flex-shrink: 0;
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z' fill='%234BB7FD'/%3E%3Cpath d='M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z' fill='%237B6EF6'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${rem(16)};
  @media (max-width: 568px) {
    display: none;
  }
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
