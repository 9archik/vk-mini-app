import { IComment } from '../../../enteties/comments/Model/interfaces';

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
