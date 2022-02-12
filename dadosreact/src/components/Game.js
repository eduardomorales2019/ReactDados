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
    console.log(roller);
    this.setState({ dado: roller, rolling: true });
    // after 2 second, change the state to false again
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 2000);
  };

  render() {
    return (
      <div className="button__container">
        <div className="game__container">
          <Dado roller={this.state.dado} />
          {/* <Dado roller={this.state.dado} /> */}
        </div>
        <button onClick={this.rolling}>
          {this.state.rolling ? "roling" : "push"}
        </button>
      </div>
    );
  }
}

export default DadosComponent;
