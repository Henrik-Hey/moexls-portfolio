import React, { useEffect } from "react";
import styled from "styled-components";

import IDs from "../IDs";
import useWindowSize from "../_hooks/useWindowSize";

const About = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (width < 720) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: `#${IDs.About}`,
      endTrigger: `#${IDs.About}`,
      start: "top top",
      end: "bottom bottom",
      pin: `#${IDs.About}-content`,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [width, height]);

  return (
    <Container id={IDs.About}>
      <ContentContainer id={`${IDs.About}-content`}>
        <Heading>
          Welcome to my digital playground & portfolio website :D
        </Heading>
        <SubHeading>
          I’m a freelance designer specializing in branding and marketing, I
          also do a lot of illustrations, copywriting, UI/UX designs on the
          side. <br />
          <i>My favorite programs are:</i>
        </SubHeading>
        <ProgramContainer>
          <ProgramImage src="/adobe-photoshop-logo.png" />
          <ProgramImage src="/adobe-illustrator.png" />
          <ProgramImage src="/figma-logo.png" />
          <ProgramImage src="/adobe-indesign-logo.png" />
        </ProgramContainer>
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
  overflow: hidden;

  @media only screen and (max-width: 720px) {
    padding-top: 20vh;
    width: calc(100vw - 64px);
    min-height: 100vh;
  }
`;

const ContentContainer = styled.div`
  width: calc(100%);
  height: fit-content;
  min-height: 100vh;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 5.625rem;
  color: ${({ theme }) => theme.color4};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;

  @media only screen and (max-width: 720px) {
    font-size: 10vw;
  }
`;

const SubHeading = styled.p`
  max-width: 720px;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color4};

  @media only screen and (max-width: 720px) {
    font-size: 5vw;
  }
`;

const ProgramContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProgramImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 8px;
`;

export default About;
