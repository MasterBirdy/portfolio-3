import styled from "styled-components";
import { below } from "../utilities";

export const NavigationBar = styled.nav`
  margin-top: 4rem;
  ${below.s`
    margin-top: 1.5rem;
    `}
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a,
  a:visited {
    text-decoration: none;
    color: black;
  }

  h1 {
    font-size: 3rem;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  ${below.s`
  display: none;
  `}
`;

export const NavigationListItem = styled.li`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: lowercase;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
