import { Div, Headline, Link, Title } from '@vkontakte/vkui';
import { formatSecondsToDate } from '../../../shared/functions/timeToDate';

const NewsItem = () => {
	return (
		<Div>
			<Link target="__blank">Ссылка на новость</Link>
			<Headline>
				Название: <Title level="1">Название</Title>
			</Headline>

			<Headline>
				Дата: <Title level="2">{formatSecondsToDate(39219329)}</Title>
			</Headline>

			<Headline>
				Автор: <Title level="3">автор</Title>
			</Headline>
		</Div>
	);
};

export default NewsItem;
