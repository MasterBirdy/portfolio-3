import { css } from "styled-components";

const size = {
  xs: 480,
  s: 768,
  m: 1024,
  l: 1200,
};

export const below = Object.keys(size).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
