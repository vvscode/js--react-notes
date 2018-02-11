import React, { Component } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { TodoForm } from "./components/TodoForm";
import { addItem, getItems } from "./utils/api";

class App extends Component {
  state = {
    items: null
  };
  componentWillMount() {
    getItems().then(items => this.setState({ items }));
  }
  addItem = item => {
    addItem(item).then(newItem =>
      this.setState({
        items: [...this.state.items, newItem]
      })
    );
  };
  renderPage() {
    return (
      <div>
        <TodoForm onSubmit={this.addItem} />
        <Table items={this.state.items} />
      </div>
    );
  }
  renderSpinner() {
    return <h1>Spinner...</h1>;
  }
  render() {
    return (
      <div className="App">
        {this.state.items ? this.renderPage() : this.renderSpinner()}
      </div>
    );
  }
}

export default App;
