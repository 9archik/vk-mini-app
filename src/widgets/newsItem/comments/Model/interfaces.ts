export interface IComment {
	level: number;
	id: number;
	text: string;
	time: number;
	deleted?: boolean;
	author: string;
}

export type DeleteCommentType = Pick<IComment, 'level' | 'id'>;

export interface ICounterComments {
	counter: number;
}
