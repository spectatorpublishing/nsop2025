import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import crosswordsArticles from "../data/crosswordsArticles";

const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    background-color: #0D9DD4;  
    margin-top: -6.5rem; /* Increased margin to push NavBar down */        
  }
`;

const CrosswordsPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="CROSSWORDS" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={crosswordsArticles} />
            </PageWrapper>  
        </div>
          
        );
    };

export default CrosswordsPage;