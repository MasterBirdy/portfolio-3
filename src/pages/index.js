import React, { useState } from "react";
import {
  FullWidthImage,
  AnimatedHeader1,
  Header2,
  ColoredSpan,
  ColoredSpanBackground,
} from "../elements/components";
import { Grid, GridItem, Flex, brands } from "../elements/utilities";
import freelancerSVG from "../images/undraw_freelancer.svg";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSpring } from "react-spring";
import { easeCubicInOut } from "d3-ease";
import TechRow from "../components/techrow";
import technologyArray from "../elements/utilities/TechnologyArray";
import Layout from "../components/layout";
import SEO from "../components/seo";

const homePageTech = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "sass",
  "vue",
  "react",
  "node",
  "mysql",
  "redux",
];

const filteredTechnologyArray = technologyArray.filter(tech =>
  homePageTech.includes(tech.className)
);

const IndexPage = () => {
  const [colorToggle, setColorToggle] = useState(false);

  const { x } = useSpring({
    x: colorToggle ? 0 : 1,
    config: {
      duration: 1000,
      easing: easeCubicInOut,
    },
  });

  const { y } = useSpring({
    y: colorToggle ? 0 : 1,
    config: {
      duration: 1500,
      easing: easeCubicInOut,
    },
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Grid marginTop="10" columns="12" medMarginTop="5">
        <GridItem span="5" medSpan="12">
          <Flex direction="column">
            <AnimatedHeader1 marginTop="1">
              Hello, I'm Matthew Ito.
            </AnimatedHeader1>
            <Header2 marginTop="2" lineHeight="1.35">
              I love using modern JavaScript frameworks like{" "}
              <ColoredSpan
                onMouseEnter={() => setColorToggle(true)}
                onMouseLeave={() => setColorToggle(false)}
                text="React"
              >
                React
                <ColoredSpanBackground
                  color="#AEE4F3"
                  style={{
                    transform: x
                      .interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 0],
                      })
                      .interpolate(x => `translate3d(0px, ${x * 100}px, 0px)`),
                    backgroundColor: x.interpolate({
                      range: [0, 1],
                      output: ["#8ccfd1", "#AEE4F3"],
                    }),
                  }}
                ></ColoredSpanBackground>
              </ColoredSpan>{" "}
              and{" "}
              <ColoredSpan
                onMouseEnter={() => setColorToggle(true)}
                onMouseLeave={() => setColorToggle(false)}
                text="Vue"
              >
                Vue
                <ColoredSpanBackground
                  color="#8ccfd1"
                  style={{
                    transform: y
                      .interpolate({
                        range: [0, 0.1, 0.5, 0.9, 1],
                        output: [0, 0, 1, 0, 0],
                      })
                      .interpolate(y => `translate3d(0px, ${y * 100}px, 0px)`),
                    backgroundColor: y.interpolate({
                      range: [0, 1],
                      output: ["#AEE4F3", "#8ccfd1"],
                    }),
                  }}
                ></ColoredSpanBackground>
              </ColoredSpan>{" "}
              to create websites.
            </Header2>
            <IconHolder>
              <a
                href="https://github.com/masterbirdy"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <FaGithub className="github" alt="Github Icon"></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-ito/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin
                  className="linkedin"
                  alt="Linkedin Icon"
                ></FaLinkedin>
              </a>
            </IconHolder>
          </Flex>
        </GridItem>
        <GridItem span="6" start="7" medSpan="10" smallSpan="12">
          <FullWidthImage
            src={freelancerSVG}
            alt={"Freelance worker using laptop to work"}
          ></FullWidthImage>
        </GridItem>
      </Grid>
      <TechRow marginTop="7" items={filteredTechnologyArray}></TechRow>
    </Layout>
  );
};

export const IconHolder = styled.div`
  margin-top: 2.25rem;
  font-size: 4.5rem;
  a:not(:last-child) {
    margin-right: 2rem;
  }

  .github {
    color: ${brands.github};
  }

  .linkedin {
    color: ${brands.linkedin};
  }
`;

export default IndexPage;
