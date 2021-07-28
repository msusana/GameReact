import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'

class Keyboard extends Component{
componentDidMount(){

    window.addEventListener("keyup", (e) =>{
        if(this.props.alphabet.indexOf(e.key) !== -1){
            this.props.action(e.key)
        }
    })
}
 render(){
    return (
        <div className='keyboard d-flex justify-content-center flex-wrap'>
        {this.props.alphabet.map(
            (letter, key) => {
                return <Button variant="warning" 
                key={"letter_"+ key} 
                size="lg"
                onClick={()=>this.props.action(letter)}>
                    {letter}</Button>
            }
        )}
        </div>
    )}
}
export default Keyboard