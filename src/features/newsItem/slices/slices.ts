import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActiveNewsItem, IActiveNewsItemState } from '../model/interfaces';

const initialState: IActiveNewsItemState = {
	info: null,
	commentsCounter: {
		loading: true,
		error: false,
		value: null,
	},
};

const newsItemSlice = createSlice({
	name: 'newsItem',
	initialState,
	reducers: {
		setActiveItem: (state, action: PayloadAction<IActiveNewsItem>) => {
			state.info = action.payload;
		},

		setCommentsCounterValue: (state, action: PayloadAction<number | null>) => {
			if (state.commentsCounter) {
				state.commentsCounter.value = action.payload;
			}
		},

		setCommentsCounterLoading: (state, action: PayloadAction<boolean>) => {
			if (state.commentsCounter) {
				state.commentsCounter.loading = action.payload;
			}
		},

		setCommentsCounterError: (state, action: PayloadAction<boolean>) => {
			if (state.commentsCounter) {
				state.commentsCounter.error = action.payload;
			}
		},
	},
});

export const {
	setActiveItem,
	setCommentsCounterValue,
	setCommentsCounterError,
	setCommentsCounterLoading,
} = newsItemSlice.actions;

export default newsItemSlice.reducer;
