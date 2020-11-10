import React, { Component } from "react";

class ReactInfo extends Component {
  render(props) {
    return (
      <>
        <div>You choice: {`${this.props.id}`}</div>
        <div>PC choice: {`${this.props.ran}`}</div>
        <div>Round Winner: {`${this.props.roundWinner}`}</div>
        <div>User Point: {`${this.props.userPoint}`}</div>
        <div>PC Point: {`${this.props.pcPoint}`}</div>
        <div>Round: {`${this.props.roundNumber}`}/{`${this.props.roundLimit}`}</div>
        <div>Match winner: {`${this.props.matchWinner}`}</div>
      </>
    );
  }
}
export default ReactInfo;