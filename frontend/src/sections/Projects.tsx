import React, { useEffect } from "react";
import styled from "styled-components";

import IDs from "../IDs";
import useWindowSize from "../_hooks/useWindowSize";

const Projects = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (width < 720) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: `#${IDs.Projects}`,
      endTrigger: `#${IDs.Projects}`,
      start: "top top",
      end: "bottom bottom",
      pin: `#${IDs.Projects}-content`,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [width, height]);

  return (
    <Container id={IDs.Projects}>
      <ContentContainer id={`${IDs.Projects}-content`}>
        <Heading>
          Here are a handful of my projects - a lil mix of personal, and
          freelance projects <Highlight>:)</Highlight>
        </Heading>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: fit-content;
  min-height: 200vh;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentContainer = styled.div`
  width: calc(100%);
  height: 100vh;
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

const Highlight = styled.span`
  color: ${({ theme }) => theme.color3};
`;

export default Projects;
