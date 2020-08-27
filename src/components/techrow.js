import React from "react";
import styled from "styled-components";
import { Grid, GridItem, brands, below } from "../elements/utilities";
import { darken } from "polished";
import { useTransition, animated } from "react-spring";

const TechRow = ({ marginTop, items }) => {
  const technologiesTransition = useTransition(items, item => item.className, {
    trail: 115,
    from: {
      opacity: 0,
      transform: "translateY(2rem)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0rem)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(2rem)",
    },
  });

  return (
    <TechnologyWrapper>
      <TechnologyGrid marginTop={marginTop} columns="10">
        {technologiesTransition.map(({ item, key, props }) => {
          return (
            <AnimatedGridItem
              className={item.className}
              key={key}
              style={props}
              medSpan="2"
              smallSpan="5"
            >
              <ConditionalFlex>
                <TechItem brand={item.className}>
                  {React.createElement(item.component, {})}
                </TechItem>
              </ConditionalFlex>
            </AnimatedGridItem>
          );
        })}
      </TechnologyGrid>
    </TechnologyWrapper>
  );
};

export const ConditionalFlex = styled.div`
  ${below.m`
    display: flex;
    justify-content: center;
    align-items: center;
    `}
`;

export const AnimatedGridItem = animated(GridItem);

export const TechItem = styled.div`
  display: inline-block;
  position: relative;
  color: ${props => (props.brand ? brands[props.brand] : "black")};

  :after {
    position: absolute;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: lowercase;
    color: ${props =>
      props.brand ? darken(0.2, brands[props.brand]) : "black"};
    content: '${props => (props.brand ? props.brand : "tech")}';
    bottom: -0.75rem;
    left: 50%;
    transform: translate(-50%, 1rem);
    opacity: 0;
    transition: opacity 0.1s ease-out, transform 0.2s ease-out;
  }

  :hover {
    :after {
      opacity: 1;
      transform: translate(-50%, 0rem);
    }
  }
`;

export const TechnologyGrid = styled(Grid)`
  grid-row-gap: 3rem;
  font-size: 6.5rem;
`;

export const TechnologyWrapper = styled.div``;

export default TechRow;
