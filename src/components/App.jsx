import React from 'react';
import { useSelector } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

import { getContacts } from '../redux/selectors';

const App = () => {
	const contacts = useSelector(getContacts);

	return (
		<>
			<Section title="Phonebook">
				<ContactForm />
			</Section>

			<Section title="Contacts">
				{contacts?.length > 0 ? (
					<>
						<Filter />
						<ContactList />
					</>
				) : (
					<Notification message="There is no contacts"></Notification>
				)}
			</Section>
		</>
	);
};

export default App;
