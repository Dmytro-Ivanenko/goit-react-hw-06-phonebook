import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filtersReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
