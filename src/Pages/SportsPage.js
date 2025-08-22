import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import sportsArticles from "../data/sportsArticles";

const PageWrapper = styled.div`
  min-height: 150vh;
  background-color: #3EB8E7;
  margin-top: 40px;
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