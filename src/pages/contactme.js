import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, GridItem, Flex, below } from "../elements/utilities";
import {
  FullWidthImage,
  Button,
  AnimatedHeader1,
} from "../elements/components";
import workingSVG from "../images/undraw_working.svg";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <Grid marginTop="10" columns="12" medMarginTop="4">
        <GridItem span="5" medSpan="12">
          <FormAnimatedHeader1 marginTop="1">
            Let's work together!
          </FormAnimatedHeader1>
          <Form
            action="https://getform.io/f/01d6ec1a-ecce-4018-94b5-631294b405c6"
            method="POST"
          >
            <Flex direction="column">
              <FormLabel aria-label="required" htmlFor="name">
                Name
              </FormLabel>
              <FormInputText type="text" name="name" required></FormInputText>
              <FormLabel aria-label="required" htmlFor="email">
                Email
              </FormLabel>
              <FormInputText type="email" name="email" required></FormInputText>
              <FormLabel aria-label="required" htmlFor="message">
                Message
              </FormLabel>
              <FormInputTextArea
                name="message"
                rows="4"
                required
              ></FormInputTextArea>
              <ButtonHolder>
                <SubmitButton>Submit</SubmitButton>
              </ButtonHolder>
            </Flex>
          </Form>
        </GridItem>
        <OrderGridItem span="6" start="7" medSpan="12">
          <FullWidthImage
            src={workingSVG}
            alt="Person sitting and drinking coffee outside with laptop"
          ></FullWidthImage>
        </OrderGridItem>
      </Grid>
    </Layout>
  );
};

export const OrderGridItem = styled(GridItem)`
  ${below.s`
  margin-top: 2rem;
`}
`;

export const FormAnimatedHeader1 = styled(AnimatedHeader1)`
  font-size: 3rem;
  max-width: 30rem;
`;

export const Form = styled.form`
  margin-top: 0.66rem;
  input:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormLabel = styled.label`
  font-family: Quicksand, sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #444;
`;

export const FormInputText = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: Quicksand, sans-serif;
  outline: none;
  width: 100%;
  max-width: 30rem;
  color: #333;
`;

export const FormInputTextArea = styled.textarea`
  padding: 0.6rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: Quicksand, sans-serif;
  outline: none;
  width: 100%;
  max-width: 30rem;
  color: #333;
`;

export const ButtonHolder = styled.div`
  margin-top: 1.5rem;
`;

export const SubmitButton = styled(Button)`
  border: 1px solid #a3ed9f;
  background: #91ebba;
  background: linear-zgradient(315deg, #a3ed9f 0%, #91ebba 100%);
`;

export default ContactMe;
