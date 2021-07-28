import React from 'react';
import './App.css';

const Attemp = (props) => {
    let numeroImg = attemptPendu(props.attemps, props.maxAttemp).length
    let img = "pendu"+ numeroImg + ".png"
    return(
        <div>
        <img className= 'mx-auto d-block imgPendu' src={img}></img>
        </div>
    )
    }
function attemptPendu(attemps, maxAttemp){
    let life = []
    for(let i = 1; i <= maxAttemp; i++){
        if( i <= attemps){
            life.push(0)
        }
    }
    return life;
}

export default Attemp