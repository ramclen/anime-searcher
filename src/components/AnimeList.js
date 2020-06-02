import React from "react";


export default class AnimeList extends React.Component {
  state = { animes: [] };

  render() {
    if (!this.props.animes) {
      return (<div />);
    }

    return (
      <div className="row">
        {this.props.animes.map(anime => (
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