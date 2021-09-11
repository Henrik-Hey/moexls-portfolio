import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";

import IDs from "../IDs";

const Intro = () => {
  const contentRef = useRef<HTMLHeadingElement>(
    null
  ) as React.MutableRefObject<HTMLHeadingElement>;
  const subHeadingRef = useRef<HTMLHeadingElement>(
    null
  ) as React.MutableRefObject<HTMLHeadingElement>;

  useEffect(() => {
    BuildAnimation(contentRef, subHeadingRef);
  }, [contentRef]);

  return (
    <Container id={IDs.Intro}>
      <HeadingContainer>
        <HeadingContent ref={contentRef}>
          Hello, I’m Moe. A Freelance Designer based in London, ON
        </HeadingContent>
        <HeadingSub ref={subHeadingRef}>
          I use expressive design to create brand assets for small and big
          businesses. I create everything (and anything) from tiny business
          cards, to fullscale website prototypes and brand guides to help
          businesses thrive.
        </HeadingSub>
      </HeadingContainer>
    </Container>
  );
};

const BuildAnimation = (
  content: React.MutableRefObject<HTMLHeadingElement>,
  subHeading: React.MutableRefObject<HTMLHeadingElement>
) => {
  if (!content.current) return;

  const timeline = gsap.timeline();

  timeline.fromTo(
    content.current,
    {
      x: "150%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    6
  );

  timeline.fromTo(
    subHeading.current,
    {
      x: "150%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    6.5
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingContainer = styled.header`
  position: relative;
  width: 100%;
  max-width: 864px;
  margin-left: 32px;
  margin-right: 32px;
`;

const HeadingContent = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.color1};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

const HeadingSub = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color1};
`;

export default Intro;
