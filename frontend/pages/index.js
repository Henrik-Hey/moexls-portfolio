import react from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import { PaletteProvider } from "../src/providers/PaletteProviders";
import PersistentBackdrop from "../src/sections/PersistentBackdrop";
import Intro from "../src/sections/Intro";
import About from "../src/sections/About";
import Projects from "../src/sections/Projects";
import IDs from "../src/IDs";

export default function Home() {
  return (
    <PaletteProvider>
      <Head>
        <title>Moe.XSL</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <PersistentBackdrop />
      <Intro />
      <About />
      <Projects />
      <PortalAnchor id={IDs.Portal} />
      <GlobalStyles />
    </PaletteProvider>
  );
}

const PortalAnchor = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
`;

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-padding-top: 20vh;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0px;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
  }
`;
