import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
  const [ captcha, setCaptcha ] = useState("");
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
            onSubmit={(e) => { if (!captcha) { e.preventDefault(); } }}
          >
            <Flex direction="column">
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInputText
                id="name"
                aria-label="Name"
                type="text"
                name="name"
                required
              ></FormInputText>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInputText
                id="email"
                aria-label="E-mail"
                type="email"
                name="email"
                required
              ></FormInputText>
              <FormLabel aria-label="required" htmlFor="message">
                Message
              </FormLabel>
              <FormInputTextArea
                id="message"
                name="message"
                aria-label="Message"
                rows="4"
                required
              ></FormInputTextArea>
              <ButtonHolder>
                <SubmitButton>Submit</SubmitButton>
              </ButtonHolder>
            </Flex>
          </Form>
          <ReCAPTCHADiv>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_SITE_KEY_RECAPTCHA}
              onChange={(value) => {setCaptcha(value)}}
            >
            </ReCAPTCHA>
          </ReCAPTCHADiv>
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
  color: #333;
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
  border: 1px solid #3bb78f;
  background: #0bab64;
  background: linear-gradient(315deg, #0bab64 0%, #3bb78f 100%);
`;

export const ReCAPTCHADiv = styled.div`
  margin-top: 1rem;
`;

export default ContactMe;
