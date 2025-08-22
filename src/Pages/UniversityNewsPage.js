import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar';
import SectionTitle from '../Components/SectionTitle';
import ArticlePage from './ArticlePage';

import universityArticles from "../data/universityArticles";

const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

@media (max-width: 768px) {
  background-color: #0D9DD4;          
}
`;

const UniversityNewsPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="UNIVERSITY" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={universityArticles} />
            </PageWrapper>  
        </div>
          
        );
    };

export default UniversityNewsPage;