import styled from "styled-components";

import IDs from "../IDs";

interface FooterProps {
  color?: string;
}

const Footer = ({ color }: FooterProps) => {
  return (
    <StyledFooter $color={color}>
      <FooterSection>
        <MoeHeading>MOE ALS</MoeHeading>
        <TitleHeading>
          FREELANCE GRAPHIC
          <br />
          DESIGNER
        </TitleHeading>
      </FooterSection>
      <FooterSection>
        <NavLayout>
          <NavCol>
            <NavHeading>SOCIAL</NavHeading>
            <NavLink href="https://www.linkedin.com/in/moe-als-508908193/">
              LINKEDIN
            </NavLink>
            <NavLink href="https://www.instagram.com/design.moexls/">
              INSTAGRAM(DESIGN)
            </NavLink>
            <NavLink href="https://www.instagram.com/moe.xls/">
              INSTAGRAM(PHOTOGRAPHY)
            </NavLink>
            <NavLink href="https://dribbble.com/Moexls">DRIBBBLE</NavLink>
          </NavCol>
          <NavCol>
            <NavHeading>NAVIGATION</NavHeading>
            <NavLink href={`/#${IDs.Intro}`}>HOME</NavLink>
            <NavLink href={`/logos`}>BRANDING</NavLink>
            <NavLink href={`/UIUX`}>UX / UI</NavLink>
            <NavLink href={`/photography`}>PHOTOGRAPHY</NavLink>
            <NavLink href={`/illustrations`}>ILLUSTRATIONS</NavLink>
          </NavCol>
          <NavCol>
            <NavHeading>CONTACT</NavHeading>
            <NavLink href="mailto:design.moexls@gmail.com">
              DESIGN.MOEXLS@GMAIL.COM
            </NavLink>
          </NavCol>
        </NavLayout>
      </FooterSection>
    </StyledFooter>
  );
};

interface StyledFooterProps {
  $color?: string;
}

const StyledFooter = styled.footer<StyledFooterProps>`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid
    ${({ theme, $color }) => ($color ? `#${$color}` : theme.color4)};
  color: ${({ theme, $color }) => ($color ? `#${$color}` : theme.color4)};
  display: flex;
  flex-direction: row;
  z-index: 1;
  margin-top: 16px;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    width: calc(100vw - 64px);
    padding-bottom: 32px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  color: inherit;
`;

const MoeHeading = styled.h3`
  font-size: 1.125em;
  font-family: BebasKai;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.24em;
  margin-block-start: 30px;
  margin-block-end: 30px;
  color: inherit;
`;

const TitleHeading = styled.h4`
  font-size: 2.25rem;
  font-family: BebasKai;
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 30px;
  color: inherit;
`;

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: inherit;
  margin-bottom: 32px;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const NavCol = styled.div`
  color: inherit;
  flex: 1;
`;

const NavHeading = styled.h3`
  font-family: BebasKai;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.24em;
  font-size: 1.125em;
  margin-block-start: 30px;
  margin-block-end: 30px;
  color: inherit;
`;

const NavLink = styled.a`
  display: block;
  font-family: Buffalo;
  font-weight: 100;
  font-size: 1.125em;
  letter-spacing: 0.035em;
  color: inherit;
  text-decoration: none;
`;

export default Footer;
