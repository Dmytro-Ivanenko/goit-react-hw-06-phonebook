import React from 'react';
import { useSelector } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	// FILTER
	const filteredList = (filterName) => {
		return contacts?.filter(({ name }) => {
			return name.toLowerCase().includes(filterName.toLowerCase());
		});
	};

	return (
		<>
			<Section title="Phonebook">
				<ContactForm />
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
