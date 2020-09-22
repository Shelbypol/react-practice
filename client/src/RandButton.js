import React from "react";

export class RandButton extends React.Component{

    render() {
        return (
            <button onClick={this.props.handleRandNum}>
                Rand Num: {this.props.handleRandNum}
            </button>
        );
    }
}