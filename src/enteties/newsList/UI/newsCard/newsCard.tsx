import { ContentCard, Div } from '@vkontakte/vkui';
import { FC } from 'react';
import CaptionCard from './captionCard/captionCard';
import { INewsCardProp } from '../../model/interfaces';
import styles from './style.module.css';

const NewsCard: FC<INewsCardProp> = ({ header, img, rating, author, date, onClick }) => {
	return (
		<ContentCard
			src={img?.src}
			alt={img?.alt}
			onClick={onClick}
			caption={<CaptionCard rating={rating} author={author} />}
			header={<div className={styles.header}>{header}</div>}
			subtitle={<>{date}</>}
			mode="tint"
			hasHover={true}
			hasActive={true}
		/>
	);
};
export default NewsCard;
