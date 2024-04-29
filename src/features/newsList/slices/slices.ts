import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';
import { INewsSlice } from '../model/interfaces';
import { INews } from '../../../widgets/newsList/Model/interfaces';

const initialState: INewsSlice = {
	loading: true,
	error: false,
	array: null,
};

export const newsSlice = createSlice({
	name: 'news',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<INews[] | null>) => {
			state.array = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<boolean>) => {
			state.error = action.payload;
		},
	},
});

export const { setNews, setLoading, setError } = newsSlice.actions;

export default newsSlice.reducer;
