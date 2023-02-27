import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { addContacts } from '../redux/contactsSlice';
import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	// FORM
	const handleSubmitForm = ({ name, number }) => {
		// name check
		if (!isNameFree(name)) {
			return;
		}

		// add new contact into state
		dispatch(addContacts(name.toLowerCase(), number));
	};

	const isNameFree = (nameToCheck) => {
		const result = contacts?.find(
			({ name }) => name.toLowerCase() === nameToCheck.toLowerCase()
		);

		if (result) {
			Notify.warning(`${nameToCheck} is already in contacts.`);
			return false;
		}

		return true;
	};

	// FILTER
	const filteredList = (filterName) => {
		return contacts.filter(({ name }) => {
			return name.toLowerCase().includes(filterName.toLowerCase());
		});
	};

	return (
		<>
			<Section title="Phonebook">
				<ContactForm onSubmitForm={handleSubmitForm} />
			</Section>

			<Section title="Contacts">
				{contacts?.length > 0 ? (
					<>
						<Filter />
						<ContactList contactsArr={filteredList(filter)} />
					</>
				) : (
					<Notification message="There is no contacts"></Notification>
				)}
			</Section>
		</>
	);
};

export default App;
