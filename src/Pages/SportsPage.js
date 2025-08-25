import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import sportsArticles from "../data/sportsArticles";

const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

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
        </div>
          
        );
    };

export default SportsPage;