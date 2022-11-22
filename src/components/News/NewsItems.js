import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 90%;
  padding: 10px 20px 10px 10px;
  margin-top: 10px;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  text-decoration: none;
  color: #000;
  overflow: hidden;
`;

const NewsContents = styled.div`
  margin-left: 20px;
  font-size: 13px;
  overflow: hidden;
`;

function NewsItems({ article }) {
  const { title, url, urlToImage } = article;
  return (
    <Container to={url}>
        <img src={urlToImage} />
      <NewsContents>
        <div>{title}</div>
      </NewsContents>
    </Container>
  );
}

export default NewsItems;
