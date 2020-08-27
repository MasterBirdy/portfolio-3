import styled from "styled-components";
import { below } from "./Breakpoints";

export const Grid = styled.div`
  display: grid;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}rem;
  grid-template-columns: repeat(
    ${props => (props.columns ? props.columns : 1)},
    1fr
  );
  ${below.s`
  margin-top: ${props =>
    props.medMarginTop
      ? props.medMarginTop
      : props.marginTop
      ? props.marginTop
      : 0}rem;
    `}
`;

export const GridItem = styled.div`
  grid-column: ${props => (props.start ? props.start : "auto")} / span
    ${props => (props.span ? props.span : 1)};
  height: 100%;
  ${below.s`
    grid-column: auto / span ${props => {
      return props.medSpan ? props.medSpan : props.span ? props.span : 1;
    }}}
    `}
  ${below.xs`
    grid-column: auto / span ${props => {
      return props.smallSpan
        ? props.smallSpan
        : props.medSpan
        ? props.medSpan
        : props.span
        ? props.span
        : 1;
    }}}
    `}
`;

export const GridWrapper = styled(Grid)`
  margin-top: 2rem;
`;
