import React, { Component } from 'react';
import logo from '../logo.svg';
// import './App.css';
import { fetchtData } from '../fetch-utils.js'

class GalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            hits: []
        }
    }


    componentDidMount() {
        this.setState({ isLoading: true });
        fetchtData()
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { hits, isLoading } = this.state;
        return (
            <div className="gal">
                <header className="App-header">
                    {isLoading ? <img src={logo} className="App-logo" alt="logo" /> : null}
                    <ul>
                        {hits.map(hit =>
                            <p key={hit.objectID}>
                                < a href={hit.url}
                                    className="App-link"
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    {hit.title}
                                </a>
                            </p>
                        )}
                    </ul>
                </header>
            </div>
        );
    }
}

export default GalComponent;