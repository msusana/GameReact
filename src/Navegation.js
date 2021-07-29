import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Navegation = () =>{    
    return (
       <div className='navegation'>
           <div className='d-inline'>
           <Link to='/'>
              <img src='logoPokemon.png' className='logo'></img>
              </Link>
            <Link to='/Hangman'className='linkNavegation1'>
              Hangman
              </Link>
              <Link to='/Morpion'className='linkNavegation2'>
              Morpion
              </Link>
           </div>
       </div>
            )
     
      }
export default Navegation 