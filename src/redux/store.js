import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { persistStore } from 'redux-persist';
import persistedReducer from './redusers';

export const store = configureStore({
	reducer: {
		persistedReducer,
	},
});

export const persistor = persistStore(store);
