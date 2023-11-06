import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Review = ({ review }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col md={5}>
          {/* <Card.Img src={review.image} className="circle-image" /> */}
          <Image src={review.image} className="img-fluid" roundedCircle />
        </Col>
        <Col md={7}>
          <Card.Title as="div" className="text-center">
            <strong>{review.name}</strong>
          </Card.Title>
          <Link to={`instagram.com/${review.igName}/`} className="text-center">
            <Card.Title as="h5">{review.igName}</Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={review.rating} text={review.rating} />
          </Card.Text>
        </Col>
      </Row>

      <Card.Body>
        

        <Card.Text as="div">{review.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
