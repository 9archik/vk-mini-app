import { FC } from 'react';
import { INewsInfoItemUI } from '../../Model/interfaces';
import { Separator, Spacing, Text, Title, Div } from '@vkontakte/vkui';
import styles from './styles.module.css';

const NewsInfoItem: FC<INewsInfoItemUI> = ({ textWeight = '1', name, value }) => {
	return (
		<>
			<Div className={styles.container}>
				<Text weight={'3'}>{name}:</Text> <Text weight="1">{value}</Text>
			</Div>

			{/* <Separator /> */}
		</>
	);
};

export default NewsInfoItem;
