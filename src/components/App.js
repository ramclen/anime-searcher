import React from "react";
import "./card-overlay.css";
import AnimeList from "./AnimeList";
import SearchBar from "./SearchBar"
import kitsu from "../api/kitsu";


export default class App extends React.Component {
  state = { animes: [] };

  componentDidMount() {
    kitsu.get('anime?page[limit]=20')
      .then(res => res.data)
      .then(res => {
        let _animes = res.data.map(e => {
          return {
            id: e.id,
            title: e.attributes.titles.en_jp,
            description: e.attributes.synopsis,
            img: e.attributes.posterImage.medium
          }
        })
        this.setState({ animes: _animes })
      });
  }

  searchAnime(hint) {
    kitsu.get(`anime?page[limit]=20&filter[text]=${hint}`)
      .then(res => res.data)
      .then(res => {
        let _animes = res.data.map(e => {
          return {
            id: e.id,
            title: e.attributes.titles.en_jp,
            description: e.attributes.synopsis,
            img: e.attributes.posterImage.medium
          }
        })
        this.setState({ animes: _animes })
      });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onChange={hint => this.searchAnime(hint)} />
        <AnimeList animes={this.state.animes}></AnimeList>
      </div>

    )

  }
}