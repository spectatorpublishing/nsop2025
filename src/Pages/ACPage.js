import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import acArticles from "../data/acArticles";

const PageWrapper = styled.div`
  min-height: 150vh;
  background-color: #3EB8E7;
  margin-top: 40px;
`;

const ACPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="A&C" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={acArticles} />
            </PageWrapper>  
        </div>
          
        );
    };

export default ACPage;