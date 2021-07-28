import React from 'react';
import './App.css';

const CurrentPokemon = (props) =>{    
    return (
        <div className='currentWord d-flex justify-content-center flex-wrap'>
            {props.currentPokemon.split('').map(
                (letter, key)=>{
                    let status= "finded"
                    if(props.usedLetter.indexOf(letter)=== -1){

                        if(props.win === -1){
                            status = "lost"
                        }else{
                           status = "notfinded" 
                        }
                    }

        return <span key={"letter"+ key} className={status}>
                    {status === "finded" ? letter : (props.win === -1 ? letter :"❓")}
            </span>
                }
            )
     
      }
        </div>
    )
}

export default CurrentPokemon 