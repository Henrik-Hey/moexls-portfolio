import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Image from "next/image";

import ItemScroller from "../shared/ItemScroller";
import IDs from "../IDs";
import projects from "../../public/projects.json";

const ProjectsScroller = () => {
  const scroll1 = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const scroll2 = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const scroll3 = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const scroll4 = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (
      !scroll1.current ||
      !scroll2.current ||
      !scroll3.current ||
      !scroll4.current
    )
      return;

    const timeline = gsap.timeline();

    timeline.fromTo(
      scroll1.current,
      { scrollTo: { x: scroll1.current.scrollWidth / 2 } },
      { scrollTo: { x: 0 } },
      0
    );

    timeline.fromTo(
      scroll2.current,
      { scrollTo: { x: 0 } },
      { scrollTo: { x: scroll2.current.scrollWidth / 2 } },
      0
    );

    timeline.fromTo(
      scroll3.current,
      { scrollTo: { x: scroll3.current.scrollWidth / 2 } },
      { scrollTo: { x: 0 } },
      0
    );

    timeline.fromTo(
      scroll4.current,
      { scrollTo: { x: 0 } },
      { scrollTo: { x: 1000 } },
      0
    );

    ScrollTrigger.create({
      trigger: `#${IDs.ProjectsScroller}`,
      endTrigger: `#${IDs.ProjectsScroller}`,
      start: "top-=50% top",
      end: "bottom top",
      animation: timeline,
      scrub: true,
    });
  }, [scroll1, scroll2, scroll3, scroll4]);

  return (
    <Container id={IDs.ProjectsScroller}>
      <ContentContainer>
        <ItemScroller heading={`Brand Logos`} ref={scroll1} href={"/logos"}>
          {projects.sections.logos.slice(0, 8).map((image, idx) => (
            <Item key={`logos@idx=${idx}`}>
              <StyledImage width={300} height={300} src={image.imageURL} />
            </Item>
          ))}
        </ItemScroller>
        <ItemScroller heading={`UX / UI`} ref={scroll2} reversed href={"/UIUX"}>
          {projects.sections.user_interface.slice(0, 8).map((image, idx) => (
            <Item key={`user_interface@idx=${idx}`}>
              <StyledImage width={300} height={300} src={image.imageURL} />
            </Item>
          ))}
        </ItemScroller>
        <ItemScroller heading={`Photography`} ref={scroll3}>
          {projects.sections.photos.slice(0, 8).map((image, idx) => (
            <Item key={`photos@idx=${idx}`}>
              <StyledImage width={300} height={300} src={image.imageURL} />
            </Item>
          ))}
        </ItemScroller>
        <ItemScroller heading={`Illustrations`} ref={scroll4} reversed>
          {projects.sections.illustrations.slice(0, 8).map((image, idx) => (
            <Item key={`illustrations@idx=${idx}`}>
              <StyledImage width={300} height={300} src={image.imageURL} />
            </Item>
          ))}
        </ItemScroller>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  margin-top: 10vh;
  min-height: 250vh;
`;

const ContentContainer = styled.div`
  width: calc(100%);
  height: 100vh;
`;

const Item = styled.div`
  position: relative;
  min-width: 300px;
  height: 300px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.color3};
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProjectsScroller;
