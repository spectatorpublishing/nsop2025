import React from "react";
import styled from "styled-components";

const ArticleLinkContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: block; 
  text-decoration: none; /
  color: inherit; 
  
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const ArticleImage = styled.img`
  object-fit: cover;
  display: block;
  width: 70%;
  height: auto;
`;

const ArticleVideo = styled.iframe`
  object-fit: cover;
  display: block;
  width: 70%;
  height: auto;
`;

const Card = styled.div`
  width: 334.664px;
  height: 404.171px;
  flex-shrink: 0;
  background-color: #56DDE1;
  outline: 4px solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
`;

const CardText = styled.h1`
  text-align: center;
  margin: 0 auto; 
  color: #121212;
  font-family: Righteous;
  font-size: 14.588px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 270px;
  margin-top: 39px;       
`;

const Author = styled.div`
  width: 334.664px;;
  height: 57.494px;
  margin-top: 30px;
  flex-shrink: 0;
  background-color: #FFF;
  outline: 2px solid #000;
`;

const AuthorText = styled.h1`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  font-family: Righteous;
  text-align: center;
  line-height: 200%;
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
            frameBorder="0"
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