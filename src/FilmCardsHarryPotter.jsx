import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class FilmCardsHarryPotter extends Component {
  render() {
    return (
      <Row className=" mb-4 no-gutters text-center  ">
        {this.props.films.map((film) => (
          <Col xs="11" sm="5" md="4" lg="3" xl="2" className="mb-4 px-1  " key={film.imdbID}>
            <Card title={film.Title} img={film.Poster} style={{ width: "200px", height: "100%", margin: "auto" }}>
              <Card.Img variant="top" src={film.Poster} style={{ height: "330px", objectFit: "contain" }} />
              <Card.Body className="m-0 p-0">
                <Card.Title className="fs-6">{film.Title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default FilmCardsHarryPotter;
