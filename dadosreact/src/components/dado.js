import React from "react";
import "./styles/dado.css";

class Dado extends React.Component {
  render() {
    return (
      <div className="dado-contenedor">
        <i
          className={`fa fa-dice-${this.props.roller} ${
            this.props.rolling ? "rolando" : ""
          } `}
        ></i>
      </div>
    );
  }
}

export default Dado;
