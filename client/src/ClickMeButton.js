import React from 'react';

export class ClickMeButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.handleClick}>
                Click me!
            </button>
        );
    }
}