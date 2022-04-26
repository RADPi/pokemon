import React from 'react'

const MuestraPokemon = ({ pokemon }) => {
	return (
		<div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				className='card-img-top'
				alt={`${pokemon.name}-image`}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{pokemon.name}</h5>
				<p className='card-text'>Height: {pokemon.height}</p>
				<p className='card-text'>Weight: {pokemon.weight}</p>
				<p className='card-text'>Species: {pokemon.species.name}</p>
			</div>
		</div>
	)
}

export default MuestraPokemon
