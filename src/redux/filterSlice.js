import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
	filterValue: '',
};
const filterSlice = createSlice({
	name: 'filter',
	initialState: filtersInitialState,
	reducers: {
		setStatusFilter(state, action) {
			state.filterValue = action.payload;
		},
	},
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
