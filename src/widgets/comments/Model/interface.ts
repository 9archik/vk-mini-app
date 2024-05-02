import { IComment } from '../../../entities/comments/Model/interfaces';
import { error } from 'console';

export interface ICommentListItemAPI {
	by?: string;
	time?: number;
	kids?: number[];
	id: number;
	text?: string;
	deleted: boolean;
}

export interface ICommentItem extends ICommentListItemAPI {
	isRootNode: boolean;
	parentNodeId: number | null;
	childComments: number[];
}

export interface ICommentEnhItem extends ICommentListItemAPI {
	isRootNode: boolean;
	parentNodeId: number | null;
	childComments: ICommentItem[];
}

export interface ICommentListState {
	[key: number]: ICommentItem;
}
// export interface ICommentListItemNode {
// 	path?: number[];
// 	info?: ICommentListItemAPI;
// 	[key: number]: ICommentListItemNode;
// }

export interface ICommentListError {
	error: string;
}

export interface ICommentsListProps {
	enhancedComments: unknown[];
	addComment: any;
	error: string | null;
}
