import React, { Component } from 'react'
import {allBeers} from './../services/beer-api';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
    state= {
        beerList: []
    }

    componentDidMount () {
        this.loadBeerList();
    }

    async loadBeerList() {
        const list = await allBeers();
        console.log(list);
        this.setState({
            beerList: list
        })
    }


    render() {
        return (
            <div>
                <header>
                <Link to={'/'}>Homepage</Link>
                </header>
                <h1>All Beers</h1>
                <ul>
                    {this.state.beerList.map((beer) =>(
                        <li key={beer._id}>
                            <Link to ={`/beers/${beer._id}`}>
                                <img src={beer.image_url} alt=""/>
                                <h2>{beer.name}</h2>
                                <p>{beer.tagline}</p>
                                <footer>Contributed by: {beer.contributed_by}</footer>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AllBeers;