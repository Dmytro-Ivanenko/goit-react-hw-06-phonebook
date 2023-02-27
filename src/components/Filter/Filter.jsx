import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtersReducer } from 'redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import styles from './filter.module.scss';

const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	const handleFilterChange = (value) => dispatch(filtersReducer(value));

	return (
		<label className={styles.label}>
			Find contacts by name
			<input
				className={styles.input}
				type="text"
				value={filter}
				onChange={({ target }) => handleFilterChange(target.value)}
			/>
		</label>
	);
};

export default Filter;
