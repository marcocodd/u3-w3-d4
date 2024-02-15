import { useEffect, useState } from "react";
import {SpaceArticlesInterface} from "../interfaces/SpaceArticles";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeArticles = () => {
 const [articles, setArticles] = useState<SpaceArticlesInterface>();

 const fetchArticles = async () => {
  try {
   const response = await fetch(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&search=space"
   );

   if (response.ok) {
    const arrayOfArticles = await response.json();
    console.log('array', arrayOfArticles);
    setArticles(arrayOfArticles);
   } else {
    throw new Error(response.status.toString());
   }
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  fetchArticles();
 }, []);

 return (
  <Container className="my-5">
   <h2 className="text-white text-center mb-5">Space Articles</h2>
   <Row className="g-3">
    {articles &&
     articles.results.map((article, i) => (
      <Col className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
       <Card className="h-100 card shadow-md text-white">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body className="d-flex flex-column justify-content-between">
         <Card.Title>{article.title}</Card.Title>
         <Card.Text>{article.summary}</Card.Text>
         <Button variant="dark">Go to full Article</Button>
        </Card.Body>
       </Card>
      </Col>
     ))}
   </Row>
  </Container>
 );
};

export default HomeArticles;
