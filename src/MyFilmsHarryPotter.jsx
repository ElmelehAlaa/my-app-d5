import { Component } from "react";

import FilmCardsHarryPotter from "./FilmCardsHarryPotter";
import Loading from "./Loading";
import Error from "./Error";
import { Container } from "react-bootstrap";

class MyFilmHarryPotter extends Component {
  state = {
    films: [],
    selected: false,
    isLoading: true,
    isError: false,
  };
  FetchFilms = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d520c310&s=harry%20potter");
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
        {this.state.films.Search && <FilmCardsHarryPotter films={this.state.films.Search} />}
      </Container>
    );
  }
}
export default MyFilmHarryPotter;
