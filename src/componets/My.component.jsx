import React, { Component } from "react";
import logo from "../logo.svg";
import { fetchtData } from "../services/Api.service.js";
import { TextField } from "@material-ui/core";
import { List, MenuItem } from "@material-ui/core";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      inputValue: "",
      hits: []
    };
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
        <div className={"main-container"}>
          {isLoading ? <div>Loading...</div> : null}

          {!isLoading && (
            <div>
              <TextField
                value={this.state.inputValue}
                onChange={e => this.setState({ inputValue: e.target.value })}
                placeholder="input"
              />
            </div>
          )}

          <List>
            {hits.map(hit => (
              <p key={hit.objectID}>
                <a
                  href={hit.url}
                  className="App-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hit.title}
                </a>
              </p>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default MyComponent;
