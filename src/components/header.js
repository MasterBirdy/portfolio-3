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
import Media from "react-media";

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
        <Media
          queries={{ small: "(max-width: 768px)", large: "(min-width: 769px)" }}
        >
          {matches => (
            <>
              {matches.small && (
                <IconWrapper onClick={() => setMobileMenu(true)}>
                  <FaBars></FaBars>
                </IconWrapper>
              )}
              {matches.large && (
                <NavigationList>
                  {links.map(link => (
                    <ColoredNavigationListItem
                      key={link.name}
                      color={link.color}
                    >
                      <ColoredLink to={link.path} activeClassName="active">
                        {link.name}
                      </ColoredLink>
                    </ColoredNavigationListItem>
                  ))}

                  <ColoredNavigationListItem>
                    <a
                      href={
                        "https://documents-masterbirdy.s3-us-west-1.amazonaws.com/resume-matthew.pdf"
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </ColoredNavigationListItem>
                </NavigationList>
              )}
            </>
          )}
        </Media>
      </NavigationBar>
    </header>
  );
};

export const ColoredNavigationListItem = styled(NavigationListItem)`
  a {
    position: relative;
    &:after {
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -0.4rem;
      left: 0;
      content: "";
      background-color: ${props => (props.color ? props.color : "#3978e6")};
      transition: all 0.5s ease-out;
    }

    &.active:after {
      width: 100%;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;

export const ColoredLink = styled(Link)``;

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
