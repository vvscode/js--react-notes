import React, { Component } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { TodoForm } from "./components/TodoForm";
import { Filter } from "./components/Filter";
import { addItem, getItems } from "./utils/api";

class App extends Component {
  state = {
    items: null,
    filter: {}
  };
  componentWillMount() {
    getItems().then(items => this.setState({ items }));
  }
  onFilterChange = filter => this.setState({ filter });
  addItem = item => {
    addItem(item).then(newItem =>
      this.setState({
        items: [...this.state.items, newItem]
      })
    );
  };
  getFilteredItems = () => {
    return this.state.filter.showCompleted
      ? this.state.items
      : this.state.items.filter(item => !item.done);
  };
  renderPage() {
    return (
      <div>
        <TodoForm onSubmit={this.addItem} />
        <Filter onFilterChange={this.onFilterChange} />
        <Table items={this.getFilteredItems()} />
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
