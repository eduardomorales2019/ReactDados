import React from "react";
import "./styles/dado.css";

class Dado extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="dado-contenedor">
        <i className={`fa fa-dice-${this.props.roller}`}></i>
      </div>
    );
  }
}

export default Dado;
