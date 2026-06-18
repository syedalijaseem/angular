import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CounterState } from './states';

const counterFeatureSelector = createFeatureSelector<CounterState>('counter');
export const selectCount = createSelector(
  counterFeatureSelector,
  (state: CounterState) => state.count,
);
