import React from "react";


export default class AnimeList extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <CardComponent anime={{
          img: 'https://media.kitsu.io/anime/poster_images/6448/medium.jpg?1431828590',
          title: 'Card title',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        }} />
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