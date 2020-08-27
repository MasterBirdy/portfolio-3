import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {
  NavigationBar,
  NavigationList,
  NavigationListItem,
  Logo,
  Letter,
} from "../elements/components";
import useMobile from "../hooks/useMobile";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Header = ({ links, setMobileMenu }) => {
  const isMobile = useMobile();

  return (
    <header>
      <NavigationBar>
        <Link to={"/"}>
          <Logo>
            <Letter>m</Letter>
          </Logo>
        </Link>
        {isMobile && (
          <IconWrapper onClick={() => setMobileMenu(true)}>
            <FaBars></FaBars>
          </IconWrapper>
        )}
        {!isMobile && (
          <NavigationList>
            {links.map(link => (
              <NavigationListItem key={link.name}>
                <Link to={link.path} activeClassName="active">
                  {link.name}
                </Link>
              </NavigationListItem>
            ))}
            <a
              href={
                "https://documents-masterbirdy.s3-us-west-1.amazonaws.com/resume-matthew.pdf"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <NavigationListItem>Resume</NavigationListItem>
            </a>
          </NavigationList>
        )}
      </NavigationBar>
    </header>
  );
};

export const IconWrapper = styled.div`
  font-size: 2.5rem;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
