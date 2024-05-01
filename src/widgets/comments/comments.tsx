import { useEffect, useState } from 'react';
import CommentsCounter from '../../enteties/comments/UI/Counter/Counter';
import { useParams } from '@vkontakte/vk-mini-apps-router';
import { getCommentCount } from './Api/getCommentCount';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { getComments } from './Api/getComments';
import {
	ICommentEnhItem,
	ICommentItem,
	ICommentListItemAPI,
	ICommentListState,
} from './Model/interface';
import { useAppDispatch, useAppSelector } from '../../app/hooks/reduxTypes';
import { setComments } from '../../features/comments/slices/slices';
import CommentBlock from './UI/comment/comment';

const getNewComment = (
	comment: ICommentListItemAPI,
	isRootNode = false,
	parentNodeId: number | null,
): ICommentItem => {
	return {
		id: comment.id,
		text: comment.text,
		deleted: comment.deleted,
		by: comment.by,
		time: comment.time,
		kids: comment.kids,
		childComments: [],
		isRootNode,
		parentNodeId,
	};
};

const Comments = () => {
	const params = useParams<'id'>();
	const routeNavigator = useRouteNavigator();
	const dispatch = useAppDispatch();

	const [commentsCounter, setCommentsCounter] = useState<null | number>(null);

	const [comments, setComments] = useState<ICommentListState>([]);

	const addComment = (parentId: number | null, newComment: ICommentItem) => {
		let newCommentFunc = null;
		if (parentId !== null) {
			newComment = getNewComment(newComment, false, parentId);
			setComments((comments) => ({
				...comments,
				[parentId]: {
					...comments[parentId],
					childComments: [...(comments[parentId].childComments as number[]), newComment.id],
				},
			}));
		} else {
			newComment = getNewComment(newComment, true, null);
		}
		setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
	};

	const commentMapper: any = (comment: ICommentItem) => {
		return {
			...comment,
			childComments: comment.childComments
				.map((id) => comments[id])
				.map((comment) => commentMapper(comment)),
		};
	};

	const enhancedComments = Object.values(comments)
		.filter((comment) => {
			return !comment.parentNodeId;
		})
		.map(commentMapper);

	console.log(
		Object.values(comments)
			.filter((comment) => {
				return !comment.parentNodeId;
			})
			.map(commentMapper),
	);

	useEffect(() => {
		if (params?.id && !isNaN(Number(params?.id))) {
			getCommentCount(Number(params.id))
				.then((res: number) => {
					setCommentsCounter(res);
				})
				.catch(() => {});
			getComments(Number(params.id))
				.then((res: ICommentListItemAPI[] | undefined) => {
					if (res) {
						for (let i = 0; i < res.length; i++) {
							let el: ICommentItem = {
								...res[i],
								parentNodeId: null,
								childComments: [],
								isRootNode: true,
							};

							addComment(null, el);
						}
					}
				})
				.catch(() => {});
		} else {
			routeNavigator.push('*');
		}
	}, []);

	return (
		<>
			<CommentsCounter counter={commentsCounter ? commentsCounter : 0} />

			{enhancedComments.map((comment, key) => {
				let commentItem = comment as ICommentItem;

				return <CommentBlock comment={commentItem} addComment={addComment} />;
			})}
		</>
	);
};

export default Comments;
