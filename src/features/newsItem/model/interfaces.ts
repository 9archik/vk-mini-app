export interface IActiveNewsItem {
	id: number;
	url: string;
	title: string;
	time: number;
	author: string
}

export interface IActiveNewsItemState {
	info: null | IActiveNewsItem;
}
