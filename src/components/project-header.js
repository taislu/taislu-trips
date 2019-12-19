import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

import AspectRatioBox from "./aspect-ratio-box";

export const Title = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes[4]}px;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

export const Description = styled(Text)`
  /*color: ${props => props.theme.colors.black};*/
  color: tomato;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.2em;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

export const Category = styled(Text)`
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: normal;
  margin: 0;
`;

const HeroWrap = styled(Box)`
  ${props =>
    props.truncated &&
    css`
      max-height: 200px;
      overflow: hidden;
    `}
`;

const Hero = ({ photo, truncated }) => {
  const withFixedAspectRatio = {
    ...photo.fluid,
    aspectRatio: 8 / 5
  };
  return (
    <HeroWrap mt={[4, 5]} truncated={truncated}>
      <AspectRatioBox ratio={8 / 5}>
        <Img
          loading={truncated ? "lazy" : "eager"}
          fluid={withFixedAspectRatio}
        />
      </AspectRatioBox>
    </HeroWrap>
  );
};

const ProjectHeader = ({ project, truncated }) => (
  <Box>
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]}>
        <Title as="h1">{project.title}</Title>
        {/** 
        <Box mt={3}>
          <Category as="h3">Next : {project.category.title}</Category>
        </Box>
        */}
      </Box>
      <Box width={[1, 1 / 2]}>
        <Box mt={[3, 0]}>
          <Description as="h2">{project.description}</Description>
        </Box>
      </Box>
    </Flex>
    <Hero photo={project.featuredphoto} truncated={truncated} />
  </Box>
);

export default ProjectHeader;
