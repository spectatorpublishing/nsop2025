import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = styled.div`
  width: 12rem;
  height: 35rem;
  margin-left: 3rem;
  position: relative;
  top: 6rem;
  background-color: #FFF;
  outline: 0.5rem solid #000;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: -5rem;
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #0D9DD4; 
    outline: none;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 14.29%;
  flex-shrink: 0;
  background-color: #FFF;
  outline: 0.5rem solid #000;

  @media (max-width: 768px) {
    width: calc(50% - 2rem); 
    height: 4rem;
    margin-left: 1rem;
    outline: 0.25rem solid #000;
    border-radius: 0.25rem;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  /* text styles */
  color: #000;
  text-align: center;
  font-family: "Irish Grover";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  /* Hover effect for the text only */
  span {
    display: inline-block;
    transition: transform 0.3s ease; /* Smooth rotation effect */
  }

  &:hover span {
    transform: rotate(5deg); /* Rotate text slightly on hover */
  }

  /* hover effect for the background */
  &:hover {
    background-image: url(${'noise_texture.png'});
    background-color: #F167A5; /* pink when active */
    color: black;
    text-shadow:
        -0.03rem -0.03rem 0 white,
        0.03rem -0.03rem 0 white,
        -0.03rem  0.03rem 0 white,
        0.03rem  0.03rem 0 white; 
  }

  /* active effect */
  &.active {
    background-image: url(${'noise_texture.png'});
    background-color: #F167A5; /* pink when active */
    color: black;
    text-shadow:
        -0.03rem -0.03rem 0 white,
        0.03rem -0.03rem 0 white,
        -0.03rem  0.03rem 0 white,
        0.03rem  0.03rem 0 white; 
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.1rem;
    
    &:hover, &.active {
      border-radius: 0.25rem;
    }
  }
`;

const NavBar = () => {
  return (
    <Sidebar>
        <Section>
            <NavItem to="/"><span>University</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/sports"><span>Sports</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/ac"><span>A & C</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/spectrum"><span>Spectrum</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/crosswords"><span>Crosswords</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/video"><span>Video</span></NavItem>
        </Section>
        <Section>
            <NavItem to="/city"><span>City</span></NavItem>
        </Section>
    </Sidebar>
  );
};

export default NavBar;