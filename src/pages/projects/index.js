import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";
import { Grid, GridItem, below } from "../../elements/utilities";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { animated, useTransition } from "react-spring";
import { navigate } from "@reach/router";
import { FaDog, FaGamepad } from "react-icons/fa";
import { RiGameFill } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import useMobile from "../../hooks/useMobile";

const fillerProjects = [
  {
    rows: 1,
    columns: 1,
    order: 3,
    backgroundColor: "#6de3c1",
    backgroundColor2: "#7CFFCB",
    icon: FaDog,
  },
  {
    rows: 1,
    columns: 1,
    order: 5,
    backgroundColor: "#E5BDF6",
    backgroundColor2: "#cad9d9",
    icon: FaGamepad,
  },
  {
    rows: 1,
    columns: 1,
    order: 7,
    backroundColor: "#F67062",
    backgroundColor2: "#FC5296",
    icon: RiGameFill,
  },
  {
    rows: 1,
    columns: 1,
    order: 9,
    icon: BiRun,
  },
];

const Projects = () => {
  const isMobile = useMobile();

  const { allFile, allMarkdownRemark } = useStaticQuery(graphql`
    query Images {
      allFile(filter: { relativePath: { regex: "/(phone|macbook)/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project-item" } } }
      ) {
        edges {
          node {
            frontmatter {
              backgroundColor
              backgroundColor2
              columns
              order
              rows
              slug
              subtitle
              templateKey
              title
            }
          }
        }
      }
    }
  `);

  const projects = allMarkdownRemark.edges.map(project => ({
    ...project.node.frontmatter,
    phoneImage: null,
    laptopImage: null,
  }));

  const projectsObject = {};

  projects.forEach(project => {
    projectsObject[project.slug] = project;
  });

  allFile.edges.forEach(({ node }) => {
    const splitWord = node.name.split("_");
    const key = splitWord[0];
    if (projectsObject[key]) {
      if (splitWord[1].includes("phone")) {
        projectsObject[key].phoneImage = node.childImageSharp.fluid;
      } else if (splitWord[1].includes("macbook")) {
        projectsObject[key].laptopImage = node.childImageSharp.fluid;
      }
    }
  });

  const sortedProjects = isMobile ? projects : [...projects, ...fillerProjects];

  sortedProjects.sort((a, b) => {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
    return 0;
  });

  const projectsTransition = useTransition(sortedProjects, item => item.order, {
    trail: 85,
    from: {
      opacity: 0,
      transform: "translateY(2rem)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0rem)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(2rem)",
    },
  });

  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsGrid marginTop="7" medMarginTop="4" columns="5" as="section">
        {projectsTransition.map(({ item: project, key, props }) => {
          const isThisMobile =
            isMobile || !(project.rows > 1 || project.columns1 > 1);

          return (
            <AnimatedProjectsGridItem
              span={isThisMobile ? 1 : project.columns}
              key={key}
              rowSpan={isThisMobile ? 1 : project.rows}
              style={props}
            >
              <ProjectCard
                primaryColor={project.backgroundColor}
                secondaryColor={project.backgroundColor2}
                onClick={
                  project.slug
                    ? () => navigate(`/projects/${project.slug}`)
                    : null
                }
              >
                {(project.phoneImage || project.laptopImage) && (
                  <ProjectImg
                    isMobile={isThisMobile}
                    fluid={
                      isThisMobile ? project.phoneImage : project.laptopImage
                    }
                  ></ProjectImg>
                )}
                {!isThisMobile && (
                  <ProjectCardInfo>
                    {project.title && (
                      <ProjectCardTitle>{project.title}</ProjectCardTitle>
                    )}
                    {project.subtitle && (
                      <ProjectCardSubtitle>
                        {project.subtitle}
                      </ProjectCardSubtitle>
                    )}
                  </ProjectCardInfo>
                )}
                {isThisMobile && (
                  <>
                    <ProjectImgOverlay>
                      <ProjectCardInfo>
                        {project.title && (
                          <ProjectCardTitle size="2.5">
                            {project.title}
                          </ProjectCardTitle>
                        )}
                        {project.subtitle && (
                          <ProjectCardSubtitle size="1.5">
                            {project.subtitle}
                          </ProjectCardSubtitle>
                        )}
                        {project.icon && React.createElement(project.icon, {})}
                      </ProjectCardInfo>
                    </ProjectImgOverlay>
                  </>
                )}
              </ProjectCard>
            </AnimatedProjectsGridItem>
          );
        })}
      </ProjectsGrid>
    </Layout>
  );
};

export const ProjectsGrid = styled(Grid)`
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  ${below.m`
  grid-template-columns: repeat(4, 1fr);
  `}
  ${below.s`
  grid-template-columns: repeat(2, 1fr);
  `}
  ${below.xs`
  grid-template-columns: 1fr;
  `}
  margin-bottom: 2rem;
`;

export const ProjectsGridItem = styled(GridItem)`
  grid-row: auto / span ${props => (props.rowSpan ? props.rowSpan : 1)};
`;

export const AnimatedProjectsGridItem = animated(ProjectsGridItem);

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 18rem;
  min-width: 18rem;
  cursor: pointer;
  background-color: ${props =>
    props.primaryColor ? props.primaryColor : "#D2CCC4"};
  background-image: linear-gradient(
    315deg,
    ${props => (props.primaryColor ? props.primaryColor : "#D2CCC4")} 0%,
    ${props => (props.secondaryColor ? props.secondaryColor : "#2F4353")} 74%
  );
  border-radius: 30px;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.03);
  }
`;

export const ProjectCardInfo = styled.div`
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  color: white;
  font-family: "Lato", sans-serif;
  width: 90%;
`;

export const ProjectCardTitle = styled.h2`
  font-size: ${props => (props.size ? props.size : 3)}rem;
  margin-bottom: 0.25rem;
`;

export const ProjectCardSubtitle = styled.p`
  font-size: ${props => (props.size ? props.size : 1.65)}rem;
`;

export const ProjectImg = styled(Img)`
  position: absolute;
  width: ${props => (props.isMobile ? "100%" : "90%")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 0.25rem #333);
`;

export const ProjectImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  opacity: 0;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    153deg,
    rgba(251, 194, 235, 0) 15%,
    rgba(0, 0, 0, 0.65) 100%
  );
  ${below.s`
    background: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
    153deg,
    rgba(251, 194, 235, 0) 15%,
    rgba(0, 0, 0, 0.65) 100%
  );
  opacity: 1;
  `}
  :hover {
    opacity: 1;
  }
  svg {
    font-size: 5rem;
  }
`;

export default Projects;
