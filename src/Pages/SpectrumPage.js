import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import spectrumArticles from "../data/spectrumArticles";
import CreditsComponent from '../Components/CreditsComponent';


const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    background-color: #0D9DD4;          
  }
`;

const CreditsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
  }
  
@media (max-width: 768px) {
  background-color: #0D9DD4;          
}
`;

const SpectrumPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="SPECTRUM" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={spectrumArticles} />
            </PageWrapper>  
            <CreditsWrapper>
              <CreditsComponent />
            </CreditsWrapper>
        </div>
          
        );
    };

export default SpectrumPage;