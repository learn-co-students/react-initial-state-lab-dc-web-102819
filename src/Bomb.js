import React, { Component } from 'react';

export default class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft : props.initialCount
        }
    }

    render(){
        return(
            this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>120 seconds left before I go boom!</p>
        )
    }
}