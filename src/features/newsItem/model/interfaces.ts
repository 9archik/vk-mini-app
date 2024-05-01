export interface IActiveNewsItem {
	id: number;
	url?: string;
	title?: string;
	time?: number;
	by?: string;
	text?: string;
	descendants?: number;
	type?: string;
}

interface ICommentsCounterState {
	value: number | null;
	loading: boolean;
	error: boolean;
}

export interface IActiveNewsItemState {
	info: null | IActiveNewsItem;
	commentsCounter: ICommentsCounterState;
}
