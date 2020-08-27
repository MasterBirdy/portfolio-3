import styled from "styled-components";
import { below } from "../utilities";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 105rem;

  ${below.s`
  padding: 0;
  width: 90%;
  `}

  ${below.xs`
  width: 92.5%;
  `}
`;
