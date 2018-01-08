import { ActionReducerMap } from '@ngrx/store';
import * as fromPizza from './pizzas.reducer';

export interface ProductsState {
	pizzas: fromPizza.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
	pizzas: fromPizza.reducer
}
