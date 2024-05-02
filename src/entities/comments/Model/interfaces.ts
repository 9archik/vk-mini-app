export interface IComment {
	text: string;
	date: string;
	author: string;
}

export interface ICounterComments {
	counter: string;
	loading: boolean;
	onClickUpdate: () => void;
	updating: boolean;
}
