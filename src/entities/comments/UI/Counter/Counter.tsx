import { FC } from 'react';
import { ICounterComments } from '../../Model/interfaces';
import { Button, Div, Separator, Spinner, Title, Text } from '@vkontakte/vkui';
import styles from './style.module.css';

const CommentsCounter: FC<ICounterComments> = ({ counter, loading, onClickUpdate, updating }) => {
	if (loading) {
		return (
			<Div>
				<Spinner />
			</Div>
		);
	}
	return (
		<>
			<Div className={styles.container}>
				<Title size={2}>Комментарии {counter}</Title>

				<Button disabled={updating} loading={updating} onClick={onClickUpdate}>
					<Text weight={'1'}>Обновить комментарии</Text>
				</Button>
			</Div>

			<Separator />
		</>
	);
};

export default CommentsCounter;
