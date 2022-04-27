import React from 'react'

const MuestraPokemon = ({ pokemon }) => {
	const { name, imageURL, height, weight, species } = pokemon
	return (
		<div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
			<img
				src={pokemon.imageURL}
				className='card-img-top'
				alt={`${name}-image`}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>Height: {height}</p>
				<p className='card-text'>Weight: {weight}</p>
				<p className='card-text'>Species: {species}</p>
			</div>
		</div>
	)
}

export default MuestraPokemon
