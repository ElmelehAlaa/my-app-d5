import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class FilmCards extends Component {
  render() {
    return (
      <Row className=" mb-4 no-gutters text-center  ">
        <h4 className="text-white mx-5 fs-1 text-start pb-3">{this.props.title} </h4>
        {this.props.films.map((film) => (
          <Col xs="12" sm="6" md="4" lg="3" xxl="2" className="mb-4 px-1  " key={film.imdbID}>
            <Card title={film.Title} img={film.Poster} style={{ width: "200px", height: "100%", margin: "auto" }}>
              <Card.Img variant="top" src={film.Poster} style={{ objectFit: "contain" }} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default FilmCards;
