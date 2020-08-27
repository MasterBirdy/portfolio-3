import styled from "styled-components";

export const Flex = styled.div`
  padding: ${props => (props.yPad ? props.yPad : 0)}rem
    ${props => (props.xPad ? props.xPad : 0)}rem;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;
