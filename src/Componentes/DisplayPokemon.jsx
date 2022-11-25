
import React from 'react'


export default function DisplayPokemon({pokemon}) {

  const [pokemon,setPokemon]= useState([])

  const getPokemons =() => function () {

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limits=905')
    .then((response)=>{
      response.data.results.forEach(pokemon=> {
        axios.get(pokemon.url)
        .then((response)=> { console.log (response)
          setPokemon(datoInicio => [...datoInicio, [response.data.name,  response.data.sprites.other["official-artwork"].front_default, response.data.types[0].type.name]])

        }
        ) 

        
      });
    })

  }

  useEffect(()=> {
    
    getPokemons()
console.log(pokemon)
    , []});
  return (

    <div>
      {
      pokemon.map ((value, index) => {
       <card key={index} {... value} />

     
      } )
}
    </div>
  )
}
const [pokemon,setPokemon]= useState([])

const getPokemons =() => function () {
  
  axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limits=905')
  .then((response)=>{
    response.data.results.forEach(pokemon=> {
      axios.get(pokemon.url)
      .then((response)=> { console.log (response)
        setPokemon(datoInicio => [...datoInicio, [response.data.name,  response.data.sprites.other["official-artwork"].front_default, response.data.types[0].type.name]])

      }
      ) 

      
    });
  })

}

useEffect(()=> getPokemons(), []);