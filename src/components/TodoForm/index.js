import React, { Component } from "react";

class TodoForm extends Component {
  onSubmit = ev => {
    ev.preventDefault();
    let form = ev.target;
    let data = [...form.querySelectorAll("[name]")].reduce((hash, item) => {
      hash[item.getAttribute("name")] = item.value;
      return hash;
    }, {});
    this.props.onSubmit(data);
    form.reset();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="title" placeholder="title" autoFocus />
        <button>Add</button>
      </form>
    );
  }
}

export { TodoForm };
