import React, { Component } from "react";

class DataButton extends Component {
  state = {};

  getPets = () => {
    fetch("http://localhost:3000/donuts", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className="bry">
        <button className="button" onClick={this.getPets.bind(this)}>
          Click Me
        </button>
      </div>
    );
  }
}

export default DataButton;
