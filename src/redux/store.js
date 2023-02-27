import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './redusers';

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export const persistor = persistStore(store);
