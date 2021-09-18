import React, { ReactNode, useEffect, forwardRef, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

interface ItemScrollerProps {
  children: ReactNode | ReactNode[];
  heading: string;
  reversed?: boolean;
  href?: string;
}

const ItemScroller = forwardRef(
  (
    { heading, children, href }: ItemScrollerProps,
    ref: React.MutableRefObject<HTMLDivElement>
  ) => {
    return (
      <Container>
        <HeadingSection>
          <HeadingContent>
            <Heading>{heading}</Heading>
            <ViewMoreLink href={href}>view more</ViewMoreLink>
          </HeadingContent>
        </HeadingSection>
        <ScrollContainer>
          <ScrollContent ref={ref}>{children}</ScrollContent>
        </ScrollContainer>
      </Container>
    );
  }
);

const Container = styled.div`
  width: 100%;
  max-width: inherit;
  height: fit-content;
`;

const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingContent = styled.div`
  width: calc(100%);
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid ${({ theme }) => theme.color4};
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 720px) {
    width: calc(100vw - 64px);
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.color4};
  margin-block-start: 0.25em;
  margin-block-end: 0em;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
`;

const ViewMoreLink = styled.a`
  color: rgba(20, 20, 20, 0.45);
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 300;
  line-height: 2rem;
  margin-block-start: 0.25em;
  margin-block-end: 0em;
  text-decoration: none;
`;

const ScrollContainer = styled.div`
  height: auto;
  flex: 1;
  overflow: hidden;
`;

const ScrollContent = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export default ItemScroller;
