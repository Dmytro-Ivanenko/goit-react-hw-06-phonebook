import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
	contacts: [],
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContacts: {
			reducer(state, action) {
				state.contacts.push(action.payload);
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
		removeContact(state, action) {
			const { payload: id } = action;
			state.contacts = state.contacts.filter((contact) => contact.id !== id);
		},
	},
});

export const { addContacts, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
