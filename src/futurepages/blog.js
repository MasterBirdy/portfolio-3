import React from "react";
import Layout from "../components/layout";
import { Grid, GridItem } from "../elements/utilities";
import SEO from "../components/seo";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { useTransition, animated } from "react-spring";

const Blog = () => {
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query BlogPosts {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
  //     ) {
  //       edges {
  //         node {
  //           excerpt
  //           frontmatter {
  //             title
  //             subtitle
  //             featuredImage {
  //               childImageSharp {
  //                 fluid(maxWidth: 400) {
  //                   ...GatsbyImageSharpFluid
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <SEO title="Blog" />
      <BlogGrid columns="3" marginTop="9">
        {allMarkdownRemark.edges.map(edge => (
          <GridItem>
            <BlogCard>
              <BlogCardImg
                fluid={
                  edge.node.frontmatter.featuredImage.childImageSharp.fluid
                }
              ></BlogCardImg>
              <BlogCardHeader>{edge.node.frontmatter.title}</BlogCardHeader>
              <BlogCardExcerpt>{edge.node.excerpt}</BlogCardExcerpt>
            </BlogCard>
          </GridItem>
        ))}
      </BlogGrid>
    </Layout>
  );
};

export const BlogGrid = styled(Grid)`
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
`;

export const BlogCardHeader = styled.h1`
  margin-top: 0.75rem;
  font-family: "Lato", sans-serif;
  font-size: 2.7rem;
`;

export const BlogCardExcerpt = styled.p`
  margin-top: 1.25rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const BlogCard = styled.article`
  position: relative;
  padding: 1.5rem 1.25rem 1rem;
  width: 100%;
  min-height: 365px;
  background-color: rgb(253, 253, 253);

  :before {
    position: absolute;
    bottom: -2rem;
    left: 5%;
    width: 92.5%;
    height: 1px;
    content: "";
    background-color: rgba(0, 0, 0, 0.125);
  }

  :after {
    position: absolute;
    top: 4%;
    right: -2rem;
    height: 92.5%;
    width: 1px;
    content: "";
    background-color: rgba(0, 0, 0, 0.125);
  }
`;

export const BlogCardImg = styled(Img)`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export default Blog;
