import { Component } from "react";
import FilmCardsAvangers from "./FilmCardsAvengers";
import Error from "./Error";
import Loading from "./Loading";

class MyFilmAvangers extends Component {
  state = {
    films: [],
    selected: false,
    isLoading: true,
    isError: false,
  };
  FetchFilms = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d520c310&s=Avengers");
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
      <>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.films.Search && <FilmCardsAvangers films={this.state.films.Search} />}
      </>
    );
  }
}
export default MyFilmAvangers;
