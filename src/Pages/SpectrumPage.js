import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import spectrumArticles from "../data/spectrumArticles";

const PageWrapper = styled.div`
  min-height: 150vh;
  background-color: #3EB8E7;
  margin-top: 40px;
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
        </div>
          
        );
    };

export default SpectrumPage;