import { FC } from 'react';
import { IComment } from '../../Model/interfaces';
import { Div, Title, Text } from '@vkontakte/vkui';
import DOMPurify from 'dompurify';

const Comment: FC<IComment> = ({ author, date, text }) => {
	const cleanHtml = DOMPurify.sanitize(text);
	return (
		<div>
			<Title level="1" aria-level={3}>
				{author}
			</Title>
			<Text style={{ margin: '5px 0 0 0' }}>{date}</Text>
			{/* <Text weight="3">{text}</Text> */}
			<div style={{ margin: '5px 0 0 0' }} dangerouslySetInnerHTML={{ __html: cleanHtml }} />
		</div>
	);
};

export default Comment;
