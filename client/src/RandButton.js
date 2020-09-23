import React from "react";

export class RandButton extends React.Component{

    constructor(props){
        super(props);
        this.state = { randNum: '?' };
        this.handleRandNum = this.handleRandNum.bind(this);
    }

    handleRandNum() {
        this.setState(
            {randNum : Math.round(Math.random() * 10)}
        );
    }
    render() {
        return (
            <button onClick={this.handleRandNum}>
                Rand Num: {this.state.randNum}
            </button>
        );
    }
}