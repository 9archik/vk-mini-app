import { Div, Headline, Link, Title, Text } from '@vkontakte/vkui';
import { formatSecondsToDate } from '../../../shared/functions/timeToDate';
import NewsInfoItem from './UI/newsInfoItem/newsInfoItem';
import NewsInfoLink from './UI/newsInfoLink/newsInfoLink';
import { useAppSelector } from '../../../app/hooks/reduxTypes';

const NewsInfo = () => {
	const info = useAppSelector((state) => state.activeNews.info);

	if (info !== null) {
		return (
			<>
				<NewsInfoLink href={info.url} />

				<NewsInfoItem textWeight="1" name="Название" value={info.title} />

				<NewsInfoItem
					textWeight="2"
					name="Дата публикации"
					value={formatSecondsToDate(info.time)}
				/>

				<NewsInfoItem textWeight="3" name="Автор" value={info.author} />
			</>
		);
	}

	return <></>;
};

export default NewsInfo;
