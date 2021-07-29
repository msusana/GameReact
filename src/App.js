import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegation from './Navegation';
import Morpion from './Morpion';
import Home from './Home';
import Hangman from './Hangman';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component{

componentDidMount(){

}



  render(){
    return (
     
      <div>
      <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/Hangman' exact component={Hangman}/>
        <Route path='/Morpion' exact component={Morpion}/>
      </Router>
           
       
      </div>
     
    )
  }
}

export default App;
