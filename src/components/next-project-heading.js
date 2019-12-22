import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";

const Heading = styled(Text)`
  color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: normal;
`;

const Rule = styled.hr`
  background: #e3e4e5;
  height: 1px;
  border: 0;
`;

const NextProjectHeading = () => (
  <Box mb={1}>
    <Rule />
    <Heading pt={3}>Click Here To Continue</Heading>
  </Box>
);

export default NextProjectHeading;
