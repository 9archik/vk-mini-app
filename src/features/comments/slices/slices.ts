import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommentListItemAPI } from '../../../widgets/comments/Model/interface';

interface ICommentsInfoRedux {
	info: ICommentListItemAPI[];
}

const initialState: ICommentsInfoRedux = {
	info: [] as ICommentListItemAPI[],
};

const newsItemSlice = createSlice({
	name: 'newsItem',
	initialState,
	reducers: {
		setComments: (state, action: PayloadAction<ICommentListItemAPI[]>) => {
			state.info = JSON.parse(JSON.stringify(action.payload));
		},
	},
});

export const { setComments } = newsItemSlice.actions;

export default newsItemSlice.reducer;
