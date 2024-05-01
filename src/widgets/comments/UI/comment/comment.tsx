import { useState } from 'react';
import { ICommentItem, ICommentListItemAPI } from '../../Model/interface';
import { FC } from 'react';
import { Button, Div } from '@vkontakte/vkui';
import Comment from '../../../../enteties/comments/UI/CommentItem/comment';
import DeleteComment from '../../../../enteties/comments/UI/DeleteComment/deleteComment';
import { formatSecondsToDate } from '../../../../shared/functions/timeToDate';
import { getCommentsByIds } from '../../Api/getKidsComments';
import styles from './style.module.css';
interface ICommentBlock {
	comment: ICommentItem;
	addComment: any;
}

const CommentBlock: FC<ICommentBlock> = ({ comment, addComment }) => {
	const { text, id, by, time, kids, childComments, deleted } = comment;
	const [showChild, setShowChild] = useState(false);

	return (
		<Div className={styles.container}>
			{!deleted ? (
				<Comment
					text={text ? text : ''}
					author={by ? by : 'unknown'}
					date={time ? formatSecondsToDate(time) : 'unknown'}
				/>
			) : (
				<DeleteComment />
			)}

			{kids && kids?.length > 0 && childComments.length === 0 && (
				<Button
					style={{ margin: '10px 0 0 0' }}
					onClick={() => {
						if (typeof addComment === 'function') {
							getCommentsByIds(kids).then((res) => {
								for (let i = 0; i < res.length; i++) {
									let el: ICommentItem = {
										...res[i],
										parentNodeId: null,
										childComments: [],
										isRootNode: true,
									};

									addComment(id, el);
								}
							});
						}
					}}
					type={'link'}>
					Показать ответы
				</Button>
			)}

			{childComments.length > 0 &&
				childComments.map((el) => {
					if (typeof el !== 'number') {
						return <CommentBlock comment={el} addComment={addComment} />;
					}
				})}
		</Div>
	);
};

export default CommentBlock;
