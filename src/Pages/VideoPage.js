import React from 'react';
import styled from 'styled-components';
import IntroPage from './IntroPage';
import NavBar from '../Components/NavBar'
import SectionTitle from '../Components/SectionTitle'
import ArticlePage from './ArticlePage';

import videoArticles from "../data/videoArticles";

const PageWrapper = styled.div`
  min-height: 150vh;
  background-color: #3EB8E7;
  margin-top: 40px;
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