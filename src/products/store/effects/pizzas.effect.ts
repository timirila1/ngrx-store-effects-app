import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../actions';
import * as fromService from '../../services';

@Injectable()
export class PizzasEffects {
	constructor(
		private actions$: Actions,
		private pizzaService: fromService.PizzasService
	) { };

	@Effect()
	loadPizzas$ = this.actions$.ofType(fromStore.LOAD_PIZZAS).pipe(
		switchMap(() => {
			return this.pizzaService.getPizzas().pipe(
				map(pizza => new fromStore.LoadPizzasSuccess(pizza)),
				catchError(error => of(new fromStore.LoadPizzasFail(error)))
			)
		})
	);
}