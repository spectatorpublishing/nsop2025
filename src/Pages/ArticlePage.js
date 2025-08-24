import React from "react";
import styled from "styled-components";
import Article from "../Components/Article";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  column-gap: 1rem;  
  row-gap: 2rem;  
  justify-content: center; 
  margin-top: -15.5rem;
  margin-left: 15.7rem;
  padding: 0 2rem;


  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr; 
    row-gap: 0.5rem; 
    column-gap: 0;            
    margin: 0 auto; 
    padding: 0.5rem;
    max-width: 22rem;           
  }
`;

const NoArticles = styled.div`
  font-family: Righteous, sans-serif;
  font-size: 1.125rem;
  color: #121212;
  text-align: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

const ArticlePage = ({ articles = [] }) => {
  return (
    <>
      {articles.length === 0 ? (
        <NoArticles>No articles available</NoArticles>
      ) : (
      <Grid>
        {articles.map((article, index) => (
          <Article
            key={index}
            article_link={article.article_link} 
            image={article.image}
            title={article.title}
            authors={article.authors}
          />
        ))}
      </Grid>
      )}
    </>
  );
};

export default ArticlePage;
