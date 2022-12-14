import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";

const ListContainer = styled.ul`
  ${tw`
  flex
  list-none
  `}
`;

const NavItem = styled.li<{menu?: any}>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

  ${({menu}) => menu && css`
    ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
  `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <NavItem menu >Home</NavItem>
          <NavItem menu >Cars</NavItem>
          <NavItem menu >Services</NavItem>
          <NavItem menu >Contact Us</NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>Home</NavItem>
      <NavItem>Cars</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Contact Us</NavItem>
    </ListContainer>
  );
}
