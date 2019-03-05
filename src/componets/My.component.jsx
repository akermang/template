import React, { Component } from 'react';
import logo from '../logo.svg';
import { fetchtData } from '../services/Api.service.js'

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
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
            <div className="container">
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

export default MyComponent;
