import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { animated } from "react-spring";

const MobileMenu = ({ links, setMobileMenu, animationStyle, linkHandler }) => {
  return (
    <Overlay style={animationStyle}>
      <ButtonWrapper onClick={() => setMobileMenu(false)}>
        <FaTimes></FaTimes>
      </ButtonWrapper>
      <LinkList>
        {links.map(link => (
          <ListItem onClick={() => linkHandler(link.path)}>
            {link.name}
          </ListItem>
        ))}
        <ListItem>
          <a
            href={
              "https://documents-masterbirdy.s3-us-west-1.amazonaws.com/resume-matthew.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </ListItem>
      </LinkList>
    </Overlay>
  );
};

export const ButtonWrapper = styled.div`
  position: fixed;
  font-size: 4rem;
  color: white;
  top: 1rem;
  right: 1rem;
`;

export const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
`;

export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  list-style: none;
  font-size: 2.8rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.75rem;
  }
`;

export default MobileMenu;
