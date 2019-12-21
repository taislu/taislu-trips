import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Box } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Description } from "../components/project-header";

//import Layout from "../components/layout";
import Layout from "../components/layout_1";

import Slider from "../components/slider_2"

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.space[3]}px;
`;

const SlideContainer = styled.div`
  width: 600;
  height: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px){
    width: 100%;
    height: 100%;
  }
`;

const ProjectGridItem = ({ project }) => {
  return (
    <AniLink
      style={{ textDecoration: "none" }}
      fade
      to={`/projects/${project.slug}`}
      duration={0.2}
    >
      <Box>
        <Img fluid={project.featuredphoto.fluid} />
        <Box mt={3}>
          <Description>{project.title}</Description>
        </Box>
      </Box>
    </AniLink>
  );
};

const Home = ({ data }) => {
  const projects = data.projects.edges; // graphql query
  return (
    <Layout> {/** src/components/layout.js */}
      {/** 
      <Text>Image Slider here !</Text>
      */}
      <SlideContainer>
        <Slider />
      </SlideContainer>
      
      <Grid> {/** styled components */}
        {projects.map(project => (
          <ProjectGridItem key={project.node.title} project={project.node} />
        ))}
      </Grid>
      
    </Layout>
  );
};

export const query = graphql`
  {
    projects: allDatoCmsProject {
      edges {
        node {
          slug
          title
          featuredphoto {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

export default Home;
