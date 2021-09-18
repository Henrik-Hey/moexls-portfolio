import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

export default function UIUX() {
  return (
    <Container>
      <Section>
        <Paragraph>
          CLICK <Link href="/">HERE</Link> TO BE RETURNED TO THE HOME PAGE
        </Paragraph>
      </Section>
      <Section>
        <VertFeed>
          <VertFeedContent>
            <YellowItem>404</YellowItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <YellowItem>404</YellowItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <YellowItem>404</YellowItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <YellowItem>404</YellowItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <YellowItem>404</YellowItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
            <FeedItem>404</FeedItem>
          </VertFeedContent>
        </VertFeed>
      </Section>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.color4};
`;

const Section = styled.div`
  flex: 1;
  min-width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-style: normal;
  text-decoration: none;
  font-family: Buffalo;
  font-weight: 100;
  font-size: 8vh;
  line-height: 8vh;
  width: fit-content;
  max-width: 420px;
  color: ${({ theme }) => theme.color1};
`;

const Link = styled.a`
  font-family: Buffalo;
  font-style: normal;
  text-decoration: none;
  font-weight: 900;
  font-size: 8vh;
  line-height: 8vh;
  color: ${({ theme }) => theme.color1};
`;

const VertFeed = styled.div`
  overflow: hidden;
  height: 100%;
`;

const VertFeedContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const anim = keyframes`
      0% { transform: translateY(0%); }
    100% { transform: translateY(-200%); }
`;

const FeedItem = styled.div`
  font-style: normal;
  text-decoration: none;
  font-family: Buffalo;
  font-weight: 900;
  font-size: 40vh;
  line-height: 35vh;
  width: fit-content;
  box-sizing: border-box;
  text-align: center;
  color: ${({ theme }) => theme.color1};
  animation: ${anim} linear 10s infinite;
`;

const YellowItem = styled(FeedItem)`
  color: ${({ theme }) => theme.color3};
`;
