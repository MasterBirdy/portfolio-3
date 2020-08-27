/* eslint-disable */

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, GridItem, Flex, below } from "../elements/utilities";
import { FullWidthImage, AnimatedHeader1, BigP } from "../elements/components";
import runnerSVG from "../images/undraw_runner.svg";
import styled from "styled-components";

const About = () => {
  return (
    <Layout>
      <SEO title="About Page" />
      <Grid marginTop="9.25" columns="12" medMarginTop="6">
        <OrderGridItem medSpan="10" smallSpan="12" span="5">
          <FullWidthImage src={runnerSVG}></FullWidthImage>
        </OrderGridItem>
        <GridItem start="7" span="5" medSpan="11" smallSpan="12">
          <Flex direction="column">
            <AnimatedHeader1>
              Thanks for visiting!{" "}
              <Emoji role="img" aria-label="Waving Emoji" aria-hidden="false">
                👋
              </Emoji>
            </AnimatedHeader1>
            <BigP marginTop="1.75">
              My name is Matthew. I'm a Front End Developer that is passionate
              about learning new technologies and creating websites that look
              great.
            </BigP>
            <BigP marginTop="1.75">
              When I'm not programming, I love to run, play games, and watch
              movies. I also love to cook and bake things.
            </BigP>
            <BigP marginTop="1.75">
              Currently, I'm looking for a full-time position with a team that
              is driven and dedicated to make something great. If you are
              interested, feel free to reach out at{" "}
              <a href="mailto:matthew@mattito.dev">matthew@mattito.dev</a>!
            </BigP>
          </Flex>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const OrderGridItem = styled(GridItem)`
  ${below.s`
  margin-top: 5rem;
  order: 2;
`}
`;

export const Emoji = styled.span`
  display: inline-block;
  animation: wave 1s infinite linear;
  animation-direction: alternate;
  animation-play-state: paused;

  :hover {
    animation-play-state: running;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
`;

export default About;
