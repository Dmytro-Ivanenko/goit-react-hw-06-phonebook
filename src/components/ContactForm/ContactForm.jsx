import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from '../Button/Button';
import styles from './contactForm.module.scss';

const ContactForm = () => {
	const [state, setState] = useState({
		name: '',
		number: '',
	});

	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();

	// Inputs
	const onChangeInput = ({ target }) => {
		setState((prevState) => {
			return { ...prevState, [target.name]: target.value };
		});
	};

	// Submit
	const handleSubmitForm = (evn) => {
		evn.preventDefault();
		const { name: inpName, number: inpNumber } = state;

		// name check
		if (
			contacts?.find(({ name }) => name.toLowerCase() === inpName.toLowerCase())
		) {
			Notify.warning(`${inpName} is already in contacts.`);
			return;
		}

		// add new contact into store
		dispatch(addContacts(inpName.toLowerCase(), inpNumber));
		evn.target.reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmitForm}>
			<label className={styles.label} htmlFor="name">
				Name
			</label>
			<input
				className={styles.input}
				type="text"
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				onChange={onChangeInput}
				required
			/>

			<label className={styles.label} htmlFor="number">
				Number
			</label>
			<input
				className={styles.input}
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				onChange={onChangeInput}
				required
			/>

			<Button type="submit">Add contact</Button>
		</form>
	);
};

export default ContactForm;
