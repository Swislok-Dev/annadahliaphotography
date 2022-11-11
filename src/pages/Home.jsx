import React from 'react';
import ShowImage from '../components/ShowImage';
import {
  familyImages,
  couplesImages,
  babyImages,
  weddingImages,
} from '../data/images.js';
import '../styles/home.css';

function Home() {
  return (
    <div id="home" className="home">
      <figure id="family">
        <ShowImage imagesPath={familyImages} />
      </figure>

      <figure id="couples">
        <ShowImage imagesPath={couplesImages} />
      </figure>

      <figure id="wedding">
        <ShowImage imagesPath={weddingImages} />
      </figure>
      <figure id="baby">
        <ShowImage imagesPath={babyImages} />
      </figure>
    </div>
  );
}

export default Home;
