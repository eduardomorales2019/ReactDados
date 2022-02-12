import React from "react";
import Dado from "./dado";

class DadosComponent extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "Four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { dado: "one", dado2: "five", dado3: "two", rolling: false };
    this.rolling = this.rollingDado.bind(this);
  }

  rollingDado = () => {
    const roller =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const roller2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const roller3 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({
      dado: roller,
      dado2: roller2,
      dado3: roller3,
      rolling: true,
    });
    // after 2 second, change the state to false again
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 2000);
  };

  render() {
    return (
      <div className="button__container">
        <div className="game__container">
          <Dado roller={this.state.dado} rolling={this.state.rolling} />
          <Dado roller={this.state.dado2} rolling={this.state.rolling} />
          <Dado roller={this.state.dado3} rolling={this.state.rolling} />
        </div>
        <button
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
