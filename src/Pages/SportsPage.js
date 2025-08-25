import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import sportsArticles from "../data/sportsArticles";
import CreditsComponent from '../Components/CreditsComponent';


const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    background-color: #0D9DD4;        
    margin-top: -6.5rem; /* Increased margin to push NavBar down */  
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

const SportsPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="SPORTS" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={sportsArticles} />
            </PageWrapper>  
            <CreditsWrapper>
              <CreditsComponent />
            </CreditsWrapper>
        </div>
          
        );
    };

export default SportsPage;