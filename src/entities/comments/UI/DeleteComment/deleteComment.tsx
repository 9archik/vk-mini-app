import { FC } from 'react';
import { Text } from '@vkontakte/vkui';
// import { DeleteCommentType } from '../../Model/interfaces';

const DeleteComment = () => {
	return (
		<div style={{ margin: '10px 0 0 0' }}>
			<Text weight="3" aria-level={3}>
				Комментарий был удален
			</Text>
		</div>
	);
};

export default DeleteComment;
