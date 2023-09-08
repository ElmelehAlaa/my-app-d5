import { Component } from "react";

import FilmCardsLordOfTheRings from "./FilmCardsLordOfTheRings";
import Error from "./Error";
import Loading from "./Loading";
import { Container } from "react-bootstrap";

class MyFilmLordOfTheRings extends Component {
  state = {
    films: [],
    selected: false,
    isLoading: true,
    isError: false,
  };
  FetchFilms = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d520c310&s=lord%20of%20the%20rings");
      if (response.ok) {
        const data = await response.json();
        this.setState({ films: data });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    console.log("DidMount");
    this.FetchFilms();
  };
  render() {
    return (
      <Container>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.films.Search && <FilmCardsLordOfTheRings films={this.state.films.Search} />}
      </Container>
    );
  }
}
export default MyFilmLordOfTheRings;
