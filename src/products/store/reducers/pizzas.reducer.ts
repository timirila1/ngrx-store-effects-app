import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
	data: Pizza[],
	loaded: boolean,
	loading: boolean,
}

export const initiailState: PizzaState = {
	data: [],
	loaded: false,
	loading: false,
};

export function reducer(state = initiailState, action: fromPizzas.PizzasAction): PizzaState {

	switch (action.type) {
		case fromPizzas.LOAD_PIZZAS:
			return {
				...state,
				loading: true
			};
		case fromPizzas.LOAD_PIZZAS_FAIL:
			return {
				...state,
				loading: false,
				loaded: false
			};
		case fromPizzas.LOAD_PIZZAS_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true
			}
	}

	return state;
}
