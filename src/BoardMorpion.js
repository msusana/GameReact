import React from 'react';
import './App.css';

const BoardMorpion = (props) => {
    return(
        <div>
            <div className='d-flex flex-wrap justify-content-center align-items-baseline divPlayer'>
                <div>{status}</div>
                    <div>
                        <img src={this.state.xIsNext ? 'x.png' : 'logoPokemon.png'}
                    className='imgPlayer'></img>
                    </div>
            </div>
        <div className='d-flex flex-wrap justify-content-center'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}

      
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
       
      
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
       
</div>
    )
    }

export default BoardMorpion