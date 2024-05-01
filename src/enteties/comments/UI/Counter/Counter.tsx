import { FC } from 'react';
import { ICounterComments } from '../../Model/interfaces';
import { Div, Separator, Title } from '@vkontakte/vkui';

const CommentsCounter: FC<ICounterComments> = ({ counter }) => {
	return (
		<>
			<Div>
				<Title size={2}>Комментарии {counter}</Title>
			</Div>

			<Separator />
		</>
	);
};

export default CommentsCounter;
