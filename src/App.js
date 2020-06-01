import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <div class="card bg-dark text-white">
              <img src="https://media.kitsu.io/anime/poster_images/6448/medium.jpg?1431828590" class="card-img" alt="anime" />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }
}