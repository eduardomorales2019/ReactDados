import React from "react";
import Dado from "./dado";

class DadosComponent extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "Four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { dado: "one", rolling: false };
    this.rolling = this.rollingDado.bind(this);
  }

  rollingDado = () => {
    const roller =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    console.log(roller, "Soy la nuevo state de sides ");
    this.setState({ dado: roller, rolling: true });
    // after 2 second, change the state to false again
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 2000);
  };

  render() {
    const diseno = {
      color: "purple",
      background: "pink",
    };
    return (
      <div className="button__container">
        <div className="game__container">
          <Dado roller={this.state.dado} rolling={this.state.rolling} />
          <Dado roller={this.state.dado} rolling={this.state.rolling} />
        </div>
        <button
          style={this.props.rolling === true ? diseno : null}
          onClick={this.rolling}
          disabled={this.state.rolling}
          className=""
        >
          {this.state.rolling ? "roling dado" : "push"}
        </button>
      </div>
    );
  }
}

export default DadosComponent;
