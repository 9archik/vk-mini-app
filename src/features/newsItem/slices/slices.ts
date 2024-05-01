import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActiveNewsItem, IActiveNewsItemState } from '../model/interfaces';

const initialState: IActiveNewsItemState = {
	info: null,
};

const newsItemSlice = createSlice({
	name: 'newsItem',
	initialState,
	reducers: {
		setActiveItem: (state, action: PayloadAction<IActiveNewsItem>) => {
			state.info = action.payload;
		},
	},
});

export const { setActiveItem } = newsItemSlice.actions;

export default newsItemSlice.reducer;
