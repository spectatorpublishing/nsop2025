import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 1059.084px;
  height: 130.695px;
  position: relative;
  border: 9.013px solid #000;
  background: #F167A5;
  background-image: url(${'noise_texture.png'});
  margin-left: 280px;
  bottom: -280px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  width: 1043.761px;
  height: 120.781px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFF;
  font-family: "Irish Grover";
  font-size: 67.601px;
  font-style: normal;
  font-weight: 500;
  line-height: 70%;
]]
`;

const SectionTitle = ({ title }) => {
  return (
    <Container>
        <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;