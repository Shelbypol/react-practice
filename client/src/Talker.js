import React from 'react';
import {Button} from './Button';
import {RandButton} from "./RandButton";
import {ToggleBtn} from "./ToggleBtn";


class Talker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {randNum : Math.round(Math.random() * 10)};
        this.handleRandNum = this.handleRandNum.bind(this);
    }

    handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }


    handleRandNum() {
        this.setState(
            {randNum : Math.round(Math.random() * 10)}
        );
    }

    render() {
        return (
            <div>
                <ToggleBtn />
                <Button handleClick={this.handleClick} />
                {/*<RandButton handleRandNum={this.handleRandNum()}/>*/}
            </div>
    )
    }
}


export default Talker;
