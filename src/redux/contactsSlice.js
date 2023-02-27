import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: [],
	reducers: {
		addContacts: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name, number) {
				return {
					payload: {
						id: uniqid(),
						name,
						number,
					},
				};
			},
		},
		removeContact: (state, { payload }) =>
			state.filter(({ id }) => id !== payload),
	},
});

export const { addContacts, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
