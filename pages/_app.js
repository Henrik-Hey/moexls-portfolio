/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import { PaletteProvider } from "../src/providers/PaletteProviders";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BebasKai;
    src: url("/fonts/bebasKai/BebasKai.ttf");
  }

  @font-face {
    font-family: Buffalo;
    src: url("/fonts/buffalo/Buffalo-Regular.ttf");
  }

  * {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-padding-top: 0vh;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0px;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
  }

  @keyframes feedAnimation {
      0% { transform: translateX(0%); }
    100% { transform: translateX(-200%); }
  }

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MOE.XLS</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollToPlugin.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <PaletteProvider>
        <Component {...pageProps} />
      </PaletteProvider>
    </>
  );
}
