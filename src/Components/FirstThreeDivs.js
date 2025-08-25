import React from "react";
import styled from "styled-components";

/* Page background like your mock */
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

//   @media (max-width: 900px) {
//     grid-template-columns: 1fr;
//   }
`;

const NSOPimage = styled.img`
  box-sizing: border-box;
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
  width: 90%;
  height: auto;
  border: 8.729px solid #000;
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
  border: 8.729px solid #000;
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
  opacity: 0.28;
  z-index: 1;
`;

const WelcomeText = styled.img`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: auto;
  z-index: 2;
  pointer-events: none;
`;

const LetterCard = styled.div`
    box-sizing: border-box;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background: #f7f7f7;
    border: 8.729px solid #000;
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

/* Each signature block */
const Signature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.05;
`;

/* Name (script-style) */
const SigName = styled.div`
  font-family: "Oooh Baby";
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 6px;
  font-style: italic;
`;

/* Title (bold sans) */
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
          <NYCbg src="NYCbg.png" alt="NYC skyline" />
          <WelcomeText src="welcomeToColumbia.png" alt="Welcome to Columbia" />
        </BlueBox>

        <LetterCard>
            <h1>Dear class of 2029 [Not actual text],</h1>
            <div>
                Welcome to Columbia! As you immerse yourself in the University community and settle into your new home, you will encounter a campus facing a pivotal moment in its history as you, too, undergo significant change. You probably have lots of lingering questions about what the years ahead will look like and how to navigate all of Columbia’s different facets. Inside this special issue, you will find everything we at Spectator think first-year students should know as you acquaint yourself with campus life.
            </div>
            <br></br>
            <div>ABOUT SPECTATOR</div>
            <div>
                Spectator is a financially independent nonprofit organization and the largest student-run news media group on campus, serving tens of thousands of readers across Columbia, Morningside Heights, and West Harlem. We have a 148-year tradition of documenting history as it unfolds through in-depth, well-reported stories that hold institutional power to account.
            </div>
            <br></br>
            <div>
                Central to our mission is helping our audience make the most of their experience at Columbia and its surrounding communities through our award-winning journalism. With Spectator’s publications and products, we aim to identify and directly address the needs of students, faculty, staff, and residents. Across all of our departments—which consist of hundreds of reporters, multimedia journalists, designers, analysts, salespeople, engineers, and more—we work to keep you informed and continuously improve your college experience within and beyond the campus gates.
            </div>
            <br></br>
            <div>JOINING SPECTATOR AND WORK STUDY</div>
            <div>
                Joining Spec is one of the best ways to kick off your four years at Columbia. When you become a member of the Spec family, nestled in our office in Riverside Church, you step into a community of sharp and passionate students who care deeply about the work they do. You’ll build lifelong connections and friendships and learn skills that will define your Columbia experience.
            </div>
            <br></br>
            <div>
                Working at Spec is an unmatched opportunity to be part of a fully independent organization and make a tangible difference in a community of which you are now a member. We shape curious and eager staff members across journalism, business, and tech into the best versions of themselves as they grow as leaders, thinkers, and people ready to enter any career path they choose to pursue.
            </div>
            <br></br>
            <br></br>
            <Signatures>
              <Signature>
                <SigName>Shea Vance</SigName>
                <SigTitle>Editor in Chief</SigTitle>
              </Signature>

              <Signature>
                <SigName>Heather Chen</SigName>
                <SigTitle>Managing Editor</SigTitle>
              </Signature>
            </Signatures>
        </LetterCard>
      </Container>
    </Page>
  );
};

export default firstThreeDivs;
