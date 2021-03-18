import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomepageImage from './../assets/beers.png';
import RandomBeerImage from './../assets/random-beer.png';
import NewBeerImage from './../assets/new-beer.png';


class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <img
            className="HomepageImage"
            src={HomepageImage}
            alt="HomepageImage"
          />
          <h2>
            <Link to={'/beers'}>All Beers</Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            perferendis dolore obcaecati architecto sint rerum minima est fugiat
            animi nostrum, doloribus debitis, suscipit odio totam beatae
            voluptatum culpa quasi neque?
          </p>
        </div>
        <div>
          <img
            className="RandomBeer-Image"
            src={RandomBeerImage}
            alt="RandomBeer-Image"
          />
          <h2>
            <Link to={'/random-beer'}>Random Beer</Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            perferendis dolore obcaecati architecto sint rerum minima est fugiat
            animi nostrum, doloribus debitis, suscipit odio totam beatae
            voluptatum culpa quasi neque?
          </p>
        </div>
        <div>
          <img
            className="NewBeer-Image"
            src={NewBeerImage}
            alt="NewBeer-Image"
          />
          <h2>
            <Link to={'/new-beer'}>New Beer</Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            perferendis dolore obcaecati architecto sint rerum minima est fugiat
            animi nostrum, doloribus debitis, suscipit odio totam beatae
            voluptatum culpa quasi neque?
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
