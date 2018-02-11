import React, { Component } from "react";

import "./App.css";
import { Table } from "./components/Table";

import items from "./utils/demo-data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table items={items} />
      </div>
    );
  }
}

export default App;
