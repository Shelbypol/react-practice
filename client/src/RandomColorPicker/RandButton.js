import React from 'react';

export class RandButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}
                    className={ this.props.light ? 'light-button' : 'dark-button' }>
                Refresh
            </button>
        );
    }
}