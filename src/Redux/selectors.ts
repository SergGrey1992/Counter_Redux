import { RootStoreType} from './redux_store';

export const selectStartValue = (state: RootStoreType) => state.reducer.startValue;
export const selectMaxValue = (state: RootStoreType) => state.reducer.maxValue;

export const selectAll = (state: RootStoreType) => state.reducer;