import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {allBeers} from './../services/beer-api';

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
        return (
            <div>
                <header>
                <Link to={'/'}>Homepage</Link>
                </header>
                {this.state.single && (
                    <>
                    <h1>{single.name}</h1>
                    </>
                )}
                
            </div>
        )
    }
}

export default BeerDetails;