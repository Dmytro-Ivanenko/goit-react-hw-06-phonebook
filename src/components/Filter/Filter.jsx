import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersReducer } from 'redux/filterSlice';
import styles from './filter.module.scss';

const Filter = () => {
	const value = useSelector((state) => state.filterValue);
	const dispatch = useDispatch();

	const handleFilterChange = (filterValue) =>
		dispatch(filtersReducer(filterValue));

	return (
		<label className={styles.label}>
			Find contacts by name
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={({ target }) => handleFilterChange(target.value)}
			/>
		</label>
	);
};

export default Filter;
