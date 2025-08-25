import React from "react";
import styled from "styled-components";

const ArticleLinkContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 25rem;
  display: block; 
  text-decoration: none;
  color: inherit; 
  top: -2rem;
  
  @media (max-width: 768px) {
    width: 18rem;
    margin: 15rem auto -15rem auto;
    padding-bottom: 2rem;
    
  }
`;

const ArticleImage = styled.img`
  object-fit: cover;
  display: block;
  width: 65%;
  height: auto;
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const ArticleVideo = styled.iframe`
  display: block;
  width: 70%;
  height: auto;
  aspect-ratio: 16/9;
  border: none;
`;

const Card = styled.div`
  width: 100%;
  max-width: 21rem;
  height: 25.5rem;
  flex-shrink: 0;
  background-color: #56DDE1;
  outline: 0.25rem solid #000;
  border: 0.125rem solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;

  transition: transform 0.3s ease; /* Smooth scaling effect */

  &:hover {
    transform: scale(1.05); /* Slightly increase size on hover */
  }

  @media (max-width: 768px) {
    height: 20rem;
    padding-top: 1.5rem;
  }
`;

const CardText = styled.h1`
  text-align: center;
  margin: 0 auto; 
  color: #121212;
  font-family: Righteous;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 85%;
  max-width: 18rem;
  margin-top: 1.9rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.2rem;
  }
`;

const Author = styled.div`
  width: 100%;
  height: 3.6rem;
  margin-top: auto;
  flex-shrink: 0;
  background-color: #FFF;
  outline: 0.125rem solid #000;

  @media (max-width: 768px) {
    height: 3.2rem;
    margin-top: auto;
  }
`;

const AuthorText = styled.h1`
  font-size: 1rem;
  color: #000;
  font-weight: 400;
  font-family: Righteous;
  text-align: center;
  line-height: 150%;
  margin: 0;
  padding: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

/* ---------- Helper Functions ---------- */
function isYouTubeUrl(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getEmbedUrl(url) {
  if (url.includes("youtu.be")) {
    // e.g. "https://youtu.be/VIDEO_ID" => "https://www.youtube.com/embed/VIDEO_ID"
    return url.replace("youtu.be/", "youtube.com/embed/");
  }
  // e.g. "https://www.youtube.com/watch?v=VIDEO_ID" => "https://www.youtube.com/embed/VIDEO_ID"
  return url.replace("watch?v=", "embed/");
}

const Article = ({ article_link, image, title, authors }) => {
  const youtubeLink = isYouTubeUrl(image);
  const embedUrl = youtubeLink ? getEmbedUrl(image) : null;

  return (
    <ArticleLinkContainer
      href={article_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card>
        {/* Conditionally render video or image in same spot */}
        {youtubeLink ? (
          <ArticleVideo
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <ArticleImage src={image} alt={title} />
        )}
        <CardText>{title}</CardText>
        <Author><AuthorText>By {authors.join(", ")}</AuthorText></Author>
      </Card>
    </ArticleLinkContainer>
  );
};

export default Article;