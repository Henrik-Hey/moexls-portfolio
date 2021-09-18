import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import IDs from "../IDs";

const MAILTOLINK = `mailto:design.moexls@gmail.com`;
const Contact = () => {
  return (
    <Container id={IDs.Contact}>
      <ContentContainer>
        <HeadingContent>
          <Heading>
            <Highlight>Need some design</Highlight>
            <br /> <Highlight>work done?</Highlight> Send me
            <br /> an email & let’s chat!
          </Heading>
        </HeadingContent>
        <FeedContainer>
          <FeedContent>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
            <FeedItem href={MAILTOLINK}>CONTACT</FeedItem>
          </FeedContent>
        </FeedContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  @media only screen and (max-width: 720px) {
    width: calc(100vw - 64px);
  }
`;

const ContentContainer = styled.div`
  width: calc(100%);
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingContent = styled.div`
  width: 100%;
  display: flex;
`;

const Heading = styled.h2`
  font-size: 5.65rem;
  color: ${({ theme }) => theme.color1};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;

  @media only screen and (max-width: 720px) {
    font-size: 10vw;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color3};
`;

const BigMoe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigMoeBG = styled.div`
  background: ${({ theme }) => theme.color4};
  overflow: hidden;
  height: 100%;
  border-radius: 50%;
`;

const BigMoeImage = styled(Image)`
  height: 100%;
  object-fit: cover;
`;

const FeedContainer = styled.div`
  overflow: hidden; /* HIDE SCROLL BAR */
  transition: opacity 0.3s;
`;

const FeedContent = styled.div`
  display: flex;
  position: relative;
`;

const FeedAnim = keyframes`
     0% { transform: translateX(0%); }
  100% { transform: translateX(-200%); }
`;

const FeedItem = styled.a`
  font-style: normal;
  text-decoration: none;
  font-family: Buffalo;
  font-weight: normal;
  font-size: 5rem;
  margin-top: 32px;
  margin-bottom: 32px;
  width: fit-content;
  box-sizing: border-box;
  text-align: center;
  color: ${({ theme }) => theme.color1};
  animation: ${FeedAnim} linear 10s infinite;

  &::after {
    content: "|";
  }

  @media only screen and (max-width: 720px) {
    font-size: 10vw;
  }
`;

export default Contact;
