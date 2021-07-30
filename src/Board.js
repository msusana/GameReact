import React, { Component} from 'react';
import Square from './Square';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navegation from './Navegation';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext: true,
            win: 0, // 0: game, 1:winner,-1 game over
            winner: null
        }
    this.initGame()
    }
    initGame(){
        this.setState({ squares : Array(9).fill(null), win:0, winner:null, xIsNext: true })
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares : squares, 
        xIsNext: !this.state.xIsNext,
        })
        const winner = this.calculateWinner(squares);
        if(winner){
            this.setState({winner: winner, win: 1})
            }
      
        const gameOver = this.calculateGameOver(squares);    

        if((winner === null) && (!gameOver)){
            this.setState({win: -1})
          }
      
    }

    pawn(i){
        let pawn = ''
        if(this.state.squares[i] === 'X'){
            pawn = "x.png"
            }else if(this.state.squares[i] === 'O'){
                pawn = "logoPokemon.png"
                }else{
                    pawn = null
                }
        return pawn;
    }

    renderSquare(i){
      const pawn = this.pawn(i);
        return <Square 
        value={pawn}
        onClick= {()=> this.handleClick(i)}
        />
    }
    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    
    calculateGameOver(squares){
        for(let i = 0; i < squares.length; i++){
            if(squares[i] === null){
                return true
            }
        }
    }  

    winner(){
    let img = '';
        if(this.state.winner != null){
            if(this.state.winner === 'X'){
                img = 'x.png'
            }else if(this.state.winner === 'O'){
                img ='logoPokemon.png'
            }
            return (
                <div>
                    <div className= 'd-flex flex-wrap justify-content-center winner'>
                        <img src='winner.png'></img>
                        <img src={img}></img>
                    </div>  

                    <Button variant="primary"  
                    onClick={() => this.initGame()}
                    className= 'mx-auto d-block newGame'>New Game</Button>
                </div>)
        }
    }

    gameOver(){

        if(this.state.winner === null && this.state.win === -1){
        
        return (
                <div>
                    <div className= 'd-flex flex-wrap justify-content-center gameOver'>
                        <img src='gameover.png'></img>
                    </div>  
                    
                    <Button variant="primary"  
                    onClick={() => this.initGame()}
                    className= 'mx-auto d-block newGame'>New Game</Button>
                </div>)
        }
    }

    render(){
        const status = 'Next player : ';
        return(
            <div 
            style={{ 
                backgroundImage: "url(/bg3.jpg)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                height: '1000px'
              }}>
                  <Navegation />
                { (this.state.win === 0 && this.state.winner === null) &&
                <div className='board'>
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
                }
                {this.winner()}
                {this.gameOver()}
            </div>
        )
    }
}

export default Board