import React from "react";
import styled from "styled-components";

import IDs from "../IDs";

const Projects = () => {
  return (
    <Container id={IDs.Projects}>
      <ContentContainer>
        <Heading>
          Here are a handful of my projects - a lil mix of personal, and
          freelance projects :)
        </Heading>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  margin: 32px;
  width: calc(100% - 64px);
  height: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.color4};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

export default Projects;
