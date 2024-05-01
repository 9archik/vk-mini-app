import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsList/slices/slices';
import newsItemReducer from '../features/newsItem/slices/slices';

const reducer = combineReducers({
	news: newsReducer,
	activeNews: newsItemReducer,
});

export const store = configureStore({
	reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
