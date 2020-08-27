/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const res = await graphql(`
    query Projects {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project-item" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  if (res.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }
  const projects = res.data.allMarkdownRemark.edges;
  projects.forEach(({ node }) => {
    const replace = `${node.frontmatter.slug}_(phone|macbook)`;
    const regex = new RegExp(replace, "g");

    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve("src/components/projectpage.js"),
      context: {
        slug: node.frontmatter.slug,
        regex: regex.toString(),
      },
    });
  });
};
