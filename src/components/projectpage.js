import React from "react";
import Layout from "./layout";
import SEO from "./seo";
import { Grid, GridItem, Flex, below } from "../elements/utilities";
import { Header1, Header2, BigP, Button } from "../elements/components";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { animated, useSpring, config } from "react-spring";
import TechRow from "../components/techrow";
import TechnologyArray from "../elements/utilities/TechnologyArray";
import useMobile from "../hooks/useMobile";

const ProjectPage = ({ data }) => {
  const isMobile = useMobile();

  const props = useSpring({
    from: { opacity: 0, transform: `translateX(${isMobile ? -10 : 10}rem)` },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 250,
    config: config.slow,
  });

  const {
    title,
    subtitle,
    description,
    demolink,
    githublink,
    technologies,
  } = data.markdownRemark.frontmatter;

  let laptopImage = data.allFile.edges.find(({ node }) =>
    node.name.includes("macbook")
  );
  if (laptopImage) laptopImage = laptopImage.node.childImageSharp.fluid;
  let phoneImage = data.allFile.edges.find(({ node }) =>
    node.name.includes("phone")
  );
  if (phoneImage) phoneImage = phoneImage.node.childImageSharp.fluid;

  const filteredTechnologyArray = technologies
    ? TechnologyArray.filter(tech => technologies.includes(tech.className))
    : [];

  return (
    <Layout>
      <SEO title="Project Page" />
      <ProductGrid marginTop="8" columns="12" medMarginTop="5">
        <GridItem span="5" medSpan="12">
          <Flex direction="column">
            <Header1>{title}</Header1>
            <Header2 marginTop="0.25">{subtitle}</Header2>
            <BigP marginTop="2">{description}</BigP>
            <ButtonHolder>
              {githublink && (
                <a
                  href={githublink}
                  target="_blank"
                  aria-label="Link to Code"
                  rel="noopener noreferrer"
                >
                  <CodeButton>Code</CodeButton>
                </a>
              )}
              {demolink && (
                <a
                  href={demolink}
                  target="_blank"
                  aria-label="Link to Live Demo"
                  rel="noopener noreferrer"
                >
                  <DemoButton>Live Demo</DemoButton>
                </a>
              )}
            </ButtonHolder>
          </Flex>
        </GridItem>
        <GridItem start="7" span="6" medSpan="12">
          <AnimatedProjectImg
            phone={!laptopImage}
            style={props}
            fluid={laptopImage ? laptopImage : phoneImage}
            alt={`${laptopImage ? "Laptop" : "Phone"} image for ${title}`}
          ></AnimatedProjectImg>
        </GridItem>
      </ProductGrid>
      {filteredTechnologyArray.length && (
        <TechRow marginTop="1" items={filteredTechnologyArray}></TechRow>
      )}
    </Layout>
  );
};

export const ProductGrid = styled(Grid)`
  ${below.s`
margin-bottom: -4rem;
`}
`;

export const ButtonHolder = styled.div`
  margin-top: 2rem;
  a:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const CodeButton = styled(Button)`
  border: 1px solid #64cad1;
  background: #63a4ff;
  background: linear-gradient(315deg, #69d4db 0%, #63a4ff 100%);
`;

export const DemoButton = styled(Button)`
  border: 1px solid #e8ba5f;
  background: #f39f86;
  background: linear-gradient(315deg, #e8ba5f 0%, #f39f86 100%);
`;

export const ProjectImg = styled(Img)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 45rem;
  pointer-events: none;
  margin-top: ${props => (props.phone ? 0 : -4)}rem;
  margin-bottom: ${props => (props.phone ? 3 : 0)}rem;
  filter: drop-shadow(0 0 0.2rem #888);
`;

export const AnimatedProjectImg = animated(ProjectImg);

export default ProjectPage;

export const query = graphql`
  query ProjectQuerry($slug: String!, $regex: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        description
        demolink
        githublink
        technologies
      }
    }
    allFile(filter: { relativePath: { regex: $regex } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
