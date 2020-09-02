import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, GridItem, below } from "../elements/utilities";
import { Header1, Header2, FullWidthImage } from "../elements/components";
import starsSVG from "../images/undraw_counting_stars.svg";
import styled from "styled-components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Grid columns="12" marginTop="10" medMarginTop="4">
      <GridItem span="5" medSpan="12">
        <NotFoundHeader1 marginTop="1">404!</NotFoundHeader1>
        <Header2 marginTop="2">
          Oops, looks like you're lost. That's ok!{" "}
        </Header2>
        <Header2 marginTop="2">
          Click one of the links above to find your way back.
        </Header2>
      </GridItem>
      <OrderGridItem start="7" span="6" medSpan="12">
        <FullWidthImage
          src={starsSVG}
          alt={"Lost person looking at the stars"}
        ></FullWidthImage>
      </OrderGridItem>
    </Grid>
  </Layout>
);

export const OrderGridItem = styled(GridItem)`
  ${below.s`
  margin-top: 4rem;
  `}
`;

export const NotFoundHeader1 = styled(Header1)`
  font-size: 4rem;
`;

export default NotFoundPage;
