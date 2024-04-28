import { ContentCard, Div } from '@vkontakte/vkui';
import { FC } from 'react';
import CaptionCard from './captionCard/captionCard';

interface INewsCardProp {
	header: React.ReactNode | string;
	img?: {
		src: string;
		alt: string;
	};
	author: string;
	rating: number;
	date: string;
}

const NewsCard: FC<INewsCardProp> = ({ header, img, rating, author, date }) => {
	return (
		<ContentCard
			src={img?.src}
			alt={img?.alt}
			caption={<CaptionCard rating={rating} author={author} />}
			header={header}
			subtitle={<>{date}</>}
			mode="tint"
			hasHover={true}
			hasActive={true}
		/>
	);
};
export default NewsCard;
