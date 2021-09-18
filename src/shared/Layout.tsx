import styled from "styled-components";

import PersistentBackdrop from "../sections/PersistentBackdrop";
import IDs from "../IDs";
import Footer from "./Footer";

const Layout = ({ children, footerColor, background, noAnim }) => {
  return (
    <>
      <PersistentBackdrop background={background} noAnim={noAnim} />
      {children}
      <Footer color={footerColor} />
      <PortalAnchor id={IDs.Portal} />
    </>
  );
};

const PortalAnchor = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
`;

export default Layout;
