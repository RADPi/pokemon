import { types } from '../../types'

export const pokemonReducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			}
		case types.LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				user: null,
			}
		case types.FETCH_POKEMONS_LIST_START:
		case types.FETCH_POKEMONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload,
			};
		case types.FETCH_POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonsList: action.payload,
      };
    case types.FETCH_POKEMONS_LIST_FAILURE:
    case types.FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
		default:
			return state
	}
}