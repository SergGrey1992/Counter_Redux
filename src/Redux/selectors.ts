import { RootStoreType} from './redux_store';

export const selectAll = (state: RootStoreType) => state.reducer;