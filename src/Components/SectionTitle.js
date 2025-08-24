import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  
  height: 8rem;
  position: relative;
  border: 0.6rem solid #000;
  background: #F167A5;
  background-image: url(${'noise_texture.png'});
  margin-left: 17.5rem;
  bottom: -17.1rem;
  max-width: 90%;
  margin-right: 5rem;

  @media (max-width: 768px) {
    width: 90vw;
    margin-left: 3vw;
    height: 6rem;
    bottom: -25rem;
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 30%;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  -webkit-text-stroke-width: 0.06rem;
  -webkit-text-stroke-color: #FFF;
  font-family: "Irish Grover";
  font-size: 4.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 3.2rem;
    -webkit-text-stroke-width: 0.05rem;
    
  }

`;

const SectionTitle = ({ title }) => {
  return (
    <Container>
        <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;