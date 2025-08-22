import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = styled.div`
  width: 186.292px;
  height: 530px;
  margin-left: 50px;
  position: relative;
  top: 100px;
  background-color: #FFF;
  outline: 6.89px solid #000;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
width: 186.292px;
height: 88.169px;
flex-shrink: 0;
background-color: #FFF;
outline: 6.89px solid #000;
`;

const NavItem = styled(NavLink)`
  display: flex;
  width: 186.292px;
  height: 88.169px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  /* text styles */
  color: #000;
  text-align: center;
  font-family: "Irish Grover";
  font-size: 27.886px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  /* hover effect */
  &:hover {
    background-image: url(${'noise_texture.png'});
    background-color: #F167A5; /* pink when active */
    color: black;
    text-shadow:
        -0.5px -0.5px 0 white,
        0.5px -0.5px 0 white,
        -0.5px  0.5px 0 white,
        0.5px  0.5px 0 white; 
  }

  /* active effect */
  &.active {
    background-image: url(${'noise_texture.png'});
    background-color: #F167A5; /* pink when active */
    color: black;
    text-shadow:
        -0.5px -0.5px 0 white,
        0.5px -0.5px 0 white,
        -0.5px  0.5px 0 white,
        0.5px  0.5px 0 white; 
  }
`;

const NavBar = () => {
  return (
    <Sidebar>
        <Section>
            <NavItem to="/">University</NavItem>
        </Section>
        <Section>
            <NavItem to="/sports">Sports</NavItem>
        </Section>
        <Section>
            <NavItem to="/ac">A & C</NavItem>
        </Section>
        <Section>
            <NavItem to="/spectrum">Spectrum</NavItem>
        </Section>
        <Section>
            <NavItem to="/crosswords">Crosswords</NavItem>
        </Section>
        <Section>
            <NavItem to="/video">Video</NavItem>
        </Section>
    </Sidebar>
  );
};

export default NavBar;