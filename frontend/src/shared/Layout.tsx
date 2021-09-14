import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import { PaletteProvider } from "../providers/PaletteProviders";
import PersistentBackdrop from "../sections/PersistentBackdrop";
import IDs from "../IDs";
import Footer from "./Footer";

const Layout = ({ children, footerColor }) => {
  return (
    <PaletteProvider>
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
      <PersistentBackdrop />
      {children}
      <Footer color={footerColor} />
      <PortalAnchor id={IDs.Portal} />
      <GlobalStyles />
    </PaletteProvider>
  );
};

const PortalAnchor = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
`;

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
`;

export default Layout;
