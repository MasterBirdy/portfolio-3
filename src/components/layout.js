import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "../elements/components";
import Header from "./header";
import MobileMenu from "./mobilemenu";
import "../scss/main.scss";
import { useTransition } from "react-spring";
import styled from "styled-components";
import { navigate } from "@reach/router";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contactme", name: "Contact Me" },
];

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const transitions = useTransition(mobileMenu, null, {
    from: { transform: "translateX(100vw)" },
    enter: { transform: "translateX(-0)" },
    leave: { transform: "translateX(100vw)" },
  });

  const linkHandler = link => {
    setMobileMenu(false);
    navigate(link);
  };

  return (
    <Container>
      <Header
        siteTitle={data.site.siteMetadata.title}
        links={links}
        setMobileMenu={setMobileMenu}
      />
      <main>{children}</main>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <MobileMenu
              animationStyle={props}
              key={key}
              links={links}
              setMobileMenu={setMobileMenu}
              linkHandler={linkHandler}
            ></MobileMenu>
          )
      )}
    </Container>
  );
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
