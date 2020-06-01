import React from "react";
import "./card-overlay.css";
import AnimeList from "./AnimeList";


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <AnimeList></AnimeList>
        </div>
      </div>

    )

  }
}