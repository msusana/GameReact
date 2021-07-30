import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Keyboard from './Keyboard';
import CurrentPokemon from './CurrentPokemon ';
import Attemp from './Attemp';
import Button from 'react-bootstrap/Button';
import Navegation from './Navegation';

const APIURL = "https://pokeapi.co/api/v2/pokemon-form/"
const IMGPATH = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Hangman extends Component{
  state = {
    alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ-".toLowerCase().split(''),
    usedLetter : [],
    win : 0, // 0 neutral| 1 win | -1 lost
    attemps: 0, 
    maxAttemp : 6,
    pokemonIdPicture : "",
    currentPokemon :"",
  }

componentDidMount(){
 this.initGame()
}
pickNewWord = () => {
  let min = 1;
  let max = 890;
  const randomIndex = Math.floor(Math.random() * (max-min))
  return randomIndex;
}

clickLetter = (letter) => { 
  console.log(this.state.currentPokemon, letter)
	if (this.state.usedLetter.indexOf(letter) === -1) {
    const usedLetter = [letter, ...this.state.usedLetter]
  
    let attemps = this.state.attemps
    if (this.state.currentPokemon.indexOf(letter) === -1) {
      attemps = this.state.attemps + 1
    }

    let win = 1
    for (let i = 0; i < this.state.currentPokemon.length; i++) { 
      if (usedLetter.indexOf(this.state.currentPokemon[i]) === -1) { 
        win = 0
      }
    }

    if (attemps >= this.state.maxAttemp && win === 0) { 
      win = -1
    }

    this.setState({ usedLetter, attemps, win })
  }
}

  initGame = () => {
    let rand = this.pickNewWord();
    fetch(APIURL+rand+'/')
    .then((res)=> res.json())
    .then(async(data) => {
       await this.setState({ currentPokemon : data.pokemon['name']});
       await this.setState({ pokemonIdPicture : rand+'.png'});
      })
    this.setState({ usedLetter : [], win:0, attemps:0})
  }

  render(){
    return (
     
      <div  style={{ 
        backgroundImage: "url(/bg4.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        height: '1000px'
      }}>
          <Navegation />
        <Container>
          <Row className="justify-content-center">
            <Col xs lg="4" className= 'align-self-center'>
                <img src='Pokémon_logo.png' className="imgTitle mx-auto d-block" ></img>
            </Col>
          </Row>
          <Row>
            <Col><h1>Hangman</h1></Col>
          </Row>
        </Container>

        <Container className= 'game'>
          <Row className= "d-flex justify-content-center">
            <Col s={12} md={4}>
            <img src={IMGPATH+this.state.pokemonIdPicture} className= 'mx-auto d-block imgPokemon'></img>
            </Col>
            <Col s={12} md={4}>
         {
           (this.state.win === 0 || this.state.win === -1)&&
           <Attemp attemps={this.state.attemps} maxAttemp={this.state.maxAttemp}/>
         }
            </Col>
          </Row> 
        </Container>
        
        {
           <CurrentPokemon currentPokemon= {this.state.currentPokemon} 
           usedLetter= {this.state.usedLetter}
           win= {this.state.win} />
         }
         {
           this.state.win === -1 &&
           <img src='gameover.png' className="mx-auto d-block" ></img>
         }
    
         {
           this.state.win === 0 &&
           <Keyboard alphabet= {this.state.alphabet} action = {this.clickLetter}/>
         }
        
         {
           this.state.win === 1 &&
           <img src='win.png' className="mx-auto d-block" ></img>     
          }
         {
           (this.state.win === -1 || this.state.win === 1) &&
           <Button variant="primary"  
           onClick={() => this.initGame()}
           className= 'mx-auto d-block newGame'>New Game</Button>
         }
           
       
      </div>
     
    )
  }
}

export default Hangman;
