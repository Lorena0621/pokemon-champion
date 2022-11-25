
import './App.css';
import Form from './Componentes/Form';
import Pokeapi from './Componentes/Pokeapi';
import axios from 'axios';
import { useEffect } from 'react';
import ListPokemons from './Componentes/ListPokemons';
function App() {

 


//*const getPokemons =() =>{
  //axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limits=95')//


 // }

//



  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Pokeapi/>
        <ListPokemons/>
      </header>
    </div>
  );
} 

export default App;
