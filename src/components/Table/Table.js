import React, { Component } from "react";
import sortBy from "../../utils/sortBy";

const COLUMNS = ["done", "title", "priority", "date"];

export default class Table extends Component {
  state = {
    sortBy: null
  };
  renderHeader() {
    return (
      <thead>
        <tr>
          {COLUMNS.map(name => (
            <th key={name}>
              {name}
              <hr />
              <button onClick={_ => this.setSortBy(name)}>^</button>
              <button onClick={_ => this.setSortBy(`-${name}`)}>v</button>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  setSortBy = sortBy =>
    this.setState({
      sortBy
    });
  renderBody() {
    return (
      <tbody>
        {sortBy(this.props.items, this.state.sortBy).map(item => (
          <tr key={item.id}>
            <td>{item.done ? "X" : ""}</td>
            <td>{item.title}</td>
            <td>{item.priority}</td>
            <td>{`${item.date}`}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  render() {
    return (
      <table>
        {this.renderHeader()}
        {this.renderBody()}
        <caption>{this.state.sortBy}</caption>
      </table>
    );
  }
}
