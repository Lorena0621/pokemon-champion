import { createContext } from "react";
import { useState } from 'react';


const useContext= ({
name: null,
    type: null,
    weight: null,

});


function App() {
	const allPokemon = [
		'All',
		...new Set(value.map(pokemon => pokemon.type)),
	];

	const [type, setPokemon] = useState(allPokemon);
	const [pokemon,value]= useState([])

	const filterPokemon= (type) => {
		if (type === 'All'){
			setPokemon(pokemon)
			return
		}

		const filterPokemon = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='type'>
				<h1>
					Filter <span>pokemon</span> 
				</h1>
			
			</div>

			<Buttom2 type={type} filterCategory={filterCategory}/>

			<Buttom submit={pokemon}/>
		</>
	);
}

export default App;
