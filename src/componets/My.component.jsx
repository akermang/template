import React, { Component } from "react";
import logo from "../logo.svg";
import { fetchtData } from "../services/api.service.js";
import { TextField } from "@material-ui/core";
import { List, MenuItem, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      inputValue: "",
      hits: []
    };
  }

  inputOnChange(value) {
    this.setState({ inputValue: value }, this.getData(value));
  }

  startFetchData(query) {
    this.setState({ isLoading: true });
    fetchtData(query)
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  getData(value) {
    clearTimeout(this.timeoutId);
    this.setState({ isLoading: false });
    if (value === "") return;
    let query = `?query=${value}`;
    this.timeoutId = setTimeout(this.startFetchData.bind(this, query), 500);
  }

  render() {
    const { hits, isLoading, inputValue } = this.state;
    return (
      <div className="container">
        <div className={"main-container"}>
          <div>
            <TextField
              value={inputValue}
              onChange={e => this.inputOnChange(e.target.value)}
              placeholder="Search..."
              autoFocus
            />
            <Button
              variant="outlined" color="primary"
              style={{ marginLeft: "8px" }}
              onClick={() => this.getData(inputValue)}
            >
              search
            </Button>
          </div>
          {isLoading ? <div className={"loader"}>Loading...</div> : null}

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
