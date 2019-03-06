import React, { Component } from "react";
import logo from "../logo.svg";
import { fetchtData } from "../services/Api.service.js";
import { TextField } from "@material-ui/core";
import { List, MenuItem, Button } from "@material-ui/core";

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

  getData(value) {
    if (value === "") return;
    this.setState({ isLoading: true });
    let query = `?query=${value}`;
    fetchtData(query)
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
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
              placeholder="input"
              autoFocus
            />
            <Button
              style={{ background: "#d6dce6", marginLeft: "8px" }}
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
