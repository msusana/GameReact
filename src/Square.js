import React, { Component} from 'react';

function Square(props){
    let classname= "img";
    if(props.value === "logoPokemon.png"){
        classname = "marginTop"
    }else{
        classname = "marginTopX"
    }
        return(
            
            <div className="square" onClick={props.onClick}>
                <img src={props.value} className={classname}></img>
            </div>
        )
    }

export default Square