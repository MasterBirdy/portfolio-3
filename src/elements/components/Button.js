import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 2.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: white;
  border: 1px solid #8b939a;
  background: #8b939a;
  background: linear-gradient(315deg, #8b939a 0%, #5b6467 100%);
  border-radius: 20px;
  box-shadow: 9px 9px 9px -12px rgba(153, 153, 153, 1);
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: translateY(-2px);
    box-shadow: 8px 8px 9px -8px rgba(153, 153, 153, 1);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 9px 9px 9px -11px rgba(153, 153, 153, 1);
  }
`;
