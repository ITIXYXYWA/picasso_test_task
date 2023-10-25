import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from '@shared/api/typicode/posts';

const rootReducer = combineReducers({
	[postApi.reducerPath]: postApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware),
});
