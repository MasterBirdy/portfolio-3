import styled from "styled-components";
import { animated } from "react-spring";

export const ColoredSpan = styled.span`
  position: relative;
  display: inline-block;
  color: #222;
  overflow-y: hidden;
  vertical-align: top;
`;

export const ColoredSpanBackground = styled(animated.span)`
  position: absolute;
  display: block;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  z-index: -1;
  background-color: ${props => (props.color ? props.color : "transparent")};
`;
