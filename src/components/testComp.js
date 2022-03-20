import React, { Component } from "react";

class DataButton extends Component {
    state = {  } 

    getPets = () => {
        fetch('')
    }

    render() { 
        return (
            <div className="bry"><button className="button" onClick={this.getPets.bind(this)}>Click Me</button></div>
        );
    }
}
 
export default DataButton;>>