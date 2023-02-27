import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { removeContact } from '../../redux/contactsSlice';
import styles from './contactList.module.scss';

const ContactList = ({ contactsArr }) => {
	const dispatch = useDispatch();
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

ContactList.propTypes = {
	contactsArr: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
};

export default ContactList;
