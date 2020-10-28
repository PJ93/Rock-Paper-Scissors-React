import React, { Component } from "react";
import ResultInfo from "./ResultInfo";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      ran: "",
      id: "stone",
      temp: Math.floor(Math.random() * 3 + 1),
      userPoint: 0,
      pcPoint: 0,
      roundLimit: 10,
      roundWinner: ""
    };

    this.lottery = this.lottery.bind(this);
  }

  lottery = (event, temp) => {
    const users_choice = event.target.id;
    this.setState({ id: users_choice });
    const PC_choice = ["paper", "stone", "scissors"][
      Math.floor(Math.random() * 3)
    ];
    this.setState({ ran: PC_choice });
    console.log("pc; state =", this.state.ran, "but variable =", PC_choice);
    console.log("user: state =", this.state.id, "but variable =", users_choice);
    if (
      (users_choice === "paper" && PC_choice === "stone") ||
      (users_choice === "stone" && PC_choice === "scissors") ||
      (users_choice === "scissors" && PC_choice === "paper")
    ) {
      this.setState(({ userPoint, roundWinner }) => ({
        userPoint: userPoint + 1,
        roundWinner: "User"
      }));
    } else if (users_choice === PC_choice) {
      this.setState(({ roundWinner }) => ({
        roundWinner: "Draw"
      }));
    } else {
      this.setState(({ pcPoint, roundWinner }) => ({
        pcPoint: pcPoint + 1,
        roundWinner: "PC"
      }));
    }
  };
  render(props) {
    return (
      <>
        <button onClick={this.lottery} id="paper">
          paper
        </button>
        <button onClick={this.lottery} id="stone">
          stone
        </button>
        <button onClick={this.lottery} id="scissors">
          scissors
        </button>
        <ResultInfo
          id={this.state.id}
          ran={this.state.ran}
          roundWinner={this.state.roundWinner}
          userPoint={this.state.userPoint}
          pcPoint={this.state.pcPoint}
        />
      </>
    );
  }
}

export default Counter;
