import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => (
  <section class="gallery">
    <div class="container">
      <div class="grid">
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img id="gallery-img-size" src={window.Moth} />
            <figcaption class="img-content">
              <h2 class="title">TMMTF</h2>
              <h3 class="category">Artist</h3>
            </figcaption>
            <span class="img-content-hover">
              <h2 class="title">TMMTF</h2>
              <h3 class="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img id="gallery-img-size" src={window.Buzz} />
            <figcaption class="img-content">
              <h2 class="title">The Buzz</h2>
              <h3 class="category">Artist</h3>
            </figcaption>
            <span class="img-content-hover">
              <h2 class="title">The Buzz</h2>
              <h3 class="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img id="gallery-img-size" src={window.XO} />
            <figcaption class="img-content">
              <h2 class="title">XO-Skeltons</h2>
              <h3 class="category">Artist</h3>
            </figcaption>
            <span class="img-content-hover">
              <h2 class="title">XO-Skeltons</h2>
              <h3 class="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div class="column-xs-12 column-md-6">
          <figure class="img-container">
            <img id="gallery-img-size" src={window.Dung} />
            <figcaption class="img-content">
              <h2 class="title">The Dung Beetles</h2>
              <h3 class="category">Artist</h3>
            </figcaption>
            <span class="img-content-hover">
              <h2 class="title">The Dung Beetles</h2>
              <h3 class="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div class="column-xs-12 column-md-6">
          <figure class="img-container">
            <img id="gallery-img-size" src={window.Daddy} />
            <figcaption class="img-content">
              <h2 class="title">Daddy SongLegs</h2>
              <h3 class="category">Artist</h3>
            </figcaption>
            <span class="img-content-hover">
              <h2 class="title">Daddy SongLegs</h2>
              <h3 class="category">Artist</h3>
            </span>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;