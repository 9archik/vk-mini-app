export interface INews {
	by: string;
	descedants: number;
	id: number;
	time: number;
	title: string;
	type: string;
	url: string;
	score: number;
	text?: string;
	kids?: number[];
}

export interface IFullfilledNewsList {
	array: any;
}
