import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import crosswordsArticles from "../data/crosswordsArticles";

const PageWrapper = styled.div`
  min-height: 150vh;
  background-color: #3EB8E7;
  margin-top: 40px;
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