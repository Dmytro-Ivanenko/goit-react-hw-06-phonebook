import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		setFilter: (state, { payload }) => payload,
	},
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
