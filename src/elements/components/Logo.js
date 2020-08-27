import styled from "styled-components";

export const Logo = styled.div`
  position: relative;
  background: #8b939a;
  background: linear-gradient(315deg, #8b939a 0%, #5b6467 100%);
  width: 42px;
  height: 42px;
  border-radius: 3px;
  :after {
    transition: all 0.3s ease;
    position: absolute;
    background: #d7816a;
    opacity: 0;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
    border-radius: 3px;
    content: "";
    background: linear-gradient(315deg, #d7816a 0%, #bd4f6c 100%);
  }

  :hover {
    :after {
      opacity: 1;
    }
  }
`;

export const Letter = styled.p`
  position: absolute;
  display: inline-block;
  top: 35%;
  left: 45%;
  color: white;
  font-family: Caveat, serif;
  font-weight: 700;
  font-size: 3.5rem;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
