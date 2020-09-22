import React from "react";

export class RandButton extends React.Component{

    render() {
        return (
            <button onClick={this.props.handleClick}>
                {this.props.handleRandClick} : num
            </button>
        );
    }
}