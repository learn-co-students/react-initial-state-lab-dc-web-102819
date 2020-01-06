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
            this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        )
    }
}