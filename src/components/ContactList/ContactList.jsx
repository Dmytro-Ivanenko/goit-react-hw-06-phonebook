import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { removeContact } from '../../redux/contactsSlice';
import { filteredList } from '../../redux/selectors';
import styles from './contactList.module.scss';

const ContactList = () => {
	const dispatch = useDispatch();
	const contactsArr = useSelector(filteredList);
	return (
		<ul>
			{contactsArr.map(({ id, name, number }) => {
				return (
					<li key={id} className={styles.li}>
						<p className={styles.name}>{name}:</p>
						<p className={styles.number}>{number}</p>
						<Button
							type="button"
							onClickBtn={() => dispatch(removeContact(id))}
						>
							Delete
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
