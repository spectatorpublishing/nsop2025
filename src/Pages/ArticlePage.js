import React from "react";
import styled from "styled-components";
import Article from "../Components/Article";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  column-gap: 15px;  
  row-gap: 30px;  
  justify-content: end; 
  margin-top: -250px;
  margin-right: 75px;
`;

const NoArticles = styled.div`
  font-family: Righteous, sans-serif;
  font-size: 18px;
  color: #121212;
  text-align: center;
  margin-top: 50px;
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
