import { Div, Headline, Link, Title, Text } from '@vkontakte/vkui';
import { formatSecondsToDate } from '../../../shared/functions/timeToDate';
import NewsInfoItem from './UI/newsInfoItem/newsInfoItem';
import NewsInfoLink from './UI/newsInfoLink/newsInfoLink';
import { useAppSelector } from '../../../app/hooks/reduxTypes';

const NewsInfo = () => {
	const info = useAppSelector((state) => state.activeNews.info);

	console.log('info', info);

	if (info !== null) {
		return (
			<>
				{info.url && <NewsInfoLink href={info.url} />}

				<NewsInfoItem
					textWeight="1"
					name="Название"
					value={info.title ? info.title : 'Неизвестно'}
				/>

				<NewsInfoItem
					textWeight="2"
					name="Дата публикации"
					value={info.time !== undefined ? formatSecondsToDate(info.time) : 'Неизвестно'}
				/>

				<NewsInfoItem textWeight="3" name="Автор" value={info.by ? info.by : 'Неизвестен'} />
			</>
		);
	}

	return <></>;
};

export default NewsInfo;
