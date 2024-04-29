import { FC } from 'react';
import { ICounterComments } from '../../Model/interfaces';
import { Div, Separator, Title } from '@vkontakte/vkui';

const Counter: FC<ICounterComments> = ({ counter }) => {
	return (
		<Div>
			<Title size={2}>Количество комментариев {counter}</Title>

			<Separator />
		</Div>
	);
};

export default Counter;
