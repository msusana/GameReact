import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () =>{    
    return (
        <div  style={{ 
            backgroundImage: "url(/bg.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', 
            height: '100vh'
          }}>
              <img src='Pokémon_logo.png' className="imgTitleHome mx-auto d-block" ></img>
              <Container className='d-flex flex-wrap justify-content-center menuHome'>
                  <Row>
                    <Col s={12} md={6} className="menuOption">
                        <Link to='/Hangman'>
                            <h2>Hangman</h2>
                            <img src='pokemonGame.png' className='hangmanMenu'></img>
                        </Link>
                    </Col>
                    <Col s={12} md={6} className="menuOption">
                        <Link to='/Morpion'>
                        <h2>Noughts and Crosses</h2>
                            <img src='morpion.png' className='morpionMenu'></img>
                        </Link>
                    </Col>
                </Row>
              </Container>
        </div>
            )
     
      }
export default Home