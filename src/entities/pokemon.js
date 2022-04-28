class Pokemon {
	id
	name
	imageURL
	height
	weight
	species

	constructor(apiData) {
		this.id = apiData.id
		this.name = apiData.name
		this.imageURL = apiData.sprites?.other['official-artwork'].front_default
		this.height = apiData.height
		this.weight = apiData.weight
		this.species = apiData.species.name
	}
}

export default Pokemon
