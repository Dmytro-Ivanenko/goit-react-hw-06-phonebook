import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		setStatusFilter(state, action) {
			state = action.payload;
		},
	},
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
