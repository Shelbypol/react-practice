import React from 'react';
import {ClickMeButton} from './ClickMeButton';
import {RandButton} from "./RandButton";
import {ToggleBtn} from "./ToggleBtn";
import {NavBar} from "./NavBar";
import { Button } from 'reactstrap';
import {Jumbotron} from "./Jumbotron";


class Talker extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {randNum : Math.round(Math.random() * 10)};
    //     this.handleRandNum = this.handleRandNum.bind(this);
    // }

    handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }


    render() {
        return (
            <div>
                <NavBar />
                <ToggleBtn />
                <ClickMeButton handleClick={this.handleClick} />
                <RandButton />
                <Jumbotron />
            </div>
    )
    }
}


export default Talker;
