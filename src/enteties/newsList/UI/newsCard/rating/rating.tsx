import { FC } from 'react';
import LikeSVG from '../../../../../shared/Icons/LikeSVG';

import { Div } from '@vkontakte/vkui';
import styles from './styles.module.css';

interface IRating {
	rating: number;
}

const changeColor = (rating: number) => {
	if (rating === 0) {
		return '#a6a6a6';
	}

	if (rating > 0) {
		return '#009100';
	}

	if (rating < 0) {
		return '#b22222';
	}
};

const Rating: FC<IRating> = ({ rating }) => {
	return (
		<div className={styles.container}>
			<LikeSVG
				width={15}
				height={15}
				style={rating < 0 ? { transform: 'rotate(180deg)' } : undefined}
				fill={changeColor(rating)}
			/>

			<span style={{ color: changeColor(rating) }}>{rating}</span>
		</div>
	);
};

export default Rating;
