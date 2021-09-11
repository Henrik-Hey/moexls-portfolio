import React, { useEffect } from "react";
import styled from "styled-components";

import IDs from "../IDs";

const About = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: `#${IDs.About}`,
      endTrigger: `#${IDs.About}`,
      start: "top top",
      end: "bottom bottom",
      pin: `#${IDs.About}-content`,
    });
  }, []);

  return (
    <Container id={IDs.About}>
      <ContentContainer id={`${IDs.About}-content`}>
        <Heading>
          Welcome to my digital playground / portfolio website :D
        </Heading>
        <SubHeading>
          I’m a freelance designer specializing in branding and marketing, I
          also do a ton of illustrations, copywriting, UI/UX designs on the
          side. My favorite programs are Photoshop, Illustrator, Indesign,
          Figma, and Affinity photo / designer (:
        </SubHeading>
      </ContentContainer>
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

const Heading = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.color4};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

const SubHeading = styled.p`
  max-width: 640px;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color4};
`;

export default About;
