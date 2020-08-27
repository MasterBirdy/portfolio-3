import styled from "styled-components";

export const Header1 = styled.h1`
  color: ${props => (props.color ? props.color : "#222")};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 3.125rem;
`;

export const AnimatedHeader1 = styled(Header1)`
  position: relative;
  :after {
    position: absolute;
    display: block;
    height: 100%;
    top: 0;
    left: 0;
    width: 0%;
    content: "";
    z-index: -1;
    background-color: yellow;
    transition: all 1s cubic-bezier(0.83, 0.21, 0.83, 0.67);
  }

  :hover {
    :after {
      width: 100%;
    }
  }
`;

export const Header2 = styled.h2`
  color: #555;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 1)};
  font-size: 2.25rem;
`;

export const BigP = styled.p`
  color: #222;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
`;
