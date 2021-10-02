import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Layout from "../src/shared/Layout";
import projects from "../public/projects.json";

export default function Logos() {
  const [cols, setCols] = useState([[], [], [], []]);

  useEffect(() => {
    let currentCol = 0;
    const _cols = [...cols];
    projects?.sections?.logos?.forEach((image) => {
      _cols[currentCol].push(<StyledImage src={image.imageURL} />);
      currentCol++;
      if (currentCol > 2) currentCol = 0;
    });
    setCols(_cols);
  }, []);

  return (
    <Layout noAnim background="FBFBFB" footerColor="141414">
      <Container>
        <HeadingContainer>
          <HeadingContent>
            Logos <Highlight>&</Highlight>
            <br /> Branding projects
          </HeadingContent>
          <HeadingSub>
            This section mainly consists of logos and branding guides - These
            were all done using programs from the Adobe, and Affinity suite. A
            handful of these are personal projects that were done purely for the
            sake of improving my skills, the other half are for clients and
            small businesses I’ve worked with - ex: dental offices, clothing
            brands, car detailing.. etc
          </HeadingSub>
        </HeadingContainer>
      </Container>
      <Row>
        <Column>{cols[0]}</Column>
        <Column>{cols[1]}</Column>
        <Column>{cols[2]}</Column>
      </Row>
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

  @media only screen and (max-width: 720px) {
    font-size: 10vw;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color3};
`;

const HeadingSub = styled.h2`
  max-width: 640px;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color4};

  @media only screen and (max-width: 720px) {
    font-size: 5vw;
  }
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
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    width: calc(100vw - 64px);
  }
`;

const GridItem = styled.div`
  grid-column-start: ${({ cStart }) => cStart};
  grid-column-end: ${({ cEnd }) => cEnd};
  grid-row-start: ${({ rStart }) => rStart};
  grid-row-end: ${({ rEnd }) => rEnd};
`;

const StyledImage = styled.img``;

const Column = styled.div`
  -ms-flex: 33%; /* IE10 */
  flex: 33%;
  max-width: 33%;

  & > ${StyledImage} {
    margin: 16px;
    vertical-align: middle;
    width: calc(100% - 32px);
  }

  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
`;
