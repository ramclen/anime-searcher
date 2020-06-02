import React from "react";
import kitsu from "../api/kitsu";


export default class AnimeList extends React.Component {
  state = { animes: [] };

  componentDidMount() {
    kitsu.get('anime')
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
      <div className="row">
        {this.state.animes.map(anime => (
          <div className="col-md-2 mb-3">
            <CardComponent key={anime.id} anime={anime} />
          </div>
        ))}
      </div>
    );
  }
}

const CardComponent = ({ anime }) => {

  return (
    <div className="card bg-dark text-white">
      <img
        src={anime.img}
        className="card-img" alt="anime"
        style={{}}
      />
      <div className="card-img-overlay">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">{anime.description}</p>
      </div>
    </div>
  )
}