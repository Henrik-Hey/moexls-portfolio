import styled from "styled-components";

import Layout from "../src/shared/Layout";
import projects from "../public/projects.json";
import { useEffect, useState } from "react";

export default function Photography() {
  const [cols, setCols] = useState([]);

  useEffect(() => {
    let currentCol = 0;
    let currentSegmentChildren = [];
    const _cols = [];
    projects?.sections?.photos?.forEach((image) => {
      if (currentCol > 1) {
        _cols.push(<SegmentRow>{currentSegmentChildren}</SegmentRow>);
        _cols.push(
          <SegmentRow>
            <StyledImageFull src={image.imageURL} />
          </SegmentRow>
        );
        currentCol = 0;
        currentSegmentChildren = [];
      } else {
        currentSegmentChildren.push(<StyledImage src={image.imageURL} />);
        currentCol++;
      }
    });
    setCols(_cols);
  }, []);

  return (
    <Layout noAnim background="FBFBFB">
      <Container>
        <HeadingContainer>
          <HeadingContent>
            Profess
            <wbr />
            ional
            <br /> Photo
            <wbr />
            graphy
          </HeadingContent>
          <HeadingSub>
            This section mainly consists of the studio photography I did while
            running my freelance business. I worked with many different models,
            and expiremented a lot with different types of lenses, lights, and
            poses.
            <br />
            <br />
            My experience also allowed me to excel at programs like photoshop
            and lightroom due to the edit nature of the photos that I took.
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
  display: flex;
  flex-direction: column;
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
  width: calc(50% - 16px);
  margin: 8px;
  flex: 1;
  object-fit: cover;
`;

const StyledImageFull = styled.img`
  width: calc(100% - 16px);
  margin: 8px;
  flex: 2;
`;

const SegmentRow = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;
