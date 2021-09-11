import React, { useEffect } from "react";
import styled from "styled-components";

import IDs from "../IDs";

const ProjectsScroller = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: `#${IDs.ProjectsScroller}`,
      endTrigger: `#${IDs.ProjectsScroller}`,
      start: "top top",
      end: "bottom bottom",
      pin: `#${IDs.ProjectsScroller}-content`,
    });
  }, []);

  return (
    <Container id={IDs.ProjectsScroller}>
      <ContentContainer
        id={`${IDs.ProjectsScroller}-content`}
      ></ContentContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 200vh;
`;

const ContentContainer = styled.div`
  margin: 32px;
  width: calc(100% - 64px);
  height: 100vh;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ProjectsScroller;
