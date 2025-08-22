import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import videoArticles from "../data/videoArticles";

const PageWrapper = styled.div`
  min-height: 160vh;
  background-color: #3EB8E7;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    background-color: #0D9DD4;          
  }
`;

const VideoPage = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <SectionTitle title="VIDEO" />
            <PageWrapper>
                <NavBar></NavBar>
                <ArticlePage articles={videoArticles} />
            </PageWrapper>  
        </div>
          
        );
    };

export default VideoPage;