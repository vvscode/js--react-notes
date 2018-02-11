import React, { Component } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { getItems } from "./utils/api";

import items from "./utils/demo-data";

class App extends Component {
  state = {
    items: null
  };
  componentWillMount() {
    getItems().then(items => this.setState({ items }));
  }
  renderTable() {
    return <Table items={this.state.items} />;
  }
  renderSpinner() {
    return <h1>Spinner...</h1>;
  }
  render() {
    return (
      <div className="App">
        {this.state.items ? this.renderTable() : this.renderSpinner()}
      </div>
    );
  }
}

export default App;
