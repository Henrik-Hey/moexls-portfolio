import styled from "styled-components";

import Layout from "../src/shared/Layout";
import projects from "../public/projects.json";
import { useEffect, useState } from "react";

export default function UIUX() {
  const [cols, setCols] = useState([]);

  useEffect(() => {
    const _cols = [];
    projects?.sections?.userInterface?.forEach((image) => {
      _cols.push(<StyledImage src={image.imageURL} />);
    });
    setCols(_cols);
  }, []);

  return (
    <Layout noAnim background="FBFBFB">
      <Container>
        <HeadingContainer>
          <HeadingContent>
            User Interface <Highlight>&</Highlight>
            <br /> User Experience
          </HeadingContent>
          <HeadingSub>
            This section mainly consists of Personal UI/ UX projects. I did
            these during my freetime to explore different methods of design.
            Keeping the UI fresh, modern, and clean was my main priority, but at
            the same time I wanted to make sure it looked unique, professional,
            and well-polished.
          </HeadingSub>
        </HeadingContainer>
      </Container>
      <Row>{cols}</Row>
    </Layout>
  );
}

const Container = styled.section`
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 720px) {
    padding-top: 20vh;
    width: calc(100vw - 64px);
  }
`;

const HeadingContainer = styled.header`
  position: relative;
  width: 100%;
  max-width: 930px;
`;

const HeadingContent = styled.h1`
  font-size: 5.75rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color4};
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color3};
`;

const HeadingSub = styled.h2`
  max-width: 640px;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color4};
`;

const Row = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;

  width: 100vw;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 720px) {
    padding-top: 20vh;
    width: calc(100vw - 64px);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 32px;
`;
