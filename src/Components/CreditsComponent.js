import React from "react";
import styled from "styled-components";
import Firework from "./Firework"; // Import the BurstIcon component
import { credits } from "../data/credits";

const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  z-index: 5;
  color: black;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: "Righteous";

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const BurstWrapper = styled.div`
  position: absolute;
  z-index: 1;
  &.top-left {
    top: -50px;
    left: -50px;

    @media only screen and (max-width: 768px) {
      top: -30px;
      left: -30px;
    }
  }

  &.top-right {
    top: 30px;
    right: 40px;

    @media only screen and (max-width: 768px) {
      top: 10px;
      right: 10px;
    }
  }

  &.bottom-left {
    bottom: 30px;
    left: 40px;

    @media only screen and (max-width: 768px) {
      bottom: 10px;
      left: 20px;
    }
  }

  &.bottom-right {
    bottom: -50px;
    right: -50px;

    @media only screen and (max-width: 768px) {
      bottom: -30px;
      right: -30px;
    }
  }
`;
const HeaderDiv = styled.div`
  z-index: 2; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 80%;
  margin-bottom: 35px;
`;

const Header = styled.h1`
  font-size: 37px;
  font-family: "Righteous";
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 2rem;
  }
`;

const SectAndNames = styled.div`
  z-index: 2; 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  font-family: "Righteous";
  color: black;

  @media only screen and (max-width: 1216px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Name = styled.div`
  font-family: "Righteous";
  font-size: 18px;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: black;

  @media only screen and (max-width: 1216px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const CreditsComponent = () => {
  return (
    <Container id="credits">
      
      {/* Top-left Burst */}
      <BurstWrapper className="top-left">
        <Firework fillColor="#F0FFA3" strokeColor="#111" size="large-firework"/>
      </BurstWrapper>
      <BurstWrapper className="top-right">
        <Firework fillColor="#F0FFA3" strokeColor="#111" size="small-firework"/>
      </BurstWrapper>
      <BurstWrapper className="bottom-left">
        <Firework fillColor="#F0FFA3" strokeColor="#111" size="small-firework" />
      </BurstWrapper>
      <BurstWrapper className="bottom-right">
        <Firework fillColor="#F0FFA3" strokeColor="#111" size="large-firework" />
      </BurstWrapper>
      <HeaderDiv>
        <Header>Staff Who Made This Issue Possible</Header>
      </HeaderDiv>
      <SectAndNames>
        {Object.entries(credits).map(([section, key]) => (
          <Section key={section}>
            {section}
            <br />
            {key.map((person, index) => (
              <Name key={index}>
                {person.staff_name}, {person.title}
              </Name>
            ))}
            <br />
          </Section>
        ))}
      </SectAndNames>
    </Container>
  );
};

export default CreditsComponent;