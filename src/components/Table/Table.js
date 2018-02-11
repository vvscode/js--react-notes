import React, { Component } from "react";

export default class Table extends Component {
  renderHeader() {
    return (
      <thead>
        <tr>
          <th>Done</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Date</th>
        </tr>
      </thead>
    );
  }
  renderBody() {
    return (
      <tbody>
        {this.props.items.map(item => (
          <tr key={item.id}>
            <td>{item.done}</td>
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
      </table>
    );
  }
}
