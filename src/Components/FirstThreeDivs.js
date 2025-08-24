import React from "react";
import styled from "styled-components";

const Page = styled.main`
  min-height: 100vh;
  background-color: #0D9DD4;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 86px;
  padding-left: 76px;
  padding-right: 85.42px;
  display: grid;
  grid-template-columns: minmax(260px, 34%) 1fr;
  column-gap: clamp(12px, 2vw, 28px);
  row-gap: 24px;
  align-items: start;
`;

const LogoEllipse = styled.div`
  position: absolute;
  top: -25%;
  right: -8.5%;
  width: clamp(120px, 18vw, 180px);
  height: clamp(120px, 18vw, 180px);
  background: url("/ellipse.svg") no-repeat center/contain;
  z-index: 3;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EllipseCover = styled.img`
  position: absolute;
  inset: 0;
  width: 97%;
  height: auto;
  object-fit: contain;
  z-index: 4;
  pointer-events: none;
  transform: translate(5%, -2%);
`;

const CrownWrapper = styled.a`
  position: relative;
  width: 50%;
  height: auto;
  bottom: -6%;
  left: -10%;
  cursor: pointer;
  text-decoration: none;
  display: block;
  z-index: 7;
`;

const WhiteCrown = styled.img`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: auto;
  z-index: 5;
`;

const BlackCrown = styled.img`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 95%;
  height: auto;
  z-index: 6;
`;

const NSOPimage = styled.img`
  box-sizing: border-box;
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
  width: 95%;
  height: auto;
  border: 6.729px solid #000;
  display: block;
  max-width: 100%;
`;

const BlueBox = styled.div`
  box-sizing: border-box;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  width: 100%;
  height: 307.578px;
  background-color: #56DDE1;
  border: 6.729px solid #000;
  overflow: visible;
  justify-self: end;
`;

const NYCbg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  opacity: 0.8;
  z-index: 1;
`;

const WelcomeText = styled.img`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  /* Responsive width that grows/shrinks with the viewport,
    but never smaller than 260px or larger than 720px */
  width: clamp(260px, 52vw, 720px);
  max-width: 100%;   /* still respects the BlueBox boundary */
  height: auto;
  z-index: 2;
  pointer-events: none;
`;

const LetterCard = styled.div`
  box-sizing: border-box;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: #f7f7f7;
  border: 6.729px solid #000;
  padding: 55px 36px;

  color: #2C2C2C;
  font-family: 'Righteous';
  font-size: 19.529px;
  font-style: normal;
  font-weight: 200;
  line-height: 32px;
`;

const Signatures = styled.div`
  display: flex;
  width: 359.541px;
  height: 100.788px;
  transform: rotate(0.142deg);
  align-items: center;
  gap: 60.726px;
  flex-shrink: 0;
  border-radius: 1.481px;
  margin-left: 10px;
`;

const Signature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.05;
`;

const SigName = styled.div`
  font-family: "Oooh Baby";
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 6px;
  font-style: italic;
`;

const SigTitle = styled.div`
  font-family: 'Righteous';
  font-size: 19.529px;
  font-weight: 800;
`;

const firstThreeDivs = () => {
  return (
    <Page>
      <Container>
        <NSOPimage src="nsop.png" alt="NSOP sketch" />

        <BlueBox>
        <LogoEllipse>
          <EllipseCover src="/ellipseCover.svg" alt="ellipse cover" />
          <CrownWrapper href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
            <WhiteCrown src="/whiteCrown.png" alt="white crown logo" />
            <BlackCrown src="/blackCrown.png" alt="black crown logo" />
          </CrownWrapper>
        </LogoEllipse>
          <NYCbg src="NYCbg.png" alt="NYC skyline" />
          <WelcomeText src="welcomeToColumbia.png" alt="Welcome to Columbia" />
        </BlueBox>

        <LetterCard>
          <h1>Dear class of 2029 [Not actual text],</h1>
          <div>
            Welcome to Columbia! As you immerse yourself in the University
            community and settle into your new home, you will encounter a campus
            facing a pivotal moment in its history as you, too, undergo
            significant change. You probably have lots of lingering questions
            about what the years ahead will look like and how to navigate all of
            Columbia’s different facets. Inside this special issue, you will
            find everything we at Spectator think first-year students should
            know as you acquaint yourself with campus life.
          </div>
          <br />
          <div>ABOUT SPECTATOR</div>
          <div>
            Spectator is a financially independent nonprofit organization and
            the largest student-run news media group on campus, serving tens of
            thousands of readers across Columbia, Morningside Heights, and West
            Harlem. We have a 148-year tradition of documenting history as it
            unfolds through in-depth, well-reported stories that hold
            institutional power to account.
          </div>
          <br />
          <div>
            Central to our mission is helping our audience make the most of
            their experience at Columbia and its surrounding communities through
            our award-winning journalism. With Spectator’s publications and
            products, we aim to identify and directly address the needs of
            students, faculty, staff, and residents. Across all of our
            departments—which consist of hundreds of reporters, multimedia
            journalists, designers, analysts, salespeople, engineers, and
            more—we work to keep you informed and continuously improve your
            college experience within and beyond the campus gates.
          </div>
          <br />
          <div>JOINING SPECTATOR AND WORK STUDY</div>
          <div>
            Joining Spec is one of the best ways to kick off your four years at
            Columbia. When you become a member of the Spec family, nestled in
            our office in Riverside Church, you step into a community of sharp
            and passionate students who care deeply about the work they do.
            You’ll build lifelong connections and friendships and learn skills
            that will define your Columbia experience.
          </div>
          <br />
          <div>
            Working at Spec is an unmatched opportunity to be part of a fully
            independent organization and make a tangible difference in a
            community of which you are now a member. We shape curious and eager
            staff members across journalism, business, and tech into the best
            versions of themselves as they grow as leaders, thinkers, and people
            ready to enter any career path they choose to pursue.
          </div>
          <br />
          <br />
          <Signatures>
            <Signature>
              <SigName>First Last</SigName>
              <SigTitle>Editor in Chief</SigTitle>
            </Signature>

            <Signature>
              <SigName>First Last</SigName>
              <SigTitle>Managing Editor</SigTitle>
            </Signature>
          </Signatures>
        </LetterCard>
      </Container>
    </Page>
  );
};

export default firstThreeDivs;
