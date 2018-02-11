import React, { Component } from "react";

class Filter extends Component {
  onChange = ev => {
    let form = ev.target.closest("form");
    let data = [...form.querySelectorAll("[name]")].reduce((hash, el) => {
      hash[el.getAttribute("name")] =
        el.getAttribute("type") === "checkbox" ? el.checked : el.value;
      return hash;
    }, {});
    this.props.onFilterChange(data);
  };
  render() {
    return (
      <form onChange={this.onChange}>
        <label>
          Show completed<input type="checkbox" name="showCompleted" />
        </label>
      </form>
    );
  }
}

export { Filter };
