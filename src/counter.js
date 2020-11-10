import React, { Component } from "react";
import ResultInfo from "./resultinfo";

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
      roundLimit: 5,
      roundNumber: 0,
      roundWinner: "",
      matchWinner: ""
    };

    this.lottery = this.lottery.bind(this);
    // this.matchCheck = this.matchCheck.bind(this);
    //this.myChangeHandler = this.myChangeHandler.bind(this);
    //this.mySubmitHandler = this.mySubmitHandler.bind(this);
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
      this.setState(({ userPoint, roundNumber, roundWinner }) => ({
        userPoint: userPoint + 1,
        roundNumber: roundNumber +1,
        roundWinner: "User"
      }));
    } else if (users_choice === PC_choice) {
      this.setState(({ roundWinner, roundNumber }) => ({
        roundWinner: "Draw",
        roundNumber: roundNumber +1
      }));
    } else {
      this.setState(({ pcPoint, roundWinner, roundNumber }) => ({
        pcPoint: pcPoint + 1,
        roundWinner: "PC",
        roundNumber: roundNumber +1
      }));
    }

    

    //this works, sort of, you need to press the button again for it to register
    //also breaks if you swap the round limit (FIXED)
    //I fixed the breaking issue, still doesn't declare you winner as the final round is reached

    //checks if the number of rounds played is the same as the max amount of rounds
    if(this.state.roundNumber === this.state.roundLimit){
      if (this.state.userPoint > this.state.pcPoint){
        this.setState(({ matchWinner }) => ({
          matchWinner: "You Win"
        }));
        alert("you win");
      }
      else if (this.state.pcPoint > this.state.userPoint){
        this.setState(({ matchWinner }) => ({
          matchWinner: "You Lose"
        }));
        alert("you lose");
      }
      else if(this.state.pcPoint === this.state.userPoint){
        this.setState(({ matchWinner }) => ({
          matchWinner: "It's a draw"
        }));
        alert("draw");
      }

    };

    

    //keeps track of how many rounds there has been, moved it into the functions above
    // this.setState(({roundNumber}) => ({
    //   roundNumber: roundNumber +1
    // }));

  };

  //Tried to make it it's own function, did not work
  // matchCheck = (event) => {
    
  //   if(this.state.roundNumber === this.state.roundLimit){
  //     if (this.state.userPoint > this.state.pcPoint){
  //       this.setState(({ matchWinner }) => ({
  //         matchWinner: "You Win"
  //       }));
  //       alert("you win");
  //     }
  //     else if (this.state.pcPoint > this.state.userPoint){
  //       this.setState(({ matchWinner }) => ({
  //         matchWinner: "You Lose"
  //       }));
  //       alert("you lose");
  //     }
  //     else if(this.state.pcPoint === this.state.userPoint){
  //       this.setState(({ matchWinner }) => ({
  //         matchWinner: "It's a draw"
  //       }));
  //       alert("draw");
  //     }

  //   };
  // }

  //initially wanted to go for a form solution to pick rounds
  //finally gave up on a form and just went with hardcoded buttons, since that made sure the input was read
  maxRounds3 = (event) => {
      this.setState({roundLimit: 3});
  }
  maxRounds5 = (event) => {
    this.setState({roundLimit: 5});
  }
  maxRounds9 = (event) => {
  this.setState({roundLimit: 9});
  }


  render(props) {
    return (
      <>
      <p>Enter how many rounds you want to play:</p>  
        {/* <form onSubmit={this.mySubmitHandler}>
          <input
            type='text' pattern="[0-9]*"
            onChange={this.myChangeHandler}
            />
          <input
            type='submit'
            //onClick={this.myChangeHandler}
          />
        </form> */}
        <div>        
          <button onClick={this.maxRounds3}>3</button>
          <button onClick={this.maxRounds5}>5</button>
          <button onClick={this.maxRounds9}>9</button>
        </div>

        <p>Choose your ""weapon""</p>
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
          roundLimit={this.state.roundLimit}
          roundNumber={this.state.roundNumber}
          matchWinner ={this.state.matchWinner}
          
        />
      </>
    );
  }
}

export default Counter;
