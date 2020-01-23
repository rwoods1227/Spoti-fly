import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => (
  <section className="gallery">
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-md-4">
          <figure className="img-container">
            <img id="gallery-img-size" src={window.Moth} />
            <figcaption className="img-content">
              <h2 className="title">TMMTF</h2>
              <h3 className="category">Artist</h3>
            </figcaption>
            <span className="img-content-hover">
              <h2 className="title">TMMTF</h2>
              <h3 className="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div className="column-xs-12 column-md-4">
          <figure className="img-container">
            <img id="gallery-img-size" src={window.Buzz} />
            <figcaption className="img-content">
              <h2 className="title">The Buzz</h2>
              <h3 className="category">Artist</h3>
            </figcaption>
            <span className="img-content-hover">
              <h2 className="title">The Buzz</h2>
              <h3 className="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div className="column-xs-12 column-md-4">
          <figure className="img-container">
            <img id="gallery-img-size" src={window.XO} />
            <figcaption className="img-content">
              <h2 className="title">XO-Skeltons</h2>
              <h3 className="category">Artist</h3>
            </figcaption>
            <span className="img-content-hover">
              <h2 className="title">XO-Skeltons</h2>
              <h3 className="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div className="column-xs-12 column-md-6">
          <figure className="img-container">
            <img id="gallery-img-size" src={window.Dung} />
            <figcaption className="img-content">
              <h2 className="title">The Dung Beetles</h2>
              <h3 className="category">Artist</h3>
            </figcaption>
            <span className="img-content-hover">
              <h2 className="title">The Dung Beetles</h2>
              <h3 className="category">Artist</h3>
            </span>
          </figure>
        </div>
        <div className="column-xs-12 column-md-6">
          <figure className="img-container">
            <img id="gallery-img-size" src={window.Daddy} />
            <figcaption className="img-content">
              <h2 className="title">Daddy SongLegs</h2>
              <h3 className="category">Artist</h3>
            </figcaption>
            <span className="img-content-hover">
              <h2 className="title">Daddy SongLegs</h2>
              <h3 className="category">Artist</h3>
            </span>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;