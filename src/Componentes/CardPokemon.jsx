import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CardPokemon(props) {

    const[onePokemon]= useState()

    const getPokemons=(url)=> {

        axios.get(url)
        .then(response => console.log(response))

    }

    useEffect (() => {
       getPokemons(props.url) 
    }, 

    )

  return (
    <div>
        <div class="card">
  <div class="card-header">
    {onePokemon.name}
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
    </div>
  )
}
