import { Div } from '@vkontakte/vkui';
import { FC } from 'react';
import Rating from '../rating/rating';
import styles from './styles.module.css';

interface ICaptionCardProp {
	rating: number;
	author: string;
}

const CaptionCard: FC<ICaptionCardProp> = ({ rating, author }) => {
	return (
		<>
			<Rating rating={rating} />
			<div className={styles.author}>{author}</div>
		</>
	);
};

export default CaptionCard;
