import React from 'react';
import {Button} from './Button';
import {RandButton} from "./RandButton";


class Talker extends React.Component {

    handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    // handleRandNum() {
    //     return "" + Math.round(Math.random() * 10) + 1;
    // }

    render() {
        return (
            <div>
                <Button handleClick={this.handleClick} />
                <RandButton handleRandClick={Math.round(Math.random() * 10) + 1}/>
            </div>
    )
    }
}


export default Talker;
