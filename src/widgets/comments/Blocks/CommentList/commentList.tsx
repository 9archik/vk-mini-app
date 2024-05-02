import { ICommentsListProps, ICommentItem } from '../../Model/interface';
import { FC } from 'react';
import { Div } from '@vkontakte/vkui';
import CommentBlock from '../../UI/comment/comment';
import Error from '../error/error';
import styles from './styles.module.css';
const CommentList: FC<ICommentsListProps> = ({ enhancedComments, addComment, error }) => {
	if (error) {
		return <Error error={error} />;
	}

	if (enhancedComments.length === 0) {
		return <Div className={styles.container}>Комментариев пока нет</Div>;
	}
	return (
		<>
			{enhancedComments.map((comment, key) => {
				let commentItem = comment as ICommentItem;

				return <CommentBlock key={key} comment={commentItem} addComment={addComment} />;
			})}
		</>
	);
};

export default CommentList;
