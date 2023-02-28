import { createSelector } from '@reduxjs/toolkit';

export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts;

export const filteredList = createSelector(
	[getContacts, getFilter],
	(contacts, filter) => {
		return contacts.filter(({ name }) => {
			return name.toLowerCase().includes(filter.toLowerCase());
		});
	}
);
