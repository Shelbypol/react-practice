import React from 'react';
// import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

export class ToggleBtn extends React.Component {

    constructor(props){
        super(props);
        this.state = { bgColor: green };
        this.changeBgColor = this.changeBgColor.bind(this);
    }

    changeBgColor() {
        const newColor = this.state.bgColor === green ? yellow : green;
        this.setState({ bgColor: newColor });
    }

    render() {
        return (
            <div style={{background: this.state.bgColor}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeBgColor}>
                    Change color
                </button>
            </div>
        );
    }
}

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('app')
// );