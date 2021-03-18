import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {loadSingleBeer} from './../services/beer-api';

class BeerDetails extends Component {
    state = {
        single: null
    }

    componentDidMount() {
        this.loadSingleBeer();
    }

    componentDidUpdate(previousProps) {
        if(previousProps.match.params.id !== this.props.match.params.id) {
            this.loadSingleBeer();
        }
    }

    async loadSingleBeer() {
        console.log(this.loadSingleBeer);
        const id = this.props.match.params.id;
        const single = await loadSingleBeer(id);
        this.setState({
            single: single
        })
    }

    render() {
        const single = this.state.single;
        console.log(this.state.single);
        return (
            <div>
                <header>
                <Link to={'/'}>Homepage</Link>
                </header>
                {this.state.single && (
                    <>
                    <img src={single.image_url} alt=""/>
                    <h1>{single.name}</h1>
                    <h3>{single.tagline}</h3>
                    <p>{single.first_brewed}</p>
                    <p>{single.attenuation_level}</p>
                    <p>{single.description}</p>
                    <p>{single.contributed_by}</p>
                    </>
                )}
                
            </div>
        )
    }
}

export default BeerDetails;