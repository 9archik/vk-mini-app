import { useEffect, useState } from 'react';
import CommentsCounter from '../../entities/comments/UI/Counter/Counter';
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
import CommentBlock from './UI/comment/comment';
import {
	setCommentsCounterLoading,
	setCommentsCounterValue,
} from '../../features/newsItem/slices/slices';
import CommentList from './Blocks/CommentList/commentList';

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

	const commentsCounter = useAppSelector((state) => state.activeNews.commentsCounter.value);
	const commentsCounterLoading = useAppSelector(
		(state) => state.activeNews.commentsCounter.loading,
	);

	const [commentsUpdating, setCommentsUpdating] = useState(false);
	const [commentsError, setCommentsError] = useState<null | string>(null);
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

	const setCommentsState = (id: number) => {
		getComments(Number(id))
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
				setCommentsError(null);
				setCommentsUpdating(false);
			})
			.catch((err: Error) => {
				setCommentsUpdating(false);
				setCommentsError(err.name);
				dispatch(setCommentsCounterLoading(false));
			});
	};

	const loadingComments = () => {
		if (params?.id && !isNaN(Number(params?.id))) {
			setCommentsState(Number(params.id));
		} else {
			routeNavigator.push('*');
		}
	};

	const updateComments = () => {
		if (params?.id && !isNaN(Number(params?.id))) {
			getCommentCount(Number(params.id))
				.then((res: number) => {
					dispatch(setCommentsCounterValue(res));
					dispatch(setCommentsCounterLoading(false));
				})
				.catch(() => {});

			setCommentsState(Number(params.id));
		} else {
			routeNavigator.push('*');
		}
	};

	useEffect(() => {
		setCommentsUpdating(true);
		setComments([]);
		loadingComments();
	}, []);

	const onClickUpdate = () => {
		setCommentsUpdating(true);
		setComments([]);
		updateComments();
	};

	return (
		<>
			<CommentsCounter
				loading={commentsCounterLoading}
				counter={commentsCounter !== null ? String(commentsCounter) : 'кол-во неизвестно'}
				onClickUpdate={onClickUpdate}
				updating={commentsUpdating}
			/>

			{!commentsUpdating && (
				<CommentList
					error={commentsError}
					enhancedComments={enhancedComments}
					addComment={addComment}
				/>
			)}
		</>
	);
};

export default Comments;
