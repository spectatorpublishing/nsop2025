import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlueBarMobile from "./BlueBarMobile";

const CrownIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 5%;
  height: auto;
  z-index: 1000;
  cursor: pointer;
`;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 20px;
    padding-right: 20px;
    row-gap: 20px;
    margin-top: 24px;
  }
`;

const NSOPimage = styled.img`
  box-sizing: border-box;
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
  width: 95%;
  height: auto;
  border: 5.729px solid #000;
  display: block;
  max-width: 100%;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 70%;
    border-width: 4px;
    justify-self: center;
  }
`;

const BlueBox = styled.div`
  box-sizing: border-box;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  width: 100%;
  height: 307.578px;
  background-color: #56DDE1;
  border: 5.729px solid #000;
  overflow: visible;
  justify-self: end;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 1;
    width: 90%;
    height: clamp(150px, 36vw, 200px);
    border-width: 4px;
    justify-self: center;
  }
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
  width: clamp(260px, 52vw, 720px);
  max-width: 100%;
  height: auto;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    width: clamp(180px, 70vw, 360px);
  }
`;

const LetterCard = styled.div`
  box-sizing: border-box;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: #f7f7f7;
  border: 5.729px solid #000;
  padding: 55px 36px;
  color: #2C2C2C;
  font-family: 'Righteous';
  font-size: 19.529px;
  font-style: normal;
  font-weight: 200;
  line-height: 32px;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 3;
    padding: 25px 18px;
    font-size: 15px;
    line-height: 24px;
  }
`;

const Signatures = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  transform: rotate(0.142deg);
  align-items: center;
  gap: 60.726px;
  flex-shrink: 0;
  border-radius: 1.481px;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 220px;
    height: 70px;
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SigTitle = styled.div`
  font-family: 'Righteous';
  font-size: 19.529px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;



const FirstThreeDivs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Page>
      {isMobile ? (
        <BlueBarMobile />
      ) : (
        <a href="https://columbiaspectator.com" target="_blank" rel="noopener noreferrer">
          <CrownIcon src="whiteCrown.png" alt="Crown icon" />
        </a>
      )}
      <Container>
        <BlueBox>
          <NYCbg src="NYCbg.png" alt="NYC skyline" />
          <WelcomeText src="welcomeToColumbia.png" alt="Welcome to Columbia" />
        </BlueBox>

        <NSOPimage src="nsop.png" alt="NSOP sketch" />

        <LetterCard>
        <h1>Dear class of 2029,</h1>
          <div>
            Welcome to Columbia! As you settle into the neighborhood and get to
            know your classmates, we are honored to welcome you to campus. You
            are joining our community at a turbulent time in Columbia’s history,
            with uncertainty clouding the future of the coming months and years
            here in Morningside Heights. At Spectator, we take seriously our duty
            to shine light on the stories that matter and make sense of this
            unprecedented moment for our community. We hope your journey as a
            Lion is off to a roaring start and that this special edition helps
            acquaint you with your new home.
          </div>
          <br />
          <div>ABOUT SPECTATOR</div>
          <div>
            Spectator is a financially independent nonprofit organization and
            the largest student-run news media group on campus, serving tens of
            thousands of readers across Columbia, Morningside Heights, and West
            Harlem. We have a 149-year tradition of documenting history as it
            unfolds through in-depth, well-reported stories that hold
            institutional power to account.
          </div>
          <br />
          <div>
            Central to our mission is helping our audience make the most of
            their experience of Columbia and its surrounding communities through
            our award-winning journalism. With Spectator’s publications and
            products, we aim to identify and directly address the needs of
            students, faculty, staff, and residents. Across all of our
            departments—which consist of hundreds of reporters, multimedia
            journalists, designers, analysts, salespeople, engineers, and
            more—we work to keep you informed and continuously improve your
            college experience within and beyond the campus gates.
          </div>
          <br />
          <div>JOINING SPECTATOR AND WORK-STUDY</div>
          <div>
            Joining Spec is one of the best ways to kick off your four years at
            Columbia. When you become a member of the Spec family, you step into
            a community of sharp and passionate students who constantly push
            themselves, the people around them, and the community they serve to
            be better. Along the way, you’ll build lifelong connections and
            friendships.
          </div>
          <br />
          <div>
            Working at Spec is an unmatched opportunity to be part of an
            independent organization that has a direct impact on your new
            community. Through the work they do for Spectator’s journalism,
            business, and tech teams, our staff members grow as leaders,
            thinkers, and people, gaining skills that apply to any career path
            they choose to pursue.
          </div>
          <br />
          <div>
            As such, we are committed to ensuring that anyone who wants to join
            Spec can, no matter your experience or background. That is why we
            are proud to offer one of the best work-study jobs on campus. If you
            qualify for work-study opportunities, even as a trainee, you can
            apply to our work-study program right away. You do not need any
            prior experience to join any of Spec’s departments, so be sure to
            come to an open house and check out {' '}
            <a href="https://www.specpublishing.com/join" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#2C2C2C', textDecoration: 'underline' }}>
              joinspec.com
            </a>{' '} to learn more about
            the various ways you can get involved. If you have any questions,
            don't hesitate to reach out to us directly at{' '}
            <a href="mailto:editor@columbiaspectator.com" style={{ fontWeight: 'bold', color: '#2C2C2C', textDecoration: 'underline' }}>
               editor@columbiaspectator.com
            </a>.
          </div>
          <br />
          <br />
          <Signatures>
            <Signature>
              <SigName>Shea Vance</SigName>
              <SigTitle>Editor in Chief</SigTitle>
            </Signature>

            <Signature>
              <SigName>Heather Chen</SigName>
              <SigTitle>Managing Editor</SigTitle>
            </Signature>
            <Signature>
              <SigName>Albert Tsai</SigName>
              <SigTitle>Publisher</SigTitle>
            </Signature>
          </Signatures>
        </LetterCard>
      </Container>
    </Page>
  );
};

export default FirstThreeDivs;
